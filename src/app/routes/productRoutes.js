import express from 'express';
import { searchProducts, create, getAllProducts, searchProductsQuery } from '../Controller/productController.js';
const router = express.Router();
// router.get('/getAllProducts', getAllProducts);
router.get('/product', create);
router.get('/query', searchProductsQuery);
router.get('/', searchProducts);

export default router;
