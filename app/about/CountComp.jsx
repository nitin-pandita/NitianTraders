import React from "react";
import Count from "./Count";
const CountComp = ({ number, heading, content }) => {
  return (
    <div className="relative border border-black hover:border-green-800 duration-150 bg-[#EEE8E2] p-10 border-dashed flex flex-col gap-4 m-5 justify-center items-center ">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat animate-rotateme md:p-10"
        style={{
          backgroundImage: `url("/images/icon-shape.png")`,
          backgroundSize: "130px",
        }}
      />
      <div className="flex text-green-700 font-bold text-2xl">
        <Count number={number} />
        {heading}
      </div>
      <div className=" md:text-nowrap font-semibold">{content}</div>
    </div>
  );
};

export default CountComp;
