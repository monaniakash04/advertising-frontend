import React, { useContext, useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import "../index.css";
import { NavLink } from "react-router-dom";
import { Store } from "../App";
import { FetchAllAds } from "../hooks/FetchAllAds";
import notFound from "../media/notfound.svg";
import { FetchPendingReqest } from "../hooks/FetchPendingReqest";
import axios from "axios";

const DashBoard = () => {
  const { setListOfAds, adsForVerify, setAdsForVerify } = useContext(Store);
  const [view, setOfView] = useState(0);
  const [revenue, setRevenue] = useState(0);
  let data;

  useEffect(() => {
    setInterval(() => {
      const pendingAds = FetchPendingReqest();
      pendingAds.then((value) => {
        setAdsForVerify(value.data);
      });
    }, 1000);

    data = FetchAllAds("ahmedabad", "properties");
    data.then((value) => {
      setListOfAds(value);
    });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/countViews`)
      .then((value) => {
        setOfView(value.data);
      });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/countRevenue`)
      .then((value) => {
        setRevenue(value.data);
      });
  }, []);
  return (
    <div className="flex font flex-col mt-1 md:flex-row h-screen">
      <div className="sidebar w-full md:w-1/5 bg-[#009F6B] text-white p-4">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <NavLink className="flex items-center justify-between ">
              <span className="hover:border-white border-[#009F6B] border-b-2">
                Dashboard
              </span>
              <span className="bg-[#009F6B] text-sm rounded-full px-2 py-1">
                {adsForVerify.length}
              </span>
            </NavLink>
          </li>
          <li className="mb-4 ">
            <NavLink
              to={"/"}
              className="hover:border-white border-[#009F6B] border-b-2"
            >
              Advertisements
            </NavLink>
          </li>
        </ul>
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg font-semibold mb-4">Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center bg-white p-4 rounded-lg">
              <div>
                <span className="text-black font-bold text-opacity-65">
                  Total Revenue
                </span>
                <span className="block text-lg font-semibold text-[#009F6B]">
                  {revenue}
                </span>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-lg">
              <div>
                <span className="text-black font-bold text-opacity-65">
                  Total Views
                </span>
                <span className="block text-lg font-semibold text-[#009F6B]">
                  {view}
                </span>
              </div>
            </div>

            <div className="flex items-center bg-white p-4 rounded-lg">
              <div>
                <span className="text-black font-bold text-opacity-65">
                  Pending Request
                </span>
                <span className="block text-lg font-semibold text-[#009F6B]">
                  {adsForVerify.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content max-h-screen overflow-scroll  w-full md:w-4/5 p-8">
        <h1 className="md:text-lg text-md font-semibold mb-8">
          Advertisement Requests
        </h1>

        {adsForVerify.length === 0 ? (
          <div className="w-full mt-5 h-[50vh] flex justify-center items-center">
            {" "}
            <img src={notFound} alt="" />
          </div>
        ) : (
          adsForVerify.map((item) => {
            const { adid, adheading, adcategory, adpayment, adphone } = item;
            return (
              <RequestCard
                id={adid}
                heading={adheading}
                category={adcategory}
                payment={adpayment}
                phone={adphone}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default DashBoard;
