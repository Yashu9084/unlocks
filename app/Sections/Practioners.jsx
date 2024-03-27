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

const Practioners = () => {
  return (
    <section className="relative my-16 md:my-32 py-4">
      <Image
        src={gridBG}
        alt="Hero Image"
        width={128}
        height={128}
        className="min-w-full h-full absolute inset-0 top-32 z-[-1]"
        unoptimized
      ></Image>
      <Image
        src={gradientBG}
        alt="Hero Image"
        width={128}
        height={128}
        className="w-[35%] h-[120vh] absolute inset-0 -top-64 z-[-1]"
        unoptimized
      ></Image>

      <h2 className="w-full text-4xl md:text-4xl font-[400] text-center mb-4">
        Learn From Practitioners
      </h2>
      <p className="text-sm text-white mx-auto w-[80%] md:w-[50%] text-center mb-8">
        Connect with 3000+ investors using Al-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>

      {/* <div className="mt-20 grid grid-cols-1 h-[51vh] lg:grid-cols-3 xl:grid-cols-6 gap-8">
        {programs.map((program) => (
          <Card key={program.title} {...program} />
        ))}
      </div> */}

      <PersonScroll></PersonScroll>

      <BrandScroll></BrandScroll>
    </section>
  );
};

export default Practioners;
