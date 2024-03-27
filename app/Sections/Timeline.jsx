import React from "react";
import { Button } from "@/components/ui/button";
import timelineOne from "@/public/timelineOne.png";
import Image from "next/image";
import gradientBG from "@/public/rightGradient.png"

export default function Timeline() {
  return (
    <>
      <div className="relative hidden md:flex flex-row w-[100vw] p-28 -mt-32">
      <Image
        src={gradientBG}
        alt="Hero Image"
        width={128}
        height={128}
        className="w-[35%] h-[120vh] absolute right-0 z-[-1]"
        unoptimized
      ></Image>
        <div className="w-[70%] flex flex-col justify-center items-start">
          <h1 className="w-[50%] text-[45px]">Why Choose Unlocks?</h1>
          <p className="w-[60%] text-[18px]">
            Focus on real-world applications, learning through action, and
            community buildingConnect with 3000+ investors using AI-powered
            investor discovery, personalized pitches, and intelligent outreach.
          </p>

          <button
            type="button"
            className="mt-10 bg-[#3ACBBC] hover:bg-[#3ACBBC] text-white text-base font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            View Details
          </button>
        </div>
        <ol class="w-[30%] relative border-s border-[#3ACBBC]">
          <li class="relative mb-20 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <li class="relative mb-20 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <li class="relative mb-20 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <li class="relative mb-20 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <li class="relative mb-20 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
          <li class="relative mb-0 ms-6">
            <span class="absolute -top-2 -left-[3.6rem] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
              <Image src={timelineOne}></Image>
            </span>
            <h3 class="flex items-center ml-10 mb-2 text-lg text-white">
              Focus on real-world application
            </h3>
          </li>
        </ol>
      </div>
    </>
  );
}
