import React from "react";
import Value from "./Value";

const ValuesComp = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:p-5">
      <div className="text-green-700 font-bold">
        <p>EDUCATION FOR EVERYONE</p>
      </div>
      <div className="text-4xl font-bold">
        <p>Our Values</p>
      </div>
      <div className="text-center text-wrap">
        <p className="text-black/70">
          Finding your own space and utilizing better learning options can
          result faster <br />
          than the traditional ways. Enjoy the beauty of eLearning!
        </p>
      </div>
      <div className="flex justify-around lg:flex-nowrap flex-wrap gap-3">
        <Value
          icon="/images/idea.png"
          title="Why Choose Us"
          content="We make it easier for you by checking out the real-time investing analysis, that too on the trainer's account, who will let you into his thoughts while they are trading. We provide a view of the world inside a trader's head."
        />
        <Value
          icon="/images/monitor.png"
          title="Our Mission"
          content="We provide every aspect of trading to give a future to your thoughts rather than just investing and waiting for things to happen; with us, you are ready for your next step based on your last investment outcome."
        />
        <Value
          icon="/images/security.png"
          title="Our Vision"
          content="In Booming Bulls, we provide you training on the live trading account, and while you are learning, we cover you with all the strategies and help you lookout for the perfect strategy according to your plans."
        />
      </div>
    </div>
  );
};

export default ValuesComp;
