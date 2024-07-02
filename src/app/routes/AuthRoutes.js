import express from 'express';
import { login, logout, registerUser } from '../Controller/AuthController.js';
import { verifyLogin } from '../Controller/MiddlewareController.js';

const router = express.Router();
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', registerUser); // da xai

export default router;
