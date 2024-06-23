import React, { useContext } from "react";
import axios from "axios";
import { Store } from "../App";
import { FetchAllAds } from "../hooks/FetchAllAds";
import { FetchPendingReqest } from "../hooks/FetchPendingReqest";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RequestCard = ({ id, heading, category, payment, phone }) => {
  const { setAdsForVerify, setListOfAds } = useContext(Store);
  const nav = useNavigate();

  const handleAccept = async () => {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/acceptAd/postId=${id}`
    );

    const pendingAds = FetchPendingReqest();
    pendingAds.then((value) => {
      setAdsForVerify(value.data);
    });

    const data = FetchAllAds("ahmedabad", "properties");
    data.then((value) => {
      setListOfAds(value);
    });
  };

  const handleReject = async () => {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/rejectAd/postId=${id}`
    );

    const pendingAds = FetchPendingReqest();
    pendingAds.then((value) => {
      setAdsForVerify(value.data);
    });
  };

  return (
    <div className="request md:max-w-full mb-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <Toaster />
      <div className="flex md:flex-row flex-col justify-between items-center px-6 py-4 border-b border-gray-200">
        <h3 className="md:text-lg text-md font-semibold text-[#009F6B]">
          {heading}
        </h3>
        <div className="flex mt-1 flex-row md:mr-6 justify-center item-center w-[100px] sm:max-w-full">
          <button
            onClick={() => {
              handleAccept();
              toast.success(`${heading} this ad is accepted`);
            }}
            className="md:px-3 px-1 py-1 max-w-[200px] md:text-lg text-sm  bg-[#009F6B] text-white rounded hover:bg-[#009F6B] transition duration-300"
          >
            Accept
          </button>
          <button
            onClick={() => {
              handleReject();
              toast.error(`${heading} this ad is Rejected`);
            }}
            className="md:px-3 px-1 py-1 bg-red-600 md:text-lg text-sm text-white rounded hover:bg-red-700 transition duration-300 ml-2"
          >
            Reject
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <div
          onClick={() => {
            nav(`/Adinfo/${id}`);
          }}
          className="mb-4 cursor-pointer"
        >
          <h4 className="md:text-lg text-sm font-semibold text-gray-600">
            Advertisement Details:
          </h4>
          <p className="text-sm text-gray-600">Category: {category}</p>
          <p className="text-sm text-gray-600">Budget: {payment}</p>
          <p className="text-sm text-gray-600">Phone: +91 {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
