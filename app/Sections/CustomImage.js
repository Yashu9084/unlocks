import React from "react";
import cardimg from "../../assets/edimg.png";
import Image from "next/image";
const CustomImage = () => {
  return (
    <div className="w-[130px] h-[180px] md:w-[223.44px] md:h-[300.94px] bg-black p-2 m-1 rounded-[8px] drop-shadow-2xl shadow-new">
      <div className="flex flex-col justify-center">
        <h1 className="text-[10px] md:text-sm text-[#FE9E02]">
          Boost Your Education
        </h1>
        <Image
          className="md:w-[208px] md:h-[135px]"
          src={cardimg}
          alt="img"
        ></Image>
        <div className="w-[90%] mx-auto md:m-2 md:p-2">
          <ul className="marker:text-blue-600 list-disc text-[5px] md:text-[10px]">
            <div className="flex justify-between border-b-[1px] my-1 py-1 md:my-2 md:py-1">
              <li className="text-[#ABB6DE]">Checked sites this week</li>
              <p className="font-semibold">500,000</p>
            </div>
            <div className="flex justify-between border-b-[1px] my-1 py-1 md:my-2 md:py-1">
              <li className="text-[#ABB6DE]">Checked sites this week</li>
              <p className="font-semibold">500,000</p>
            </div>
            <div className="flex justify-between border-b-[1px] my-1 py-1 md:my-2 md:py-1">
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
