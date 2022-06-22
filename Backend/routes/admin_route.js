import express from "express";
import {
  Register,
  Login,
  Logout,
  LoginStatus,
  VerifyEmail,
  GetRoundInfos,
  GetAdminSettings,
  SaveAdminSettings,
  GetCurrentRound,
  GetUserStats,
  // UpdatePhoneNumber,
} from "../controllers/AdminUsers.js";
import { adminVerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/login-status", LoginStatus);
router.post("/logout", Logout);
router.post("/verify-email", adminVerifyToken, VerifyEmail);
router.post("/get-rounds-info", adminVerifyToken, GetRoundInfos);
router.post("/get-admin-settings", adminVerifyToken, GetAdminSettings);
router.post("/save-admin-settings", adminVerifyToken, SaveAdminSettings);
router.post("/get-current-round", adminVerifyToken, GetCurrentRound);
router.post("/get-user-stats", adminVerifyToken, GetUserStats);
// router.post("/phone-number", verifyToken, UpdatePhoneNumber);

export default router;
