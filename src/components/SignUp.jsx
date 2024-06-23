import React, { useContext } from "react";
import "../index.css";
import { useFormik } from "formik";
import { signUpValidation } from "../validation/SignUp";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Store } from "../App";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setToggleSignIn }) => {
  const initialValue = {
    fullname: "",
    email: "",
    password: "",
  };

  const { setIsLogin } = useContext(Store);
  const nav = useNavigate();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: signUpValidation,
    onSubmit: async (value) => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signUp`,
        {
          fullname: value.fullname,
          email: value.email,
          password: value.password,
        }
      );
      const { userid } = res.data;
      localStorage.setItem("login", true);
      localStorage.setItem("userid", `${userid}`);
      setIsLogin(true);
      nav("/account");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Toaster />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-[#009F6B] mb-4 font">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full font outline-none p-2 mb-4 rounded border"
          />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full font outline-none p-2 mb-4 rounded border"
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Set Password"
            className="w-full font outline-none p-2 mb-4 rounded border"
          />
          <button
            type="submit"
            onClick={() => {
              if (errors.email || errors.password || errors.fullname) {
                toast.error(errors.email || errors.password || errors.fullname);
              }
            }}
            className="w-full  font bg-[#009F6B] text-white py-2 rounded"
          >
            Sign Up
          </button>
          <h1 className="font md:text-xl text-center mt-2  text-md">
            Already Have Account?
            <span
              onClick={() => setToggleSignIn(true)}
              className="text-[#009F6B] ml-1 hover:border-b-2 duration-100 border-[#009F6B]"
            >
              Sign In
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
