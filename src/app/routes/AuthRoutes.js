import express from 'express';
import {
    deleteListBooking,
    getAllUsers,
    getUser,
    login,
    logout,
    registerUser,
    unlock,
    updateUser,
} from '../Controller/AuthController.js';
import { verifyLogin } from '../Controller/MiddlewareController.js';

const router = express.Router();
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', registerUser); // da xai
router.get('/getalluser', getAllUsers); // da xai
router.put('/update', updateUser); // da xai
router.delete('/delete', deleteListBooking); // da xai
router.delete('/unlock', verifyLogin, unlock); // da xai
router.post('/getuser', verifyLogin, getUser); // da xai

export default router;
