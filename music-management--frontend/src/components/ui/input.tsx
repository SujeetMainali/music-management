import * as React from "react";
import { cn } from "@/lib/utils";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number" | "search" | "tel";
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error: string | undefined;
  isRequired: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      register,
      error,
      placeholder,
      isRequired = true,
      type,
      ...props
    },
    ref
  ) => {
    console.log("error", error);
    return (
      <>
        <div>
          <label
            htmlFor={label}
            className={error ? "text-red-500" : "text-black"}
          >
            {label}
          </label>
          {isRequired && <span className="text-red-500"> *</span>}
        </div>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            error ? "border-red-500" : "border-input"
          )}
          {...props}
          {...register}
          placeholder={placeholder}
          ref={ref}
        />
        {error && <small className=" text-red-600">{error}</small>}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
