import * as React from "react";
import "../index.css";
import { FaEye } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FetchAllAds } from "../hooks/FetchAllAds";
import { useContext, useEffect } from "react";
import { Store } from "../App";
import { MdLocationOn } from "react-icons/md";
import { CiHeart } from "react-icons/ci"; //not like
import { FaHeart } from "react-icons/fa"; //like

export default function MediaCard({
  heading,
  body,
  phone,
  likes,
  view,
  City,
  id,
  categary,
  image,
}) {
  const navigate = useNavigate();
  const [save, setSave] = useState(false);
  const { setListOfAds, city, category, favourite, allAds, setAllAds } =
    useContext(Store);

  const incrementView = async () => {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/incrementViews/postId=${id}`
    );
    const data = FetchAllAds();
    data
      .then((value) => {
        setAllAds(value);
      })
      .then(() => {
        setListOfAds(
          allAds.filter((item) => {
            return city === item.adcity && category === item.adcategory;
          })
        );
      });
  };

  useEffect(() => {
    const isFavourite = favourite.some((item) => item.adid === id);
    setSave(isFavourite);
  }, [favourite, id]);

  const incrementOrDecrementAds = async () => {
    const islogin = localStorage.getItem("login");
    const userid = localStorage.getItem("userid");

    if (islogin) {
      if (save) {
        await axios
          .patch(
            `${process.env.REACT_APP_SERVER_URL}/decrementLikes/postId=${id}`
          )
          .then(async () => {
            await axios.patch(
              `${process.env.REACT_APP_SERVER_URL}/removeFromFavourite/userId=${userid}`,
              { adid: id }
            );
            setSave(false);
          });
      } else {
        await axios
          .patch(
            `${process.env.REACT_APP_SERVER_URL}/incrementLikes/postId=${id}`
          )
          .then(async () => {
            await axios.patch(
              `${process.env.REACT_APP_SERVER_URL}/adToFavourite/userId=${userid}`,
              {
                adid: id,
                adimage: image,
                adheading: heading,
                adcategory: categary,
                adbody: body,
                adphone: phone,
                adview: view,
                adcity: City,
                adlikes: likes,
              }
            );
            setSave(true);
          });
      }
      navigate("/favorite");
      const data = FetchAllAds();
      data
        .then((value) => {
          setAllAds(value);
        })
        .then(() => {
          setListOfAds(
            allAds.filter((item) => {
              return city === item.adcity && category === item.adcategory;
            })
          );
        });
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className="max-w-sm rounded-lg font overflow-hidden shadow-xl bg-gradient-to-r from-[#009F6B] via-[#009F6B] to-[#009F6B] hover:shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div
        onClick={() => {
          navigate(`/Adinfo/${id}`);
          incrementView();
        }}
        className="px-3 py-1 cursor-pointer"
      >
        <div className="font-bold text-md mb-2 text-white">{heading}</div>
        <p className="line-clamp-4 text-white text-base mb-4 h-[100px] ">
          {body}
        </p>
      </div>
      <span className="flex justify-center items-center max-w-full m-1 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
        <IoMdCall />
        {phone}
      </span>

      <span className="flex justify-center items-center max-w-full m-1 bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#009F6B] mr-2 mb-2">
        <MdLocationOn />
        {City}
      </span>

      <div className="px-6 pt-2 pb-2 flex justify-between items-center">
        <span className="gap-1 bg-white rounded-full flex justify-between items-center px-3 py-1 text-sm font-semibold text-[#009F6B] mr-2 mb-2">
          <FaEye />
          {view}
        </span>
        <span
          onClick={incrementOrDecrementAds}
          className="flex justify-between items-center gap-1 bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#009F6B] mr-2 mb-2 cursor-pointer"
        >
          {save ? <FaHeart /> : <CiHeart />}
          {likes}
        </span>
      </div>
    </div>
  );
}
