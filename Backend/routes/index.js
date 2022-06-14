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
  Withdraw,
  Exchange,
  Request2FA,
  GetWalletTransactions,
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
router.post("/withdraw", verifyToken, Withdraw);
router.post("/exchange", verifyToken, Exchange);
router.post("/request-2fa", verifyToken, Request2FA);
router.post("/get-wallet-transactions", verifyToken, GetWalletTransactions);
// router.post("/phone-number", verifyToken, UpdatePhoneNumber);

export default router;
