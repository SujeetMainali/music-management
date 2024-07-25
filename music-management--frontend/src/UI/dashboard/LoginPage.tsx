import { userSchema } from "@/schema/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(userSchema),
  });
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <div className="w-96 p-6 border border-gray-100 shadow-sm bg-white rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* <Controller
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
          /> */}

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            register={register("email")}
            error={errors.email?.message}
            isRequired
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            register={register("password")}
            error={errors.password?.message}
            isRequired
          />
          <Button className="my-2 w-full bg-primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
