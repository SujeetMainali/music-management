import { JwtUtils } from "../../utils/jwt.utils";
import { StatusCodes } from "../../constants/statusCodes";
import { RegisterUserDTO, UserLoginDTO } from "../../DTOs/auth/auth.dto";
import authService from "../../services/auth/auth.service";
import { Request, Response } from "express";
class AuthController {
  constructor() {}
  async registerUser(req: Request, res: Response) {
    const data = req.body as RegisterUserDTO;
    await authService.registerUser(data);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "User registered successfully",
    });
  }

  async userLogin(req: Request, res: Response) {
    const data = req.body as UserLoginDTO;
    const user = await authService.userLogin(data);
    const token = JwtUtils.sign({ id: user.id });
    return res.status(StatusCodes.OK).json({
      success: true,
      data: token,
      message: "User logged in successfully",
    });
  }
}

export default new AuthController();
