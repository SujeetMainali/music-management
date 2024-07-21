import dotenv from "dotenv";
dotenv.config();

export const dotenvConfig = {
  NODE_ENV: process.env.NODE_ENV,

  PORT: process.env.PORT,

  // database credentials
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_PORT: process.env.DATABASE_PORT,

  // jwt secret key
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};
