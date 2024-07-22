import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

interface CustomInputProps {
  label: string;
  error?: {
    message?: string;
  };
  [x: string]: any; // Allow any other props
  placeholder?: string;
}

const InputBox = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder, error, ...props }, ref) => {
    return (
      <div className="custom-input">
        <Label className="block text-left text-sm font-medium text-gray-700 mb-2">
          {label}
        </Label>
        <Input
          ref={ref}
          {...props}
          className={`input-field ${error ? "error" : ""}`}
          placeholder={placeholder}
        />
        {error && <small className=" text-red-600">{error.message}</small>}
      </div>
    );
  }
);

export default InputBox;
