import express from 'express';
import {
    getAllUsers,
    login,
    logout,
    registerUser,
    refreshToken,
    updateCart,
    forgot,
    forgotCode,
    notifyEmaileToUser,
} from '../Controller/AuthController.js';
import { verifyLogin } from '../Controller/MiddlewareController.js';

const router = express.Router();
router.post('/login', login);
router.post('/logout', verifyLogin, logout);
router.post('/register', registerUser);
router.post('/refresh', refreshToken);
router.post('/forgot', forgot);
router.post('/forgotCode', forgotCode);
router.post('/notify', notifyEmaileToUser);
router.post('/update/:slug', verifyLogin, updateCart);
router.get('/', verifyLogin, getAllUsers);

export default router;
