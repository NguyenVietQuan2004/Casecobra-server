import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            require: true,
            default: 'user',
        },
        listDateBooked: {
            type: Array,
            require: true,
        },
        numberPhone: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        confirm: {
            type: String,
            require: true,
            default: 'no',
        },
    },
    { timestamps: true },
);
export const AccountsModel = mongoose.model('accounts', Schema);
