import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
    {
        date: String,
        hours: Array,
    },
    { timestamps: true },
);
export const ListModel = mongoose.model('alllists', Schema);
