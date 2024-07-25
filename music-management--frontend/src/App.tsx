import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./UI/dashboard/LoginPage";
import DashboardLayout from "./UI/dashboard/organisms/DashboardLayout";
import { dashboardRoutes } from "./routes/dashboard.routes";

function App() {
  return (
    // <div className=" w-full ">
    //   <LoginPage />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginPage />}></Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          {dashboardRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
