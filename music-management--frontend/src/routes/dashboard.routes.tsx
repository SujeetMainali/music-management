import Dashboard from "@/UI/dashboard/pages/Dashboard";
interface IRoutes {
  path: string;
  element: JSX.Element;
}
export const dashboardRoutes: IRoutes[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
