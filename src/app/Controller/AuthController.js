import { AccountsModel } from '../Models/AccountsModel.js';
import jwt from 'jsonwebtoken';
import sendEmailForgotPassword from '../utils/sendEmail.js';
import notifyEmail from '../utils/notifyEmail.js';
let refreshTokens = [];

const generatorAccessToken = (user, timeExp = '300s') => {
    return jwt.sign({ _id: user._id }, 'mk', {
        expiresIn: timeExp,
    });
};
const generatorRefreshToken = (user) => {
    return jwt.sign({ _id: user._id }, 'mkrf');
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
    try {
        const user = await AccountsModel(newUser);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// login
export const login = async (req, res) => {
    try {
        const user = await AccountsModel.findOne({
            userName: req.body.params.userName,
            password: req.body.params.password,
        });
        if (!user) {
            res.status(401).json('Không tìm thấy người dùng');
        } else {
            const { password, ...orthers } = user._doc;
            const token = generatorAccessToken(user);
            const refreshToken = generatorRefreshToken(user);
            refreshTokens.push(refreshToken);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false, // Đảm bảo sử dụng kết nối HTTPS
                path: '/',
                origin: 'http://localhost:3000',
                sameSite: 'strict',
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
export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            res.status(401).json('You are not Authenticated!');
            return;
        }

        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json('Token is not valid!!!!!!!!!!!!!!!!');
        }
        jwt.verify(refreshToken, 'mkrf', (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((rfToken) => rfToken !== refreshToken);
            const newAccessToken = generatorAccessToken(user);
            const newRefreshToken = generatorRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false, // Đảm bảo sử dụng kết nối HTTPS
                path: '/',
                origin: 'http://localhost:3000',
                sameSite: 'strict',
            });
            res.status(200).json({ accessToken: newAccessToken });
        });
    } catch (error) {
        res.status(401).json(error);
    }
};

export const logout = async (req, res) => {
    refreshTokens = refreshTokens.filter((rfToken) => rfToken !== req.cookies.refreshToken);
    res.clearCookie('refreshToken');
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
        // http://localhost:5000/auth/updateCart: { params: { query: 'add', IDProduct: } // }

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
let listTokenForgotPass = [];

export const forgot = async (req, res) => {
    listTokenForgotPass = [];
    const email = req.body.params.email;
    const user = await AccountsModel.findOne({ email: email });
    if (!user) {
        return res.status(400).json('Không tìm thấy người dùng');
    }
    const accessTokenForgotPass = jwt.sign({}, 'mk', {
        expiresIn: '600s',
    });
    try {
        const respon = await sendEmailForgotPassword(user, accessTokenForgotPass);
        res.status(200).json('send email sussess');
    } catch (error) {
        res.status(401).json('send email failed');
    }
};

export const forgotCode = async (req, res) => {
    const email = req.body.params.email;
    const newPassword = req.body.params.password;
    const token = req.body.params.token;
    console.log(email, newPassword);
    if (listTokenForgotPass.includes(token)) {
        return res.status(400).json('Token is not valid');
    }
    try {
        const user = await AccountsModel.findOneAndUpdate(
            { email: email },
            {
                password: newPassword,
            },
            { new: true },
        );
        listTokenForgotPass.push(token);
        res.status(200).json('Successfully Forgot Password');
    } catch (error) {
        res.status(400).json('Cant not find user and update');
    }
};

export const notifyEmaileToUser = async (req, res) => {
    const email = req.body.params.email;
    const locate = req.body.params.locate;
    const name = req.body.params.name;

    const information = req.body.params.information;
    const user = await AccountsModel.findOne({ email: email });
    if (!user) {
        return res.status(401).json('Không tìm thấy người dùng');
    }
    try {
        const resq = await notifyEmail(user, information, locate, name);
        res.status(200).json('Notify to user success');
    } catch (error) {
        res.status(400).json('Notify to user failed');
    }
};
