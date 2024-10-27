import express from "express";
import { logout, signin, signup, verifyEmail } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", signin);

router.post("/verify-email", verifyEmail)

router.post("/logout", logout);

export default router;
