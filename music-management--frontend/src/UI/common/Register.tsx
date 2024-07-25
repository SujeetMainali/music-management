import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    // resolver: yupResolver(userSchema),
  });
  console.log(errors);
  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-background ">
      <div className=" w-2/6 p-6 border border-gray-100 shadow-sm bg-white rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className=" flex gap-1 justify-around">
            <Input
              //   label="First Name"
              type="text"
              placeholder="First name"
              register={register("first_name")}
              error={errors.email?.message}
              isRequired={false}
            />

            <Input
              //   label="Last Name"
              type="text"
              placeholder="Last name"
              register={register("last_name")}
              error={errors.password?.message}
              isRequired={false}
            />
          </div>
          <div className=" p-1">
            <Input
              //   label="Email"
              type="email"
              placeholder="Enter your email"
              register={register("email")}
              error={errors.email?.message}
              isRequired={false}
            />
          </div>
          <div className=" p-1">
            <Input
              //   label="Phone"
              type="tel"
              placeholder="Enter your phone"
              register={register("phone")}
              error={errors.phone?.message}
              isRequired={false}
            />
          </div>
          <div className=" flex gap-1 justify-around">
            <Input
              //   label="Date of Birth"
              type="date"
              placeholder="Enter your date of birth"
              register={register("dob")}
              error={errors.dob?.message}
              isRequired={false}
            />

            <Input
              type="text"
              placeholder="Enter your gender"
              register={register("gender")}
              error={errors?.gender?.message}
              isRequired={false}
            />
          </div>
          <div className=" p-1">
            <Input
              //
              type="text"
              placeholder="Enter your address"
              register={register("address")}
              error={errors.address?.message}
              isRequired={false}
            />
          </div>
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
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
