import { TbDotsVertical, TbLogout2 } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaUsers, FaUserTie } from "react-icons/fa";
import { useState } from "react";
import { useDisclosure } from "@/hooks/useDisclosure";
import { CustomAlertDialog } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  const [clickedItem, setClickedItem] = useState<number | null>(
    sessionStorage.getItem("clickedItem")
      ? Number(sessionStorage.getItem("clickedItem"))
      : 0
  );
  return (
    <div className=" p-4 m-3 h-[90vh] flex flex-col gap-8">
      <div
        className=" flex justify-between items-center rounded-md hover:bg-gray-200 p-4  "
        onClick={() => navigate("/")}
      >
        <span>
          <IoPersonCircle size={"2rem"} className=" text-secondary " />
        </span>
        <span className="text-lg">Music</span>
        <span>
          <TbDotsVertical size={"1.25rem"} className=" text-secondary" />
        </span>
      </div>
      <div className=" flex flex-col gap-5">
        {sideBarItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === clickedItem
                ? "text-accent rounded-full bg-[#DACFED] text-black "
                : "text-muted"
            } group flex gap-6 h-12 p-5 items-center  `}
            // group flex gap-6 h-12 p-5 items-center bg-[#DACFED]  hover:text-accent
            onClick={() => {
              setClickedItem(index);
              sessionStorage.setItem("clickedItem", index.toString());
              navigate(item.path);
            }}
          >
            <span> {item.icon}</span>
            <span className="text-lg text-muted group-hover:text-black">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <CustomAlertDialog
        trigger={
          <div className=" flex gap-6 h-12 p-5 items-center  cursor-pointer hover:text-accent hover:rounded-full hover:bg-[#DACFED] text-black  ">
            <span>
              <TbLogout2 size={"1.75rem"} className=" text-secondary" />
            </span>
            <span className="text-lg">Logout</span>
          </div>
        }
        title="Logout"
        description="Are you sure you want to logout?"
        cancelText="Cancel"
        actionText="Logout"
        onAction={() => console.log("Logout")}
        onCancel={onClose}
      />
    </div>
  );
};

export default SideBar;

const sideBarItems = [
  {
    name: "Dashboard",
    icon: (
      <BiSolidDoughnutChart
        size={"1.75em"}
        className=" text-secondary group-hover:text-accent "
      />
    ),
    path: "/dashboard",
  },
  {
    name: "Users",
    icon: (
      <FaUsers
        size={"1.75em"}
        className=" text-secondary group-hover:text-accent"
      />
    ),
    path: "/dashboard/users",
  },

  {
    name: "Artists",
    icon: (
      <FaUserTie
        size={"1.75em"}
        className=" text-secondary group-hover:text-accent"
      />
    ),
    path: "/dashboard/artists",
  },
  // {
  //   name: "Logout",
  //   icon: (
  //     <TbLogout2
  //       size={"1.75em"}
  //       className=" text-secondary group-hover:text-accent"
  //     />
  //   ),
  //   path: "/logout",
  // },
];
