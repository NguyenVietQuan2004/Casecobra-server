import { ListModel } from '../Models/ListModel.js';

export const getList = async (req, res) => {
    try {
        const list = await ListModel.find();
        res.status(200).json(list);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
