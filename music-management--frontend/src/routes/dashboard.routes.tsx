import Artists from "@/UI/dashboard/pages/Artists";
import Dashboard from "@/UI/dashboard/pages/Dashboard";
import Users from "@/UI/dashboard/pages/Users";
interface IRoutes {
  path: string;
  element: JSX.Element;
}
export const dashboardRoutes: IRoutes[] = [
  {
    path: "",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/users",
    element: <Users />,
  },
  {
    path: "/dashboard/artists",
    element: <Artists />,
  },
];
