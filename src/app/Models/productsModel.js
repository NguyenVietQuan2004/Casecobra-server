import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
const Schema = new mongoose.Schema(
    {
        MainPhotoURL: {
            type: String,
            require: true,
        },
        Sub1PhotoURL: {
            type: String,
            require: true,
        },
        Sub2PhotoURL: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        desription: {
            type: String,
            require: true,
        },
        salePercent: {
            type: Number,
            require: true,
        },
        usefor: {
            type: String,
            require: true,
        },
        sold: {
            type: Number,
            require: true,
        },
        store: {
            type: Number,
            require: true,
        },
        branch: {
            type: String,
            require: true,
        },
        isnew: {
            type: Boolean,
            require: true,
        },
        code: {
            type: String,
            require: true,
        },
        prices: {
            type: Array,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        slug: { type: String, slug: 'name' },
    },
    { timestamps: true },
);
export const ProductModel = mongoose.model('products', Schema);
