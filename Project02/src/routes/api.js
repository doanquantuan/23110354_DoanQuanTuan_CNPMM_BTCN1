import express from "express";
import authController from "../controllers/authController.js";
import { registerValidation } from "../validations/authValidation.js";
import validate from "../middlewares/validationMiddleware.js";
import { authLimiter } from "../middlewares/rateLimitMiddleware.js";

const router = express.Router();

const initApiRoute = (app) => {
  // Gắn tiền tố /api/auth cho tất cả các route bên trong
  router.post(
    "/register",
    registerValidation,
    validate,
    authLimiter,
    authController.handleRegister,
  );

  router.post("/verify-otp", authController.verifyOTPController);

  return app.use("/api/auth", router);
};

export default initApiRoute;
