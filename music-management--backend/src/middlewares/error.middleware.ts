import { NextFunction, Request, Response } from "express";
import { dotenvConfig } from "../config/env.config";
import { Environment } from "../constants/enums";

const ErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.debug("Error Handler");
  console.error(error);

  let statusCode = 500;

  let data = {
    success: false,
    message: error?.message ?? "Internal Server Error",
    data: [],
    ...(dotenvConfig.NODE_ENV === Environment.DEVELOPMENT && {
      originalError: error.message,
    }),
  };
  if (error.isCustom) {
    statusCode = error.statusCode;
    data = {
      ...data,
      message: error.message,
    };
  }
  return res.status(statusCode).json(data);
};

export default ErrorHandler;
