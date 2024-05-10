import React from "react";
import Btn from "../Buttton/Btn";
interface CustomCardProps {
  title: string;
  description: string;
  image: string;
  styleImage?: string;
}
const CustomCard = ({
  title,
  description,
  image,
  styleImage,
}: CustomCardProps) => {
  return (
    <div className="text-center w-[100%] text-black md:col-start-2 h-auto md:h-[370px] bg-white rounded-lg p-4 flex flex-col items-center gap-y-2">
      <div className="relative text-center w-full flex flex-row items-center justify-center z-10">
        <img
          src={image}
          alt="foreground img"
          className=" h-[60px] w-[60px] object-cover"
        />
        <img
          decoding="async"
          src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/icon-shape.png"
          alt="bg img"
          className="h-[90px] w-[90px]  top-[2rem]"
        />
      </div>
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
      <Btn text="Start Now" />
    </div>
  );
};

export default CustomCard;
