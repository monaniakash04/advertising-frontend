import React, { useContext, useEffect } from "react";
import "../index.css";
import { FaEye } from "react-icons/fa";
import { IoMdCall, IoMdHeart } from "react-icons/io";
import { useParams } from "react-router-dom";
import { Store } from "../App";
import axios from "axios";
import { motion } from "framer-motion"; // Import framer-motion for animations
import notFound from "../media/notfound.svg";

const AdInformation = () => {
  const { id } = useParams();
  const { adInfo, setAdInfo } = useContext(Store);

  const fetchAdsInfo = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/getPostInfo/postId=${id}`
    );
    setAdInfo(res.data);
  };

  useEffect(() => {
    fetchAdsInfo();
  }, [id]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.5 } },
  };

  const viewCountVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.9, duration: 0.5 },
    },
  };

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <motion.div
        className="md:w-[750px] max-w-[900px] h-auto md:h-[70vh] flex flex-col md:flex-row bg-white shadow-2xl rounded-xl p-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="md:w-[350px] flex justify-center max-w-[400px] h-[300px] md:h-full rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={adInfo.adimg === null ? notFound : adInfo.adimg}
            className="w-full h-full object-cover rounded-xl"
            alt="Ad"
          />
        </motion.div>
        <motion.div
          className="md:w-[400px] max-w-[500px] flex flex-col h-auto md:h-full items-center gap-5"
          variants={textVariants}
        >
          <h1 className="md:text-3xl text-2xl font-bold text-[#009F6B] text-center">
            {adInfo.adheading}
          </h1>
          <p className="md:text-lg h-auto md:h-[290px] overflow-clip w-full text-md font-light text-justify px-3">
            {adInfo.adbody}
          </p>
          <motion.h1
            className="md:text-3xl flex justify-center items-center text-2xl font-light text-[#009F6B]"
            variants={phoneVariants}
          >
            <IoMdCall className="mr-2" /> +91 {adInfo.adphone}
          </motion.h1>
          <motion.div
            className="w-full flex justify-center gap-5 mt-auto"
            variants={viewCountVariants}
          >
            <p className="flex justify-center gap-1 md:text-xl text-md items-center text-[#009F6B]">
              <FaEye className="mr-1" />
              {adInfo.adview}
            </p>

            <p className="flex justify-center gap-1 md:text-xl text-md items-center text-[#009F6B]">
              <IoMdHeart className="mr-1" />
              {adInfo.adlikes}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdInformation;
