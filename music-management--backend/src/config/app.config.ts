import express from "express";
import { middlewares } from "../middlewares/index";
import applicationRoutes from "../routes/index.routes";
import ErrorHandler from "../middlewares/error.middleware";

const app = express();
middlewares(app);
applicationRoutes(app);
app.use(ErrorHandler);

app.get("/", (req, res) => {
  res.json({ message: "Welcone to backbone of music management system" });
});
export default app;
