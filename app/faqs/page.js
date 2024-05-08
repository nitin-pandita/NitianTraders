"use client";
import FaqList from "./FaqList";
import GreenCross from "../../components/GreenCross";

export default function FaqPage() {
  return (
    <div className="h-full text-black bg-zinc-50">
      <div className="bg-gray-900 w-full p-36 relative border-b-2 border-white">
        <div className="flex justify-center text-white text-2xl">
          <p>Frequently Asked Questions</p>
        </div>
        <div className="flex justify-center text-white text-lg">
          <p>
            Home / <span>Faq's</span>
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
      <article className="bg-gray-900">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <section className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <FaqList />
          </section>
        </section>
      </article>
    </div>
  );
}
