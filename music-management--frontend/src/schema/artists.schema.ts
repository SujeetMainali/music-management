import * as yup from "yup";

export const artistsSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  dob: yup.string().required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  address: yup.string().required("Address is required"),
  first_release_year: yup.string().required("First release year is required"),
  no_of_albums_released: yup
    .string()
    .required("Number of albums released is required"),
});
