import { Outlet } from "react-router-dom";
import SideBar from "../molecules/SideBar";

const DashboardLayout = () => {
  return (
    <div className=" flex my-auo  ">
      <div className=" m-4 w-2/12 bg-background rounded-lg">
        <SideBar />
      </div>
      <div className=" m-4 w-10/12 bg-background rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
