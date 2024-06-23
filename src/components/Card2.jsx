import * as React from "react";
import "../index.css";
import { FaEye } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function MediaCard({
  heading,
  body,
  phone,
  likes,
  view,
  city,
  id,
  state,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/Adinfo/${id}`);
      }}
      className="h-[230px] p-1 cursor-pointer min-w-full md:max-w-[200px] bg-white shadow-xl flex items-center  flex-col gap-2 rounded-lg md:w-[300px]"
    >
      <p className="font font-bold text-sm text-center text-[#009F6B]">
        {heading}
      </p>
      <p className="h-[100px] text-justify overFlow p-2 text-sm font text-wrap font-light w-full">
        {body.slice(0, 100)}...
      </p>
      <div className="w-full text-[#009F6B] justify-center items-center flex gap-1">
        <IoMdCall />
        {phone}
      </div>
      <div className="w-full text-[#009F6B] justify-center items-center flex gap-1">
        <MdLocationOn />
        {city}
      </div>
      <div className="w-full mb-1 flex  gap-1 ">
        <div
          style={{ backgroundColor: state === "accept" ? "#009F6B" : "red" }}
          className="max-w-[100px] ml-2 rounded-lg h-[25px] px-2  text-white font "
        >
          {state}
        </div>
        <button className="w-full text-[#009F6B] justify-center items-center flex gap-1">
          <FaEye />
          {view}
        </button>
      </div>
    </div>
  );
}
