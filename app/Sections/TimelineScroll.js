import Image from "next/image";
import React from "react";
import timelineOne from "@/public/timelineOne.png";

const TimelineScroll = () => {
  return (
    <div>
      <ol class="w-[100vw] flex flex-col mt-10 items-center md:h-[500PX] overflow-y-auto scroll-smooth relative ">
        <div className="absolute h-full left-[7.1rem] md:left-[39.5rem] w-0.5 bg-[#3ACBBC] md:h-[150%] mt-8"></div>
        <li class="relative mb-20 ms-4 flex items-center">
          <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-20 ms-4 flex items-center">
          <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-20 ms-4 flex items-center">
          <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-20 ms-4 flex items-center">
          <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-20 ms-4 flex items-center">
          <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-0 ms-4 flex items-center">
          <span class="-top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default TimelineScroll;
