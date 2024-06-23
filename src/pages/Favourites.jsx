import React, { useContext, useEffect } from "react";
import Card from "../components/Favourite_Card";
import "../index.css";
import { Store } from "../App";
import axios from "axios";
import notFound from "../media/notfound.svg";

const Favourites = () => {
  const { favourite, setFavourite } = useContext(Store);
  let userid = localStorage.getItem("userid");
  const fetchFavouriteAds = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/favouriteAds/userId=${userid}`)
      .then((value) => {
        console.log(value.data);
        setFavourite(value.data.favourite);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchFavouriteAds();
  }, []);

  return (
    <>
      <div className="w-full mt-2 min-h-full flex  justify-center items-center flex-col ">
        <h1 className="font text-2xl text-[#009F6B] font-bold">
          YOUR LIKED ADS
        </h1>
        <div
          style={{ display: favourite.length === 0 ? "block" : "grid" }}
          className="mb-2  xl:grid-cols-8 gap-2 lg:grid-cols-3  md:grid-cols-3 xs:grid-cols-1 grid-cols-2  max-w-full p-2 "
        >
          {favourite.length === 0 ? (
            <div className="w-full mt-16 max-h-[50vh] flex justify-center items-center">
              <img src={notFound} className="w-full h-full" alt="" />
            </div>
          ) : (
            favourite.map((item) => {
              const {
                adheading,
                adbody,
                adphone,
                adlikes,
                adview,
                adcity,
                adid,
              } = item;
              return (
                <>
                  <Card
                    fetchFavouriteAds={fetchFavouriteAds}
                    heading={adheading}
                    body={adbody}
                    phone={adphone}
                    likes={adlikes}
                    view={adview}
                    citie={adcity}
                    id={adid}
                    key={adid}
                  />
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Favourites;
