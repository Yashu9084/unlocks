import React from "react";
import Image from "next/image";
import google from "@/public/google.png";
import BrandScroll from "../components/BrandScroll";
import women from "@/public/womenImg.png";
import google2 from "@/public/google2.png";
import PersonScroll from "../components/PersonScroll";
import ScrollComponent from "../components/Scrollcomponent";
import gridBG from "@/public/gridBG.png";
import gradientBG from "@/public/radialGradient.png";
import logitech from "@/public/logitech.png";

const Brandshowcase = () => {
  return (
    <section className="relative min-h-[50vh] mt-24 py-4">
      <Image
        src={gridBG}
        alt="Hero Image"
        width={128}
        height={128}
        className="min-w-full absolute inset-0 top-32 z-[-1]"
        unoptimized
      ></Image>
      <Image
        src={gradientBG}
        alt="Hero Image"
        width={128}
        height={128}
        className="w-[25%] h-full absolute inset-0 top-4 z-[-1]"
        unoptimized
      ></Image>

      <h2 className="text-4xl font-[400] text-center mb-4">
        Companies We Have Collaborated With
      </h2>
      <p className="text-sm text-white  mx-auto w-[50%] text-center mb-8">
        Connect with 3000+ investors using AI-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>
      <div className="pl-0 p-10 w-[100vw]">
        <div className="h-[25vh] flex flex-row justify-between">
          <div className="w-[40%] flex flex-row items-center justify-center text-[50px] md:text-[85px]">
            15+
          </div>
          <div className="w-[60%] flex flex-wrap flex-col justify-between">
            <div className="w-full flex flex-wrap gap-6 justify-center">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="w-[50px] md:w-[110px] mb-4">
                  <Image src={logitech} />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-wrap gap-6 justify-center">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="w-[50px] md:w-[110px] mb-4">
                  <Image src={logitech} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100vw] md:h-[30vh] flex flex-row justify-between items-center">
          <div className="w-[100%] flex flex-col justify-between items-start">
            <div className="w-full flex flex-wrap gap-16 justify-center">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="mt-12 w-[50px] md:w-[110px]">
                  <Image src={logitech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brandshowcase;
