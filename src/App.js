import React, { createContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Account from "./pages/Account";
import About from "./pages/About";
import AddNewAds from "./pages/AddNewAds";
import Favourites from "./pages/Favourites";
import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdInformation from "./components/AdInformation";
import DashBoard from "./admin/DashBoard";
import AdminSignIn from "./admin/AdminSignIn";
// import PricePage from "./components/PricePage";
import PricePlan from "./components/PricePlan";
import FreeAd from "./pages/FreeAd";

export const Store = createContext();
function App() {
  const [allAds, setAllAds] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  // home page state
  const [listOfAds, setListOfAds] = useState([]);
  // adinfo page state
  const [adInfo, setAdInfo] = useState({});
  // favourite ads
  const [favourite, setFavourite] = useState([]);
  // category state
  const [category, setCategory] = useState("properties");
  const [city, setCity] = useState("ahmedabad");
  // admin
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [adsForVerify, setAdsForVerify] = useState([]);

  useEffect(() => {
    const islog = localStorage.getItem("login");
    islog ? setIsLogin(true) : console.log("called2");
  }, []);
  return (
    <>
      <Store.Provider
        value={{
          isLogin,
          setIsLogin,
          listOfAds,
          setListOfAds,
          adInfo,
          setAdInfo,
          favourite,
          setFavourite,
          category,
          setCategory,
          city,
          setCity,
          isAdminLogin,
          setIsAdminLogin,
          adsForVerify,
          setAdsForVerify,
          allAds,
          setAllAds,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/account"
              element={isLogin ? <Account /> : <Navigate to={"/signin"} />}
            />
            <Route
              path="/primeaddnewpost"
              element={isLogin ? <AddNewAds /> : <Navigate to={"/signin"} />}
            />
            <Route
              path="/freeaddnewpost"
              element={isLogin ? <FreeAd /> : <Navigate to={"/signin"} />}
            />
            <Route
              path="/favorite"
              element={isLogin ? <Favourites /> : <Navigate to={"/signin"} />}
            />

            <Route
              path="/pricePlan"
              element={isLogin ? <PricePlan /> : <Navigate to={"/signin"} />}
            />

            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/Adinfo/:id" element={<AdInformation />} />
            <Route
              path="/adminDashBoard"
              element={
                isAdminLogin ? <DashBoard /> : <Navigate to={"/adminSignIn"} />
              }
            />
            <Route path="/adminSignIn" element={<AdminSignIn />} />
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
