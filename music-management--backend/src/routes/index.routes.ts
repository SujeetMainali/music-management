import { Application, Router } from "express";
import authRoutes from "./auth/auth.routes";

interface AppRouter {
  path: string;
  route: Router;
}

const routes: AppRouter[] = [
  {
    path: "auth",
    route: authRoutes,
  },
];

const applicationRoutes = (app: Application) => {
  routes.forEach((route) => {
    app.use(`/api/v1/${route.path}`, route.route);
  });
};

export default applicationRoutes;
