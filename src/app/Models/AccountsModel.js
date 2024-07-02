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
        },
        listDateBooked: {
            type: Array,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);
export const AccountsModel = mongoose.model('accounts', Schema);
