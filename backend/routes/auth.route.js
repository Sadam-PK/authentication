import express from "express";
import { logout, login, signup, verifyEmail, forgotPassword, resetPassword } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/verify-email", verifyEmail)

router.post("/logout", logout);

router.post("/forgot-password", forgotPassword)

router.post("/reset-password/:token", resetPassword)

export default router;
