import { StatusCodes } from "../../constants/statusCodes";
import { RegisterUserDTO } from "../../DTOs/auth/auth.dto";
import authService from "../../services/auth/auth.service";
import { Request, Response } from "express";
class AuthController {
  async registerUser(req: Request, res: Response) {
    const data = req.body as RegisterUserDTO;
    try {
      await authService.registerUser(data);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "User registered successfully",
      });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error" });
    }
  }
}

export default new AuthController();
