import React, { useState } from "react";
import "../index.css";
import { CiMenuFries } from "react-icons/ci";
import { RiAdvertisementFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavBar] = useState(false);
  return (
    <>
      <div className="max-w-full h-[80px] flex justify-between font items-center bg-[#009F6B]">
        <div className="flex  gap-2 m-3">
          <div className="text-white text-3xl">
            <RiAdvertisementFill className="rounded-lg" />
          </div>
          <h1 className="text-2xl text-white font-bold">ADIFY</h1>
        </div>
        <div className="m-3">
          <ul className="md:flex hidden    gap-5 m-3 text-xl text-white">
            <NavLink to={"/"}>
              <li className="cursor-pointer">HOME</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="cursor-pointer">ABOUT</li>
            </NavLink>
            <NavLink to={"/pricePlan"}>
              <li className="cursor-pointer">ADDNEWPOST</li>
            </NavLink>
            <NavLink to={"/account"}>
              <li className="cursor-pointer">ACCOUT</li>
            </NavLink>
            <NavLink to={"/favorite"}>
              <li className="cursor-pointer">FAVOURITE</li>
            </NavLink>
          </ul>

          <CiMenuFries
            onClick={() => setNavBar(!navbar)}
            className="text-2xl cursor-pointer text-white md:hidden "
          />
        </div>
      </div>
      <div
        style={{ transform: navbar ? "translateX(0%)" : "translateX(-100%)" }}
        className="absolute md:hidden z-50 rounded-sm duration-500 mt-1 flex font justify-center items-center max-w-[900px] max-h-[400px]  bg-[#009F6B]"
      >
        <ul className="flex  flex-col justify-center items-center  p-5 gap-5  text-xl text-white">
          <NavLink to={"/"}>
            <li className="cursor-pointer">HOME</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="cursor-pointer">ABOUT</li>
          </NavLink>
          <NavLink to={"/pricePlan"}>
            <li className="cursor-pointer">ADDNEWPOST</li>
          </NavLink>
          <NavLink to={"/account"}>
            <li className="cursor-pointer">ACCOUT</li>
          </NavLink>
          <NavLink to={"/favorite"}>
            <li className="cursor-pointer">FAVOURITE</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
