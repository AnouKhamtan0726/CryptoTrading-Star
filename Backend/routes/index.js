import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  LoginStatus,
  VerifyEmail,
  SaveProfile,
  GetWallets,
  // UpdatePhoneNumber,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.post("/login-status", LoginStatus);
router.get("/token", refreshToken);
router.post("/logout", Logout);
router.post("/verify-email", verifyToken, VerifyEmail);
router.post("/save-profile", verifyToken, SaveProfile);
router.post("/get-wallets", verifyToken, GetWallets);
// router.post("/phone-number", verifyToken, UpdatePhoneNumber);

export default router;
