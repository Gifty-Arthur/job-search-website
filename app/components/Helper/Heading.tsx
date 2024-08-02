import React from "react";

interface Props {
  mainHeading: string;
  subHeading: string;
}

const Heading = ({ mainHeading, subHeading }: Props) => {
  return (
    <div className="text-center p-3">
      <h1 className="text-black text-[27px] text-opacity-90 font-bold">
        {mainHeading}
      </h1>
      <h1 className=" mt-[1rem] text-gray-800 text-[15px] text-opacity-80 font-medium ">
        {subHeading}
      </h1>
    </div>
  );
};

export default Heading;
