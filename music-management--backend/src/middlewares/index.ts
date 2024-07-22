import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";

export const middlewares = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(helmet());
  app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
  app.use(morgan("dev"));
  app.use(compression());
};
