import { AccountsModel } from '../Models/AccountsModel.js';
import { ListModel } from '../Models/ListModel.js';

export const addBooking = async (req, res) => {
    try {
        const bookingExist = await ListModel.findOne({ reserved: req.body[0] });
        if (bookingExist) return res.status(400).json({ statusCode: 401, message: 'Ngày này không tồn tại' });

        const user = await AccountsModel.findOne({ _id: req.user._id });
        const userAfterUpdate = await AccountsModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                listDateBooked: [...user.listDateBooked, req.body[0]],
            },
            {
                new: true,
            },
        );
        const newList = await ListModel({ reserved: req.body[0] });
        await newList.save();

        return res.status(200).json(userAfterUpdate);
    } catch (error) {
        return res.status(400).json({ statusCode: 401, message: 'Thêm ngày booking thất bại' });
    }
};
