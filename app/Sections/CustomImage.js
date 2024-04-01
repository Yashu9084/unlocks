import React from "react";
import cardimg from "../../assets/edimg.png";
import Image from "next/image";
const CustomImage = () => {
  return (
    <div className="w-[223.44px] h-[300.94px] bg-black p-2 m-1 rounded-[8px] drop-shadow-2xl shadow-new">
      <div className="flex flex-col justify-center">
        <h1 className="text-sm text-[#FE9E02]">Boost Your Education</h1>
        <Image className="w-[208px] h-[135px]" src={cardimg} alt="img"></Image>
        <div className="w-[90%] mx-auto m-1 p-2">
          <ul className="marker:text-blue-600 list-disc text-[10px]">
            <div className="flex justify-between border-b-[1px] my-2 py-1">
              <li className="text-[#ABB6DE]">Checked sites this week</li>
              <p className="font-semibold">500,000</p>
            </div>
            <div className="flex justify-between border-b-[1px] my-2 py-1">
              <li className="text-[#ABB6DE]">Checked sites this week</li>
              <p className="font-semibold">500,000</p>
            </div>
            <div className="flex justify-between border-b-[1px] my-2 py-1">
              <li className="text-[#ABB6DE]">Checked sites this week</li>
              <p className="font-semibold">500,000</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomImage;
