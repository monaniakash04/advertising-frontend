import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import "../index.css";
import { useFormik } from "formik";
import { postValidation } from "../validation/FreePostValidation";
import PricePage from "../components/PricePage";
import axios from "axios";
import { Store } from "../App";
import { FetchPendingReqest } from "../hooks/FetchPendingReqest";
import { useNavigate } from "react-router-dom";

const FreeAd = () => {
  const { setAdsForVerify } = useContext(Store);
  const nav = useNavigate();
  const intialValue = {
    heading: "",
    body: "",
    phone: "",
    city: "ahmedabad",
    category: "properties",
  };

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: intialValue,
    validationSchema: postValidation,
    onSubmit: async (value) => {
      let userid = localStorage.getItem("userid");
      const formData = new FormData();
      formData.append("heading", value.heading);
      formData.append("body", value.body);
      formData.append("contact", value.phone);
      formData.append("city", value.city);
      formData.append("category", value.category);

      console.log(
        value.heading,
        value.body,
        value.phone,
        value.city,
        value.category
      );
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/postFreeAd/userId=${userid}`,
        {
          heading: value.heading,
          body: value.body,
          contact: value.phone,
          city: value.city,
          category: value.category,
        }
      );
      const pendingAds = FetchPendingReqest();
      pendingAds.then((value) => {
        setAdsForVerify(value.data);
        console.log("Ads is loaded");
        console.log(value.data.length);
      });
      values.body = "";
      values.heading = "";
      values.phone = "";
      toast.success("Your Ad Is Going For Verify");
      setTimeout(() => {
        nav("/");
      }, 2000);
    },
  });

  return (
    <>
      <PricePage />
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <Toaster />
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#009F6B] mb-4">Add New Ad</h1>
          <form className="font " onSubmit={handleSubmit}>
            <input
              type="text"
              name="heading"
              value={values.heading}
              onChange={handleChange}
              placeholder="Heading Of Ad...."
              className="w-full outline-none p-2 mb-4 rounded border"
            />

            <textarea
              type="text"
              name="body"
              value={values.body}
              onChange={handleChange}
              placeholder="Body Of Ad...."
              className="w-full outline-none p-2 mb-4 rounded border"
            />
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone No Of Your Business...."
              className="w-full outline-none p-2 mb-4 rounded border"
            />
            <select
              onChange={handleChange}
              name="city"
              className="px-4 mb-3 py-2 w-full font bg-white border border-[#009F6B] rounded-md text-[#009F6B]  focus:outline-[#009F6B] focus:border-[#009F6B]"
            >
              <option
                value="ahmedabad"
                className="font uppercase  hover:bg-white"
              >
                ahmedabad
              </option>
              <option
                value="porbandar"
                className="font uppercase hover:bg-white"
              >
                porbandar
              </option>
              <option value="rajkot" className="font uppercase hover:bg-white">
                rajkot
              </option>
              <option value="surat" className="font uppercase hover:bg-white">
                surat
              </option>
              <option
                value="Gandinagar"
                className="font uppercase hover:bg-white"
              >
                Gandinagar
              </option>
              <option
                value="jamnagar"
                className="font uppercase hover:bg-white"
              >
                Jamnagar
              </option>
              <option
                value="junagadh"
                className="font uppercase hover:bg-white"
              >
                junagadh
              </option>
            </select>

            <select
              onChange={handleChange}
              name="category"
              className="px-4 mb-3 py-2 w-full font bg-white border border-[#009F6B] rounded-md text-[#009F6B]  focus:outline-[#009F6B] focus:border-[#009F6B]"
            >
              <option value="properties" className="font hover:bg-white">
                properties{" "}
              </option>
              <option value="vehicle" className="font hover:bg-white">
                vehicle
              </option>
              <option value="agriculture" className="font hover:bg-white">
                agriculture
              </option>
              <option value="electronic" className="font hover:bg-white">
                electronic
              </option>
              <option value="pets" className="font hover:bg-white">
                pets
              </option>
              <option value="furniture" className="font hover:bg-white">
                furniture
              </option>
              <option value="education" className="font hover:bg-white">
                education
              </option>
              <option value="other" className="font hover:bg-white">
                other
              </option>
            </select>
            <button
              type="submit"
              onClick={() => {
                if (
                  errors.body ||
                  errors.heading ||
                  errors.file ||
                  errors.phone ||
                  errors.city ||
                  errors.category
                ) {
                  toast.error(
                    errors.body ||
                      errors.heading ||
                      errors.file ||
                      errors.phone ||
                      errors.city ||
                      errors.category
                  );
                }
              }}
              className="w-full bg-[#009F6B] text-white py-2 rounded"
            >
              Post Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FreeAd;
