import express from 'express';
import { getList } from '../Controller/ListController.js';

const router = express.Router();
router.get('/getall', getList);

export default router;
