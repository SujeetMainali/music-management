import { Router } from "express";
import { RegisterUserDTO, UserLoginDTO } from "../../DTOs/auth/auth.dto";
import { catchAsync } from "../../utils/catchAsync";
import RequestValidator from "../../middlewares/requestValidator.middleware";
import authController from "../../controller/auth/auth.controller";
const router = Router();

router
  .route("/create-user")
  .post(
    RequestValidator(RegisterUserDTO),
    catchAsync(authController.registerUser.bind(authController))
  );

router.post(
  "/user-login",
  RequestValidator(UserLoginDTO),
  catchAsync(authController.userLogin.bind(authController))
);

export default router;
