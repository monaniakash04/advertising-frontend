import React, { useContext } from "react";
import "../index.css";
import { useFormik } from "formik";
import { signInValidation } from "../validation/SignIn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";

const AdminSignIn = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const nav = useNavigate();
  const { setIsAdminLogin } = useContext(Store);

  const { handleChange, errors, values, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: signInValidation,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/adminLogin`, //change url
        {
          email: values.email,
          password: values.password,
        }
      );

      if (res.data === null) {
        toast.error("Your user Or Password wrong");
      } else {
        const { adminid } = res.data;
        localStorage.setItem("adlogin", true);
        localStorage.setItem("adminid", `${adminid}`);
        setIsAdminLogin(true);
        nav(`/adminDashBoard`, { replace: true });
      }
    },
  });

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#009F6B] font mb-4">
            Admin Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-4 outline-none font rounded border"
            />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mb-4 outline-none font rounded border"
            />
            <button
              type="submit"
              onClick={() => {
                if (errors.email || errors.password) {
                  toast.error(errors.email || errors.password);
                }
              }}
              className="w-full font bg-[#009F6B] text-white py-2 rounded"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
