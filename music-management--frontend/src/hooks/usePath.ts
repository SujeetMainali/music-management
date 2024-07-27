import { stringTitleCase } from "@/utils/titleCase";
import { useLocation, useNavigate } from "react-router-dom";

export const usePath = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean); // Filter out empty strings

  const breadcrumbItemList = paths.map((item, index) => {
    // Create the path up to the current item
    const path = `/${paths.slice(0, index + 1).join("/")}`;

    return {
      name: stringTitleCase(item),
      href: path,
    };
  });

  return breadcrumbItemList;
};
