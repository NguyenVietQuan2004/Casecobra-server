import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
    {
        reserved: {
            require: true,
            type: String,
        },
    },
    { timestamps: true },
);
export const ListModel = mongoose.model('alllists', Schema);
