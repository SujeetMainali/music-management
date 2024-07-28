import { userSchema } from "@/schema/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ILoginRequest, ILoginResponse } from "@/interface/auth/auth.interface";
import useAPI from "@/hooks/useApi";
import useAuth from "@/hooks/useAuth";
import { endpointRoutes } from "@/constants/endpoints/endpointRoutes";
import { toast } from "sonner";
const LoginPage = () => {
  const navigate = useNavigate();
  const { post } = useAPI();
  const { setUser, user } = useAuth();
  console.log("user", user);

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

  const loginFn = async (data: ILoginRequest) => {
    const response = (await post(
      endpointRoutes.login,
      data
    )) as unknown as ILoginResponse;
    console.log("response", response);
    if (response?.status) {
      setUser(response.data);
    }
    if (!response?.status)
      throw new Error(response?.message || "An error occurred");
  };
  const { mutateAsync } = useMutation({
    mutationFn: loginFn,
    onSuccess: () => {
      toast.success("Success", {
        description: "User Logged in successfully",
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Error", {
        description: error.message,
      });
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    mutateAsync(data);
    // toast.success("Success", {
    //   description: "User Logged in successfully",
    // });
    // navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <div className="w-96 p-6 border border-gray-100 shadow-sm bg-white rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
        {/* dont have an account register */}
        <div className="flex justify-center items-center mt-4">
          <span>Don't have an account?</span>
          <Button
            variant="link"
            className="text-accent "
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
