import express from 'express';
import { verifyLogin } from '../Controller/MiddlewareController.js';
import { addBooking } from '../Controller/BookingController.js';

const router = express.Router();
router.post('/add', verifyLogin, addBooking);

export default router;
