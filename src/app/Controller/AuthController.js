import { AccountsModel } from '../Models/AccountsModel.js';
import jwt from 'jsonwebtoken';
import sendEmailForgotPassword from '../utils/sendEmail.js';
import notifyEmail from '../utils/notifyEmail.js';

const generatorAccessToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.CODE_SIGN_JWT);
};

//
export const getAllUsers = async (req, res) => {
    try {
        const users = await AccountsModel.find();

        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
// register
export const registerUser = async (req, res) => {
    const newUser = req.body;
    newUser.role = 'user';
    try {
        const userExist = await AccountsModel.findOne({
            email: req.body.email,
        });
        if (userExist) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Email đã tồn tại',
            });
        }

        const user = await AccountsModel(newUser);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// login
export const login = async (req, res) => {
    console.log(req.body);
    try {
        const user = await AccountsModel.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (!user) {
            res.status(401).json({ statusCode: 400, message: 'Không tìm thấy người dùng' });
        } else {
            const { password, ...orthers } = user._doc;
            const token = generatorAccessToken(user);
            res.cookie('accessToken', token, {
                httpOnly: true,
                secure: true, // Đảm bảo sử dụng kết nối HTTPS
                path: '/',
                origin: `${process.env.ORIGIN_FRONT_END}`,
                sameSite: 'none',
                maxAge: 365 * 24 * 60 * 60 * 1000,
            });
            res.status(200).json({
                user: {
                    ...orthers,
                    accessToken: token,
                },
            });
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const logout = async (req, res) => {
    res.cookie('accessToken', '', {
        httpOnly: true,
        secure: true, // Đảm bảo sử dụng kết nối HTTPS
        path: '/',
        origin: `${process.env.ORIGIN_FRONT_END}`,
        sameSite: 'none',
    });
    res.status(200).json('Logout success!');
};
export const updateCart = async (req, res) => {
    const user = await AccountsModel.findOne({ _id: req.user._id });
    let userAfterUpdate;
    const field = req.params.slug;
    const newCart = user[[field]].filter((car) => {
        if (Object.keys(car)[0] !== req.body.params.IDProduct) {
            return car;
        }
    });

    if (req.body.params.query == 'add') {
        userAfterUpdate = await AccountsModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                [field]: [
                    ...newCart,
                    { [req.body.params.IDProduct]: req.body.params.number, option: req.body.params.option },
                ],
            },
            {
                new: true,
            },
        );
    } else {
        userAfterUpdate = await AccountsModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                [field]: newCart,
            },
            { new: true },
        );
    }

    return res.status(200).json(userAfterUpdate);
};
