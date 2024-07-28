import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";
interface IProps {
  title: string;
  buttonIcon: React.ReactElement;
  buttonLabel: string;
  setOpen: (value: boolean) => void;
}
const Header = ({ title, buttonIcon, buttonLabel, setOpen }: IProps) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
      <span className="text-lg font-semibold pl-4">{title}</span>

      {buttonLabel && setOpen && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                size="sm"
                variant="default"
              >
                {buttonLabel}
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={5} align="center">
              {buttonLabel}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default Header;
