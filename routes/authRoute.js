import express from 'express';
import { loginUser, singUPUser } from '../controller/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/singup', singUPUser);


export default router