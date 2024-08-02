import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        gap-[3rem] items-start pb-[2rem] border-white border-opacity-10"
      >
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            Jobify
          </h1>
          <p className="textsm text-white text-opacity-70">
            Lorem ipsum dolor sit amet consectur adisciping alit. Nihi cumque
            blanditiis incidunt impedit quam molestiae
          </p>
          {/* social */}
          <div className="mt-[1.5rem] flex items-center spacee-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <FaFacebook className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <FaTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h1>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Policy
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Application
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Candidiate
          </p>
        </div>

        {/* 3rd */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job details
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>

        {/*  4th part*/}

        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in Touch
          </h1>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            +233 267 8639
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            good@gmail.com
          </p>
          <p className="text[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Accra, Ghana
          </p>
        </div>
      </div>

      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        COPYRIGHT BY WEBDEV TITY-2024
      </h1>
    </div>
  );
};

export default Footer;
