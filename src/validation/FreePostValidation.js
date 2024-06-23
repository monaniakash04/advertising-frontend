import * as Yup from "yup";

export const postValidation = Yup.object({
  heading: Yup.string().required("Please Enter Heading"),
  body: Yup.string().required("Please Enter Body Of Ad").min(10).max(200),
  phone: Yup.string()
    .required("Please Enter Phone no")
    .min(10, "Phone No Must be 10 number")
    .max(10, "Phone No Must be 10 number"),
});
