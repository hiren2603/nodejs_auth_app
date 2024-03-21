import * as yup from "yup";

export const RagistrationSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required!"),
  lastname: yup.string().required("Last Name is required!"),
  username: yup.string().required("Username is required!"),
  email: yup.string().required("Email is required!").email(),
  password: yup.string().required("Password is required!").min(4),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required!")
    .min(4),
  code: yup.string().required("Required"),
  phone: yup.string().required("Phone number is required!").length(10),
});

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username is too Short!")
    .max(50, "Username must be less than 20 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(4, "Password is too Short")
    .required("Password should not be empty!"),
});
