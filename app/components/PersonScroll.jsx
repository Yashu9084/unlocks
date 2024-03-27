import React from "react";
import Image from "next/image";
import google from "@/public/google.png";
import google2 from "@/public/google2.png";
import women from "@/public/womenImg.png";

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
            unoptimized
          ></Image>
        </div>
      </div>
    </div>
  );
};

const PersonScroll = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
      className="w-full mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_0px,_black_calc(100%-0px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {programs.map((program) => (
          <li className="min-w-[250px] px-5">
            <Card key={program.title} {...program} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {programs.map((program) => (
         <li className="min-w-[250px] px-5">
         <Card key={program.title} {...program} />
       </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonScroll;
