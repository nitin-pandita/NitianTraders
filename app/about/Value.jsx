import React from "react";

const Value = ({ icon, title, content }) => {
  return (
    <div
      className="border-[1px] border-black border-dashed flex  flex-col items-center md:p-4 group hover:bg-green-900/80 duration-500 
    rounded-md cursor-default"
    >
      <div className="">
        <div className="rounded-full  bg-white w-fit p-4">
          <img src={icon} alt="" width={100} />
        </div>
      </div>
      <div className="font-semibold text-2xl group-hover:text-white">
        {title}
      </div>
      <div className="p-4">{content}</div>
      <div className="font-semibold group-hover:text-white">Start Now!</div>
    </div>
  );
};

export default Value;
