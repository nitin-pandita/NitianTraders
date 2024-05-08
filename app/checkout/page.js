"use client";
import React from "react";
import Pricing from "@/components/Pricing.jsx";
import GreenCross from "../../components/GreenCross";

const page = () => {
  return (
    <div className="h-full text-black bg-zinc-50">
      <div className="bg-gray-900 w-full p-36 border-b-2 border-white  relative">
        <div className="flex justify-center text-white text-2xl">
          <p>Join Community Plans</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>Pricing</span>
          </p>
        </div>
        <GreenCross />
        <div className="animate-moveleftbounce absolute left-40 bottom-[-50px] z-20">
          {" "}
          <img
            src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/shape1.png"
            alt=""
          />
        </div>
      </div>
      <Pricing />
    </div>
  );
};

export default page;
