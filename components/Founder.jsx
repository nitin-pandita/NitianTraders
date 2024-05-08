import React from "react";
import GreenCross from "./GreenCross";
import YellowCircle from "../app/about/YellowCircle.jsx";
const Founder = () => {
  return (
    <div className="grid md:grid-cols-2 p-10 gap-3 bg-[#F6F1ED]">
      <div className="flex justify-center items-center ">
        <img src="/images/About_Founder.jpg" alt="" className="w-[400px]" />
      </div>
      <div className="flex-col flex gap-5 justify-center relative z-2">
        <div className="text-black/70 font-bold text-xl italic font-serif">
          <p className="md:block hidden">
            Having learned from veterans in the field and gained vast, versatile
            experience in the markets, Anish has adopted a practical, in-depth
            tested approach in his strategies. Yet, he has designed the course
            in the simplest manner of undestanding, ensuring accessibility for
            everyone. Featured in reputable media platforms such as Times of
            India, Hindustan Times, Economic Times, and more, Anish has remained
            consistent in delivering excellent stock market education to
            aspiring traders through his effective teaching methods.
          </p>
          <p>
            {" "}
            He has been honored with the "Millennium Brilliance Award" for the
            best trainer in the stock market industry, while Booming Bulls
            Academy, India's leading stock market training institute, has been
            recognised as the "Most Trusted Stock Market Learning Platform in
            India" at the Atal Achievement Awards in 2022. Having trained over
            27,000 students, Anish continues to share his stock market
            teachings, enabling passionate individuals to become elite traders.
          </p>
        </div>
        <p className="font-bold text-xl">Anish Singh Thakur</p>
        <p className="font-semibold text-green-700">
          CEO at Booming Bulls Academy
        </p>
      </div>
      <div className="relative">
        <GreenCross />
      </div>
      <div className="relative opacity-30">
        <YellowCircle />
      </div>
    </div>
  );
};

export default Founder;
