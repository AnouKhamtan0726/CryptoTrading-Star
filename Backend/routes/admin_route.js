import express from "express";
import {
  Register,
  Login,
  Logout,
  LoginStatus,
  VerifyEmail,
  // UpdatePhoneNumber,
} from "../controllers/AdminUsers.js";
import { adminVerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/login-status", LoginStatus);
router.post("/logout", Logout);
router.post("/verify-email", verifyToken, VerifyEmail);
// router.post("/phone-number", verifyToken, UpdatePhoneNumber);

export default router;
