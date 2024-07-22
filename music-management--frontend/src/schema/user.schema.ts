import * as yup from "yup";

export const userSchema = yup.object().shape({
  email: yup.string().required("First name is required"),
  password: yup.string().required("Password is required"),
});
