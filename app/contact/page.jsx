import React from "react";
import Contact from "../../components/Contact";
import GreenCross from "../../components/GreenCross";
const page = () => {
  return (
    <div className="h-full text-black">
      <div className="bg-gray-900  w-full p-36 relative">
        <div className="flex justify-center text-white text-2xl">
          <p>Contact Us</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>Contact Us</span>
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
      <div className="p-5 bg-white">
        <Contact />
      </div>
    </div>
  );
};

export default page;
