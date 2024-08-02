import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  category: string;
  openPosition: string;
}

const JobCategoryCard = ({ category, image, openPosition }: Props) => {
  return (
    <div
      className="p-4 border-2 cursor-pointer hover:scale-110 hover:sadow-sm transition-all 
    duration-300 border-gray-500 rounded-lg border-opacity-10"
    >
      <div className="spiace-x-4 flex items-center">
        {/* image */}
        <Image src={image} alt="{category}" width={60} height={60} />
      </div>
    </div>
  );
};

export default JobCategoryCard;
