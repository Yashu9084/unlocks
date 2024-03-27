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
import newsletter from "@/public/newsletter.png";
const programs = [
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
];

const Card = ({ title, description }) => {
  return (
    <div className="wrapper">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={women}
          alt="Hero Image"
          width={128}
          height={128}
          className="w-[98%] h-[230px] object-cover object-center rounded-2xl z-10 shadow-md"
        ></Image>

        <div className="relative bg-[#242A3B] pt-36 rounded-3xl min-w-[110%] min-h-[230px] shadow-lg px-2 -mt-32">
          <h4 className="text-md leading-tight truncate text-center">
            Mahommad Sarosh
          </h4>
          <h4 className="text-sm my-2 text-[#FFFFFF] leading-tight truncate text-center">
            Product Manager
          </h4>

          <Image
            src={google2}
            alt="Hero Image"
            width={128}
            height={128}
            className="w-20 my-2 h-8 z-10 mx-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <>
      <section className="w-[100vw] relative mt-8 md:-mt-4">
      <Image
          src={newsletter}
          alt="Hero Image"
          width={128}
          height={128}
          className="absolute w-full h-full object-cover md:-left-2"
          unoptimized
        ></Image>
        <div className="">
          <div className="relative py-10 px-8 md:py-16 md:px-12 aos-init">
        
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
                <h3 className="relative md:left-40 md:w-[60%] text-[30px] h3 text-white mb-2">Subscribe To Our Latest New Letters </h3>
                
              </div>
              <form className="w-full lg:w-1/2">
                <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="email"
                    className="md:w-[50%] appearance-none rounded-[5px] px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-black"
                    placeholder="Your best email…"
                    aria-label="Your best email…"
                  />
                  <a
                    className="flex justify-center rounded-[5px] items-center font-semibold p-4 text-white bg-black"
                    href="#0"
                  >
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
