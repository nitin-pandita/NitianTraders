"use client";

import Btn from "@/components/Buttton/Btn";
import CustomCard from "@/components/Cards/CustomCard";
import Founder from "@/components/Founder";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else setIsMobile(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div
        className={`${
          isMobile && "h-[600px] -mt-20"
        } h-[800px]  w-screen  z-[-1] bg-black bg-center bg-cover  bg-no-repeat box-border flex items-center justify-center relative pt-20 md:pt-12`}
        style={
          isMobile
            ? {
                backgroundImage: "url('/images/Main-banners-1.jpg')",
                backgroundSize: "cover",
              }
            : {
                transformOrigin: "bottom left",
                transform: "skewY(-2deg) skewX(-1.7deg) rotate(-1.8deg)",
                overflow: "hidden",
                borderBottomLeftRadius: "65px",
                // scale: "1",
                backgroundImage: "url('/images/Main-banners-1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
        }
      >
        <div
          className={`relative z-10 w-full md:w-[80%] h-full flex justify-center text-center pt-10 items-center text-white `}
          style={
            !isMobile
              ? {
                  transformOrigin: "bottom left",
                  transform: "skewY(2deg) skewX(1.7deg) rotate(1.8deg)",
                }
              : {}
          }
        >
          <div className="flex gap-4 flex-col justify-center items-center h-[600px] md:absolute right-4 top-10 p-4 ">
            <h1 className="text-3xl md:text-[2.9rem] font-bold text-center md:text-balance leading-10">
              <span className="text-blue-600 md:text-[3.9rem] p-3">
                Learn to Trade <br />
              </span>{" "}
              <br /> in the most simplified <br /> way.
            </h1>
            <p className="mt-2 text-center w-full md:w-[70%]  ">
              Booming Bulls Academy is the best stock market institute that
              provides the most simplified and to-the-point stock market course
              from the scratch for beginners.
            </p>
            <Btn text={"Enroll Now"} style="z-20" />
          </div>
          <div
            className="hidden md:block md:absolute top-[18rem] z-10 left-[16rem] animate-updown infinite"
            data-speed="0.06"
            data-revert="true"
          >
            <img
              decoding="async"
              src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/banner-shape12.png"
              alt="shape image dots"
            />
          </div>

          <div
            className="hidden md:block md:absolute top-[-2rem] left-[28rem]"
            data-speed="0.06"
            data-revert="true"
            style={{
              animation: "scale-infinite 8s ease-in-out infinite", // Apply scaling animation
            }}
          >
            <img
              decoding="async"
              src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/banner-shape13.png"
              alt="shape image circle"
              className="object-cover"
            />
          </div>

          <div
            className="absolute top-[30rem] left-[-60rem] animate-spin-slow "
            data-speed="0.06"
            data-revert="true"
          >
            <img
              decoding="async"
              className=""
              src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/banner-shape14.png"
              alt="shape image bottom"
              style={{
                animation: "rotate-infinite 30s infinite", // Apply rotation animation
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative flex flex-col md:flex-row  justify-center items-center px-8 mt-4 w-full gap-4 mr-4 gap-x-4">
          <CustomCard
            title="Learn From Scratch"
            image="/images/brainstorm.png"
            description="Learn the basics of the stock market, to enhance the understanding
            of how does the stock market works and progress to an in-depth
            understanding, acquiring the knowledge and skills needed to thrive
            in stock market trading."
          />
          <CustomCard
            title="Learn From Scratch"
            image="/images/brainstorm.png"
            description="Learn the basics of the stock market, to enhance the understanding
            of how does the stock market works and progress to an in-depth
            understanding, acquiring the knowledge and skills needed to thrive
            in stock market trading."
          />
          <CustomCard
            title="Learn From Scratch"
            image="/images/brainstorm.png"
            description="Learn the basics of the stock market, to enhance the understanding
            of how does the stock market works and progress to an in-depth
            understanding, acquiring the knowledge and skills needed to thrive
            in stock market trading."
          />
        </div>
      </div>

      <div className="relative mt-[3rem] w-full flex flex-col gap-5 md:flex-row justify-center p-4 pt-40 ">
        <div className="flex flex-col p-5  items-center md:items-start justify-center text-justify md:order-[-1] md:w-1/2 ">
          <h4 className="text-green-700 text-lg font-semibold">
            INDIA'S NO. 1 STOCK MARKET COURSE
          </h4>
          <h1 className="text-[2rem] mt-3">
            Elite Traders Live Mentorship Program
          </h1>
          <p className="mt-4">
            The Elite Traders Live Mentorship Program aims to help you learn and
            apply the knowledge and skills of a professional trader, with the
            potential for profitable outcomes. It encompasses numerous
            strategies and price action techniques suitable for various
            financial markets and trading styles, including Indian stocks,
            futures & options, the foreign exchange market, and commodities,
            covering intraday and swing trading.
          </p>

          <h2 className="text-green-700 font-bold text-lg  mt-6">
            Enroll Now by just paying ₹3000
          </h2>
          <Btn text={"Enroll Now"} />
        </div>
        <div className="order-[-1] md:order-0">
          <img
            src="/images/Elite-Traders-Program-4.0-Vertical.jpg"
            alt="Elite-Traders-Program"
            className="h-[36rem] "
          />
        </div>
      </div>
      <div className="relative mt-[3rem]  w-full flex flex-col gap-5 md:flex-row justify-center p-40 ">
        <div className="flex flex-col justify-center text-center md:text-start  md:order-[-1] md:w-1/3 items-center md:items-start">
          <h4 className="text-green-700 text-lg font-semibold">About Us</h4>
          <h1 className="text-4xl mt-3">Welcome to Booming Bulls Academy</h1>
          <p className="mt-4">
            Booming Bulls Academy is the Best Stock Market Institute that
            provides you with Best Online Stock Market course in India. It is an
            initiative for the young generation who are keen on making more,
            willing to step forward, and want to be free from financial
            situations.
          </p>
          <h2 className="mt-4">
            Generally, trading is considered as a business that is not suitable
            for everyone, but this is just a hoax that we clear by our program
            focuses on making you learn long-tested strategies that have proven
            to be profitable.
          </h2>

          <Btn text={"Enroll Now"} />
        </div>
        <div className="order-[-1] md:order-0">
          <img
            src="/images/Web-Element-02.png"
            alt="Elite-Traders-Program"
            className="h-[24rem] md:h-[36rem] "
          />
        </div>
      </div>

      <div className="relative mt-[3rem] w-full flex flex-col gap-x-10 md:flex-row justify-center p-40 ">
        <div>
          <img
            src="/images/Booming-Bulls-Logo.jpg"
            alt="Elite-Traders-Program"
            className="h-[28rem] "
          />
        </div>
        <div className="flex flex-col justify-center text-justify md:w-1/2 items-center md:items-start ">
          <h4 className="text-green-700 text-lg font-semibold">
            Why Choose Us
          </h4>
          <h1 className="text-[2rem] mt-3">We Simplify Trading</h1>
          <p className="mt-4">
            Booming Bulls Academy over the period of time has evolved & can help
            anyone with no experience & no prior knowledge about the markets to
            become a consistent trader capable of transforming your financial
            growth.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <h1>Revision Classes</h1>
            <h1>3 Months Support</h1>
            <h1>Trading System</h1>
          </div>

          <Btn text={"Enroll Now"} />
        </div>
      </div>

      <div className="relative mt-[3rem] w-full flex flex-col p-40 md:flex-row gap-5 items-center md:justify-center gap-x-5">
        <div className="flex flex-col text-center md:text-justify md:w-1/2 p-4">
          <h4 className="text-green-700 text-lg font-semibold">
            BENEFITS OF ENROLLING IN OUR COURSE
          </h4>
          <h1 className="text-[2rem] mt-3">
            JOIN THE MOST SIMPLIFIED TRADING COURSE FROM ANISH SINGH THAKUR
          </h1>
          <p className="mt-4 text-justify">
            Booming Bulls trading course can provide you to learn about the
            stock market from the basics, where you get to learn how does a
            market operates to how can you earn simply by putting all the
            logical thinking into the action. Our simplified strategies will
            precisely guide you on understanding earning and achieving financial
            independence efficiently and effectively.
          </p>
          <div className="mt-4 flex flex-col gap-y-4">
            <ul className="text-justify flex flex-col gap-4">
              <li>⭐Revision Classes</li>
              <li>⭐5 Star Trading Setup</li>
              <li>⭐Booming Bulls Facebook Stock Selection Group</li>
              <li>⭐Trading System Development</li>
              <li>⭐Trading Psychology</li>
              <li>⭐Ultimate Trader's Checklist</li>
            </ul>
          </div>

          <button className="mt-6 w-fit px-4 h-12 rounded-md bg-green-700 text-white  flex flex-row justify-center items-center">
            Get Started Now
          </button>
        </div>

        <div className="relative z-10 text-center p-6  bg-gray-900 text-white  flex flex-col items-center rounded-lg">
          <img
            decoding="async"
            src="https://boomingbulls.com/wp-content/uploads/2020/11/IMG-8657-min-scaled-1.jpg"
            alt="JOIN THE MOST SIMPLIFIED TRADING COURSE FROM ANISH SINGH THAKUR"
            className="h-[24rem] rounded-lg"
          />
          <a
            href="https://www.youtube.com/watch?v=vP_wawbgYJE"
            className="video-btn transform -translate-y-1/2 -translate-x-1/2 bg-mainColor2  text-white"
            rel="nofollow noopener"
            target="_blank"
          >
            <i className="flaticon-play"></i>
          </a>
          <span className="text-[25px] mt-2 font-semibold">
            India&#039;s No. 1 Stock <br />
            Market Trainer
          </span>
        </div>
      </div>
      <Founder />

      <div className="relative mt-[3rem] w-full flex flex-row justify-center gap-x-5 p-40">
        <div className="text-center p-4 md:max-w-[720px] md:mx-auto flex flex-col gap-y-2">
          <span className="text-green-700  block uppercase mb-2 text-lg font-semibold">
            Go At Your Own Pace
          </span>
          <h2 className="text-[36px] font-semibold">
            Subscribe to Our Newsletter
          </h2>
          <p>
            For information on regular updates, batch launches, important
            announcements, and specials classes, please subscribe to our
            newsletter
          </p>

          <form
            className="relative max-w-[650px] md:mx-auto mt-2 w-full"
            method="post"
          >
            <div className="w-full flex flex-col gap-2 items-center">
              <input
                type="email"
                className=" border-none md:w-[60%] bg-gray-300 text-black h-12 pl-4 rounded-md text-base font-normal memail"
                placeholder="Enter your email address"
                name="EMAIL"
                required
              />
              <button
                type="submit"
                className="rounded-md  bg-green-700 text-white h-12 px-4 w-fit"
              >
                <i className="flaticon-user"></i>Subscribe Now<span></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
