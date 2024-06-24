import React, { useContext, useEffect } from "react";
import Categary from "../components/Categary";
import Card from "../components/Card";
import { Store } from "../App";
import { FetchAllAds } from "../hooks/FetchAllAds";
import notFound from "../media/404.svg";

const Home = () => {
  const { listOfAds, setListOfAds, allAds, setAllAds, city, category } =
    useContext(Store);
  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="w-full mt-2 min-h-full flex flex-col ">
        <div className="mb-2">
          <Categary />
        </div>
        <div
          style={{ display: listOfAds.length > 0 && "grid" }}
          className="mb-2 w-full  xl:grid-cols-7 gap-2 lg:grid-cols-5 justify-center items-center  md:grid-cols-4 xs:grid-cols-1 grid-cols-2  max-w-full p-2 "
        >
          {listOfAds.length === 0 ? (
            <div className="w-full h-[60vh] mt-5 flex justify-center items-center">
              <img src={notFound} className="w-full h-full " alt="" />
            </div>
          ) : (
            listOfAds.map((item) => {
              const {
                adheading,
                adbody,
                adphone,
                adlikes,
                adview,
                adcity,
                adid,
                adimg,
                adcategory,
              } = item;
              return (
                <>
                  <Card
                    heading={adheading}
                    body={adbody}
                    phone={adphone}
                    likes={adlikes}
                    view={adview}
                    City={adcity}
                    id={adid}
                    categary={adcategory}
                    image={adimg}
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

export default Home;
