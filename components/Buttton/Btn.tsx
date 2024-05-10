import React from "react";

const Btn = ({ text }: any) => {
  return (
    <button className="mt-10 z-20 p-2 font-semibold w-40   h-12 rounded-md bg-green-700 text-white  hover:bg-[#FE4A55] transition ease-out duration-500 flex justify-center items-center gap-x-2">
      {text}
    </button>
  );
};

export default Btn;
