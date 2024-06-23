import React, { useState, useContext } from "react";
import "../index.css";
import SignUp from "./SignUp";
import { useFormik } from "formik";
import { signInValidation } from "../validation/SignIn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";

const SignIn = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const nav = useNavigate();
  const { setIsLogin } = useContext(Store);
  const [toggleSignIn, setToggleSignIn] = useState(true);

  const { handleChange, errors, values, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: signInValidation,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signIn`,
        {
          email: values.email,
          password: values.password,
        }
      );

      if (res.data === null) {
        toast.error("Your user Or Password wrong");
      } else {
        const { userid } = res.data;
        localStorage.setItem("login", true);
        localStorage.setItem("userid", `${userid}`);
        setIsLogin(true);
        nav("/account");
      }
    },
  });

  return (
    <>
      <Toaster />
      {toggleSignIn ? (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-[#009F6B] font mb-4">
              Sign In
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
            <h1 className="font md:text-xl text-center mt-2  text-md">
              Don't Have Account?
              <span
                onClick={() => setToggleSignIn(false)}
                className="text-[#009F6B] ml-1 hover:border-b-2 duration-100 border-[#009F6B]"
              >
                Create Account
              </span>
            </h1>
          </div>
        </div>
      ) : (
        <SignUp setToggleSignIn={setToggleSignIn} />
      )}
    </>
  );
};

export default SignIn;
