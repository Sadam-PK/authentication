import express from "express";
import { logout, signin, signup } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);

router.post("/login", signin);

router.post("/logout", logout);

export default router;
