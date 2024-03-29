import React from "react";
import { Button } from "@/components/ui/button";
import timelineOne from "@/public/timelineOne.png";
import Image from "next/image";
import gradientBG from "@/public/rightGradient.png";

export default function Timeline() {
  return (
    <>
      <div className="relative md:flex flex-row w-[100vw] p-28 -mt-32">
        <Image
          src={gradientBG}
          alt="Hero Image"
          width={128}
          height={128}
          className="w-[35%] h-[120vh] absolute right-0 z-[-1]"
          unoptimized
        ></Image>
        <div className="w-full text-wrap mx-auto flex flex-col justify-center items-start">
          <h1 className="w-full text-center text-[45px] md:text-left">
            Why Choose Unlocks?
          </h1>
          <p className="w-[100%] text-center mt-2 md:mx-0 md:w-[60%] md:text-left mx-auto text-[18px]">
            Focus on real-world applications, learning through action, and
            community buildingConnect with 3000+ investors using AI-powered
            investor discovery, personalized pitches, and intelligent outreach.
          </p>

          <button
            type="button"
            className="mx-auto md:mx-0 mt-10 bg-[#3ACBBC] hover:bg-[#3ACBBC] text-white text-base font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            View Details
          </button>
        </div>
        <ol class="flex flex-col mt-10 items-center w-full md:w-[30%] h-[500PX] overflow-y-auto scroll-smooth relative ">
          <li class="relative mb-20 ms-4 flex items-center">
            <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <div className="hidden md:inline-flex absolute left-[44px] top-[58px] h-[92px] w-0.5 bg-[#3ACBBC]"></div>
          <li class="relative mb-20 ms-4 flex items-center">
            <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <div className="hidden md:inline-flex absolute left-[44px] top-52 h-[92px] w-0.5 bg-[#3ACBBC]"></div>
          <li class="relative mb-20 ms-4 flex items-center">
            <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <div className="hidden md:inline-flex absolute left-[44px] top-[352px] h-[92px] w-0.5 bg-[#3ACBBC]"></div>
          <li class="relative mb-20 ms-4 flex items-center">
            <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <div className="hidden md:inline-flex absolute left-[44px] top-[495px] h-[92px] w-0.5 bg-[#3ACBBC]"></div>
          <li class="relative mb-20 ms-4 flex items-center">
            <span class=" -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <div className="hidden md:inline-flex absolute left-[44px] top-[640px] h-[92px] w-0.5 bg-[#3ACBBC]"></div>
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
    </>
  );
}
