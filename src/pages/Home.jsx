import React, { useContext, useEffect } from "react";
import Categary from "../components/Categary";
import Card from "../components/Card";
import { Store } from "../App";
import { FetchAllAds } from "../hooks/FetchAllAds";
import notFound from "../media/404.svg";
import "../index.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const { listOfAds, setListOfAds, setAllAds } = useContext(Store);
  useEffect(() => {
    const data = FetchAllAds();
    data
      .then((value) => {
        setListOfAds(value);
        setAllAds(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="w-full mt-2 min-h-full flex flex-col ">
        <div className="mb-2">
          <Categary />
        </div>
        <div
          // style={{ display: listOfAds.length > 0 && "grid" }}
          className="mb-2 w-full grid  xl:grid-cols-7 gap-2 lg:grid-cols-5 justify-center items-center  md:grid-cols-4 xs:grid-cols-1 grid-cols-2  max-w-full p-2 "
        >
          {listOfAds.length === 0
            ? [1, 2, 3, 4, 5, 6].map(() => {
                return (
                  <>
                    <div className="max-w-sm p-2 h-[300px] rounded-lg border-2">
                      <Skeleton />
                      <br />
                      <Skeleton count={4} />
                      <br />
                      <Skeleton count={2} />
                      <br />
                      <div className="w-full flex justify-center items-center gap-3">
                        <Skeleton
                          circle={true}
                          width={"50px"}
                          height={"30px"}
                        />
                        <Skeleton
                          circle={true}
                          width={"50px"}
                          height={"30px"}
                        />
                      </div>
                    </div>
                  </>
                );
              })
            : listOfAds.map((item) => {
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
              })}
        </div>
      </div>
    </>
  );
};

export default Home;
