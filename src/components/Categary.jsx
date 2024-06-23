import React, { useContext, useEffect } from "react";
import "../index.css";
import { FaStoreAlt } from "react-icons/fa";
import { FaCarTunnel } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import { FaChair } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdOtherHouses } from "react-icons/md";
import { Store } from "../App";
import { FetchAllAds } from "../hooks/FetchAllAds";

const Categary = () => {
  const { setListOfAds, city, setCity, category, setCategory } =
    useContext(Store);

  const onChangeHandlarForCityAndCategory = () => {
    const data = FetchAllAds(city, category);
    data.then((value) => {
      setListOfAds(value);
    });
  };
  useEffect(() => {
    onChangeHandlarForCityAndCategory();
  }, [category, city]);
  return (
    <>
      <div className="w-full md:gap-6  bg-white flex md:flex-row flex-col  md:justify-center items-center shadow-lg min-h-[80px]">
        <div className="max-w-[100%] ">
          <select
            onChange={(e) => {
              setCity(e.target.value);
            }}
            className="px-4 mb-3 uppercase py-2 w-full font bg-white border border-[#009F6B] rounded-md text-[#009F6B]  focus:outline-[#009F6B] focus:border-[#009F6B]"
          >
            <option
              value="ahmedabad"
              className="font uppercase  hover:bg-white"
            >
              ahmedabad
            </option>
            <option value="porbandar" className="font uppercase hover:bg-white">
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
            <option value="jamnagar" className="font uppercase hover:bg-white">
              Jamnagar
            </option>
            <option value="junagadh" className="font uppercase hover:bg-white">
              junagadh
            </option>
          </select>
        </div>
        {/* category */}
        <div className="flex overflow-scroll scroll max-w-full p-1   md:ml-2 items-center scroll  gap-3">
          <div
            onClick={() => {
              setCategory("properties");
            }}
            className="flex flex-col p-1  cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <FaStoreAlt color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "properties" && "2px solid #009F6B",
              }}
              className="text-sm duration-200 font text-gray-700"
            >
              Properties
            </span>
          </div>
          <div
            onClick={() => {
              setCategory("vehicle");
            }}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <FaCarTunnel color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "vehicle" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Vehicle
            </span>
          </div>
          <div
            onClick={() => {
              setCategory("jobs");
            }}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <MdManageAccounts color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "jobs" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Jobs
            </span>
          </div>
          <div
            onClick={() => {
              setCategory("agriculture");
            }}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <MdAgriculture color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "agriculture" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Agriculture
            </span>
          </div>
          <div
            onClick={() => setCategory("pets")}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <MdOutlinePets color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "pets" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Pets
            </span>
          </div>
          <div
            onClick={() => setCategory("electronic")}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <FaComputer color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "electronic" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Electronic
            </span>
          </div>

          <div
            onClick={() => {
              setCategory("furniture");
            }}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <FaChair color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "furniture" && "2px solid #009F6B",
              }}
              className="text-sm font text-gray-700"
            >
              Furniture
            </span>
          </div>
          <div
            onClick={() => setCategory("services")}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <MdHomeRepairService color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "services" && "2px solid #009F6B",
              }}
              className="text-sm  font text-gray-700"
            >
              Services
            </span>
          </div>
          <div
            onClick={() => setCategory("education")}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <FaBookReader color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "education" && "2px solid #009F6B",
              }}
              className="text-sm  font text-gray-700"
            >
              Education
            </span>
          </div>
          <div
            onClick={() => setCategory("other")}
            className="flex flex-col cursor-pointer  items-center"
          >
            <div className="bg-[#009F6B] rounded-full p-4 ">
              <MdOtherHouses color="white" className="md:text-xl" />
            </div>
            <span
              style={{
                borderBottom: category === "other" && "2px solid #009F6B",
              }}
              className="text-sm  font text-gray-700"
            >
              Other
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categary;
