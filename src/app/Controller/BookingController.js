import { AccountsModel } from '../Models/AccountsModel.js';
import { ListModel } from '../Models/ListModel.js';

export const addBooking = async (req, res) => {
    try {
        const bookingExist = await ListModel.findOne({ date: req.body.date, hours: { $in: req.body.hours } });
        if (bookingExist) return res.status(400).json({ statusCode: 401, message: 'Ngày này không tồn tại' });
        const user = await AccountsModel.findOne({ _id: req.user._id });
        let oldList = user.listDateBooked.filter((item) => {
            return item.date !== req.body.date;
        });
        let hasBookDateIn = user.listDateBooked.find((item) => {
            return item.date === req.body.date;
        });
        if (hasBookDateIn) {
            hasBookDateIn.hours = [...hasBookDateIn.hours, ...req.body.hours];
        } else {
            hasBookDateIn = req.body;
        }
        const userAfterUpdate = await AccountsModel.findOneAndUpdate(
            { _id: req.user._id },
            {
                listDateBooked: [...oldList, hasBookDateIn],
            },
            {
                new: true,
            },
        );
        // add all lists
        const DateExist = await ListModel.findOne({ date: req.body.date });
        if (DateExist) {
            await ListModel.findOneAndUpdate(
                { date: req.body.date },
                {
                    hours: [...DateExist.hours, ...req.body.hours],
                },
            );
        } else {
            const newList = await ListModel(req.body);
            await newList.save();
        }

        return res.status(200).json(userAfterUpdate);
    } catch (error) {
        return res.status(400).json({ statusCode: 401, message: 'Thêm ngày booking thất bại' });
    }
};
