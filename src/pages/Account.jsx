import React, { useEffect, useState } from "react";
import Card from "../components/Card2";
import "../index.css";
import notFound from "../media/notfound.svg";

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    ads: [],
    favourite: [],
  });
  useEffect(() => {
    const userid = localStorage.getItem("userid");
    fetch(`${process.env.REACT_APP_SERVER_URL}/userInfo/userId=${userid}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white md:p-3">
        <div className="bg-white min-h-[800px] p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-[#009F6B] font mb-4">
            User's Information
          </h1>
          <form>
            <input
              type="email"
              placeholder={"Name"}
              readOnly={true}
              value={userInfo.fullname}
              className="w-full p-2 mb-4 outline-none font rounded border"
            />
            <input
              type="email"
              placeholder="Email"
              readOnly={true}
              value={userInfo.email}
              className="w-full p-2 mb-4 outline-none font rounded border"
            />
            <input
              type="password"
              placeholder="Password"
              readOnly={true}
              value={userInfo.password}
              className="w-full p-2 mb-4 outline-none font rounded border"
            />
          </form>
          <h1 className="text-2xl font-bold text-[#009F6B] font mb-1">
            Your Ads
          </h1>
          <div
            style={{ display: userInfo.ads.length > 0 ? "grid" : "block" }}
            className="mb-2 h-[500px] overflow-scroll   scroll xl:grid-cols-5 gap-2 lg:grid-cols-3 justify-items-center md:grid-cols-3 xs:grid-cols-1 smb:grid-cols-1 grid-cols-2 border-2 w-full p-2"
          >
            {userInfo.ads.length === 0 ? (
              <div className="w-full flex justify-center items-center">
                <img src={notFound} className="w-full h-full" alt="" />
              </div>
            ) : (
              userInfo.ads.map((item) => {
                const {
                  adheading,
                  adbody,
                  adphone,
                  adlikes,
                  adview,
                  adcity,
                  adid,
                  adstate,
                } = item;
                return (
                  <>
                    <Card
                      heading={adheading}
                      body={adbody}
                      phone={adphone}
                      likes={adlikes}
                      view={adview}
                      city={adcity}
                      id={adid}
                      state={adstate}
                    />
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
