import * as Yup from "yup";

export const signInValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Email"),
  password: Yup.string()
    .min(8, "Please Enter Atleast 8 Charactar")
    .max(15, "only 15 charactar you can eneter")
    .required("Please eneter password"),
});
