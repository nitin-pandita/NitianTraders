"use client";
import React from "react";
import GreenCross from "../../components/GreenCross";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <div className="h-full text-black bg-zinc-50">
      <div className="bg-[#fd5849] w-full p-20 relative">
        <div className="flex justify-center text-white text-2xl">
          <p>Testimonials</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>Testimonials</span>
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
      <Testimonials />
    </div>
  );
};

export default page;
