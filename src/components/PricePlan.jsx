import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const PricePlan = () => {
  const nav = useNavigate();
  return (
    <>
      <h1 class="md:text-4xl text-lg text-center mt-4 uppercase font font-bold text-[#009F6B] mb-8">
        Our Pricing Plans
      </h1>
      <div className="flex font m-3 items-center justify-center min-h-screen bg-gray-100">
        <div class="flex flex-col  md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div class="card-shadow border-2 border-[#009F6B] rounded-lg w-full md:w-80 text-center bg-white transform transition-transform hover:scale-105">
            <div class="gradient-bg text-white rounded-t-lg py-6">
              <h2 class="text-xl md:text-3xl font font-bold">Paid Plan</h2>
            </div>
            <p class="text-2xl font md:text-4xl mt-4 font-semibold text-[#009F6B]">
              ₹50 <span class="text-base md:text-lg">per ad</span>
            </p>
            <ul class="mt-6 text-left px-6 space-y-4 text-base md:text-lg">
              <li className="font">
                <span class="text-green-600">✓</span> Upload Image
              </li>
              <li className="font">
                <span class="text-green-600">✓</span> Post Large Amount of
                Content
              </li>
            </ul>
            <button
              onClick={() => {
                nav("/primeaddnewpost");
              }}
              class="mt-6 mb-6 bg-[#009F6B] font text-white py-3 px-6 rounded-full transition-transform hover:scale-105"
            >
              Select Plan
            </button>
          </div>

          <div class="card-shadow border-2 border-[#009F6B] rounded-lg w-full md:w-80 text-center bg-white transform transition-transform hover:scale-105">
            <div class="gradient-bg text-white rounded-t-lg py-6">
              <h2 class="text-xl md:text-3xl font font-bold">Free Plan</h2>
            </div>
            <p class="text-2xl font md:text-4xl mt-4 font-semibold text-[#009F6B]">
              Free <span class="text-base md:text-lg">per ad</span>
            </p>
            <ul class="mt-6 text-left px-6 space-y-4 text-base md:text-lg">
              <li>
                <span class="text-red-600">✗</span> Can't Upload Image
              </li>
              <li>
                <span class="text-green-600">✓</span> Post Limited Amount of
                Content
              </li>
            </ul>
            <button
              onClick={() => {
                nav("/freeaddnewpost");
              }}
              class="mt-6 mb-6 bg-[#009F6B] text-white py-3 px-6 rounded-full transition-transform hover:scale-105"
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricePlan;
