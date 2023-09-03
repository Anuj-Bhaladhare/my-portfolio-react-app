import React from "react";
import frameImage from "../assest/frame-image.png";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around">
        <div className="text-center sm:text-left font-bold text-3xl lg:text-4xl xl:text-5xl lg:flex lg:flex-col lg:gap-10">
          <h1 className="text-[#2BB4D4]">Hello, I'm</h1>
          <h1 className="text-[#2E2E2E]">ANUJ BHALADHARE</h1>
          <h1 className="text-[#004AAD]">FULL-STACK WEB DEVELOPER</h1>
        </div>

        <div className="mt-14 sm:mt-12 max-w-md lg:max-w-full lg:w-2/5">
          <img
            src={frameImage}
            className="w-full h-auto"
            alt="Anuj Bhaladhare"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
