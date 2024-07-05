import { AccountsModel } from '../Models/AccountsModel.js';
import jwt from 'jsonwebtoken';
import { ListModel } from '../Models/ListModel.js';

const generatorAccessToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.CODE_SIGN_JWT);
};

//
export const getAllUsers = async (req, res) => {
    try {
        const users = await AccountsModel.find({
            confirm: req.query.confirm,
            role: 'user',
            listDateBooked: { $exists: true, $not: { $size: 0 } },
        }).select('-password -role');

        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
export const getUser = async (req, res) => {
    try {
        let user = null;
        if (!req.user.role === 'admin') {
            return res.status(403).json('Không có quyền');
        }
        if (req.body.email === 'admin@gmail.com') {
            user = await AccountsModel.find({
                role: 'admin',
                listDateBooked: { $exists: true, $not: { $size: 0 } },
            }).select('-password -role');
        } else {
            user = await AccountsModel.find({
                role: 'user',
                email: req.body.email,
            }).select('-password -role');
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
// register
export const registerUser = async (req, res) => {
    try {
        const userExist = await AccountsModel.findOne({
            email: req.body.email,
        });
        console.log(userExist);
        if (userExist) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Email đã tồn tại',
            });
        }

        const user = await AccountsModel(req.body);
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
export const updateUser = async (req, res) => {
    try {
        const user = await AccountsModel.findOne({
            email: req.body.email,
        });
        if (!user) return res.status(403).json({ statusCode: 403, message: 'Không tím thấy user' });
        const newUser = await AccountsModel.findByIdAndUpdate(user._id, {
            confirm: 'yes',
        });
        res.status(200).json('Update confirm thành công');
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Lỗi khi cập nhật server' });
    }
};
export const deleteListBooking = async (req, res) => {
    try {
        const user = await AccountsModel.findOne({
            email: req.body.email,
        });
        if (!user) return res.status(403).json({ statusCode: 403, message: 'Không tím thấy user' });
        const listBooking = [];
        //  {
        // date: 24/04/2024 , hours[1,2,3]
        // }
        for (let i = 0; i < user.listDateBooked.length; i++) {
            listBooking.push(user.listDateBooked[i]);
        }
        await AccountsModel.findByIdAndUpdate(user._id, {
            listDateBooked: [],
            confirm: 'no',
        });
        for (let i = 0; i < listBooking.length; i++) {
            const dateField = await ListModel.findOne({
                date: listBooking[i].date,
            });
            if (listBooking[i].hours.length === dateField.hours.length) {
                await ListModel.findOneAndDelete({ date: listBooking[i].date });
            } else {
                const listHourNew = dateField.hours.filter((item) => {
                    return !listBooking[i].hours.includes(item);
                });
                await ListModel.findOneAndUpdate(
                    { date: listBooking[i].date },
                    {
                        hours: listHourNew,
                    },
                );
            }
        }
        res.status(200).json('Clear listBooking người dùng thành công');
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Lỗi khi cập nhật server' });
    }
};
export const unlock = async (req, res) => {
    try {
        const userAdmin = await AccountsModel.findOne({
            role: 'admin',
        });
        if (!userAdmin) return res.status(403).json({ statusCode: 403, message: 'Không tím thấy user' });
        //  {
        // date: 24/04/2024 , hours[1,2,3]
        // }
        const oldList = userAdmin.listDateBooked.filter((item) => {
            return item.date !== req.body.date;
        });
        console.log('bbbb', userAdmin.listDateBooked, req.body.date);
        const dateDelete = userAdmin.listDateBooked.find((item) => {
            return item.date === req.body.date;
        });
        await AccountsModel.findOneAndUpdate(
            { role: 'admin' },
            {
                listDateBooked: [...oldList],
            },
        );
        const dateField = await ListModel.findOne({
            date: dateDelete.date,
        });
        console.log('data field', dateField);
        if (dateDelete.hours.length === dateField.hours.length) {
            console.log(1);

            await ListModel.findOneAndDelete({ date: dateDelete.date });
            console.log(2);
        } else {
            console.log(3);

            const listHourNew = dateField.hours.filter((item) => {
                return !dateDelete.hours.includes(item);
            });
            await ListModel.findOneAndUpdate(
                { date: dateDelete.date },
                {
                    hours: listHourNew,
                },
            );
        }
        res.status(200).json('Unlock book dùng thành công');
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: 'Lỗi khi cập nhật server' });
    }
};
