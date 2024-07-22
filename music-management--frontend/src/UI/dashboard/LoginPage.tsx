import { userSchema } from "@/schema/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import InputBox from "../common/atoms/InputBox";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <div className="w-96 p-6 border border-gray-100 shadow-sm bg-white rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputBox
                label="Email"
                placeholder="Enter your email"
                {...field}
                error={errors.email}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputBox
                label="Password"
                placeholder="Enter your password"
                {...field}
                error={errors.password}
              />
            )}
          />
          <Button className="my-2 w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
