import express from "express";
import { login, register, logout, token } from "../controllers/auth.js";
import { VerifyToken } from '../middlewares/VerifyToken.js';

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/token', VerifyToken, token)

export default router