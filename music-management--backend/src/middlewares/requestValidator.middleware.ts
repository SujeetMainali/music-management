import { ClassConstructor, plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpExceptionError } from "../utils/httpException.utils";

const getValidationMessage = (errors: ValidationError[], message: string[]) => {
  errors.forEach((err) => {
    if (err.children && err.children?.length > 0) {
      getValidationMessage(err.children, message);
    } else {
      if (err.constraints) {
        Object.values(err.constraints).forEach((value) => {
          message.push(value);
        });
      }
      return;
    }
  });
};

const RequestValidator = <T extends object>(
  classInstance: ClassConstructor<T>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // *Convert body to class instance
    const convertedObject = plainToClass(classInstance, req.body);

    // *Validate the class instance
    let validationMessages: string[] = [];
    const errors = await validate(convertedObject, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    console.log(validationMessages.toString());
    if (errors.length !== 0) {
      getValidationMessage(errors, validationMessages);
      console.log(validationMessages);
      next(HttpExceptionError.badRequest(validationMessages[0]));
    }
    next();
  };
};

export default RequestValidator;
