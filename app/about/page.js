import React from "react";
import CountComp from "./CountComp";
import ValuesComp from "./ValuesComp";
import GreenCross from "../../components/GreenCross";
import YellowCircle from "./YellowCircle";
import Contact from "../../components/Contact";
import Founder from "@/components/Founder";
const page = () => {
  return (
    <div className="h-full text-black">
      <div className="bg-gray-900 w-full p-36 relative">
        <div className="flex justify-center text-white text-2xl">
          <p>About Us</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>About Us</span>
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

      <div className="pt-20 md:flex px-5 bg-white relative">
        <div className="grid grid-cols-2 md:gap-8">
          <img src="/images/website-01-min.png" className="w-[300px]" alt="" />

          <img
            src="/images/website-02-a-min.png"
            className="w-[300px]"
            alt=""
          />

          <img src="/images/website-03-min.png" className="w-[300px]" alt="" />

          <img src="/images/website-04-min.png" className="w-[300px]" alt="" />
        </div>
        <div className="md:w-1/2 pl-2 md:pl-10">
          <div className="p-4">
            <p className="text-green-700 font-bold">ABOUT US</p>
          </div>
          <div className="p-4">
            <h2>Welcome to Booming Bulls Academy</h2>
          </div>
          <div className="p-4">
            <p>
              Booming Bulls is an initiative for the young generation interested
              in making more, willing to step forward and be free from financial
              situations. We provide knowledge based on self-learning,
              experience, and theoretical implications on the market.
            </p>
            <p>
              In general, trading is considered a business not suitable for
              everyone, but this is just a hoax which we clear by letting you
              learn about the strategies that can provide a good profit.
            </p>
          </div>
          <div className="grid grid-cols-2 p-4 z-50">
            <div className="flex items-center gap-2">
              <img src="/images/experience.png" className="w-10 h-10" alt="" />
              <p>Revision Classes</p>
            </div>
            <div className="flex items-center gap-2 p-4 z-50">
              <img src="/images/time-left.png" className="w-10 h-10" alt="" />
              <p>3 Months Support</p>
            </div>
            <div className="flex items-center  p-4 pl-0  gap-2 z-50">
              <img
                src="/images/video-tutorial.png"
                className="w-10 h-10"
                alt=""
              />
              <p>Trading System</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-green-700 text-zinc-50 flex w-fit p-2 gap-2">
              <img src="/images/user.png" className="w-5 h-5" alt="" />
              <p>Enroll Now</p>
            </div>
          </div>
          <div className="relative opacity-90 z-[1]">
            <YellowCircle />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#F6F1ED] p-5 md:p-20 ">
        <div className="lg:w-1/2 flex flex-col items-start  gap-4">
          <div className="text-green-700 font-semibold">
            <p>WHY CHOOSE US</p>
          </div>
          <div className="font-bold text-3xl">
            <p>What Makes Us Different from the Competiton?</p>
          </div>
          <div>
            <p>
              We focus on helping you understand markets better & learn to
              analyze charts on your own & not just sell you a strategy that is
              not enough on its own. We help you design your Trading Plan, which
              is crucial; therefore, you will always have an Entry Plan & Exit
              Plan. Being Unbiased in the Stock Market is a Blessing; always
              have a Neutral Mindset. A calm mind continuously learns to keep
              the peace even in a situation of chaos, "RESERVE YOUR CHAOS".
            </p>
          </div>
          <div>
            <p>
              Not a member yet?{" "}
              <span className="text-green-700 hover:underline duration-100 cursor-pointer">
                Register now
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:p-10">
          <CountComp number={2} heading="M" content="YOUTUBE SUBSCRIBERS" />
          <CountComp number={27000} heading="+" content="STUDENTS MENTORED" />
          <CountComp number={1000} heading="+" content="SESSIONS FINISHED" />
          <CountComp number={5} heading="" content="GOOGLE RATING" />
        </div>
      </div>
      <div className=" bg-zinc-50">
        <ValuesComp />
      </div>
      <Founder />
      <div className="bg-zinc-50">
        <div className="text-xl font-semibold text-green-700 p-4">
          <p className="flex justify-center">
            LET'S MEET THE PEOPLE BEHIND BOOMING BULLS
          </p>
        </div>
        <div className="font-bold text-4xl font-serif">
          <p className="flex justify-center">Our Team</p>
        </div>
        <div className="flex justify-center gap-5 p-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-10 bg-white shadow-md rounded-lg shadow-green-800 flex flex-col items-center hover:scale-[1.02] duration-500">
              <img src="/images/abhirup-sir.png" alt="" className="w-60" />
              <p className="font-semibold text-xl p-2">Abhirup Sekhri</p>
              <p className="font-semibold text-green-700">
                Chief Operating Officer
              </p>
            </div>
            <div className="p-10 bg-white shadow-md rounded-lg shadow-green-800 flex flex-col items-center hover:scale-[1.02] duration-500">
              <img src="/images/Saurabh-Sir.jpg" className="w-60" alt="" />
              <p className="font-semibold text-xl p-2">Saurabh Khaspuri</p>
              <p className="font-semibold text-green-700">
                Chief Marketing Officer
              </p>
            </div>
            <div className="p-10 bg-white shadow-md rounded-lg shadow-green-800 flex flex-col items-center hover:scale-[1.02] duration-500">
              <img src="/images/3-sir.jpg" className="w-60" alt="" />
              <p className="font-semibold text-xl p-2">Pratik Andulkar</p>
              <p className="font-semibold text-green-700">
                Chief Business Officer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F1ED] flex flex-col gap-5 p-10 items-center relative">
        <div className="text-green-700 font-semibold text-xl z-50">
          <p>LIMITED SEATS LEFT</p>
        </div>
        <div className="text-3xl font-bold z-50">
          <p>Register Yourself For Our Upcoming Batch</p>
        </div>
        <div className="font-semibold text-xl z-50">
          <p>
            Check-out Our Upcoming Weekend/Weekday Batch and get yourself
            Enrolled.
          </p>
        </div>
        <div className=" z-50 flex gap-2 p-2 bg-purple-500 w-fit rounded-md text-black border-[1px] border-black shadow-md shadow-black cursor-pointer hover:text-white hover:bg-green-700/80 duration-300">
          <img src="/images/sketchbook.png" alt="" className="w-6" />
          <p className="font-semibold">Get Started Now</p>
        </div>
        <div className="opacity-95">
          <YellowCircle />
        </div>
        <div className="absolute left-10 top-20 animate-updown">
          <img src="/images/shape7.png" alt="" />
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default page;
