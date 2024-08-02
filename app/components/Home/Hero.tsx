import React from "react";
import HeroImage from "@/public/Images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" pt-[5rem] pb-[3rem]">
      <div className="container flex flex-col items-center justify-center">
        <div className="mx-auto w-[80%] flex  items-center justify-between lg:grid-cols gap-[2rem]">
          {/* content */}
          <div>
            <h1 className="text-28px sm:text-[35px] lg:text-[45px] xl:text-5xl text-[#05264e] leading-[3rem] lg:leading[4rem] font-extrabold">
              The <span className="text-blue-500 ">Easiest Way</span>
              <br />
              To Get Your New Job
            </h1>
            <p className="text-[#4f5e64] text-[16px] md:text-md mt-[1rem]">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140000 application every single
              day
            </p>

            {/* search */}
            <div className="mt-[1.5rem]">
              <input
                className="w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md
                bg-gray-200"
                type="text"
                placeholder="Search Job"
              />
              <button className="px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white ">
                Search
              </button>
            </div>
          </div>
          {/* img */}
          <div className="hidden lg:block">
            <Image src={HeroImage} alt="Logo" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
