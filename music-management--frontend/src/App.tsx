import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./UI/common/LoginPage";
import DashboardLayout from "./UI/dashboard/organisms/DashboardLayout";
import { dashboardRoutes } from "./routes/dashboard.routes";
import Register from "./UI/common/Register";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    // <div className=" w-full ">
    //   <LoginPage />
    // </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="/dashboard" element={<DashboardLayout />}>
            {dashboardRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
