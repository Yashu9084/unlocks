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
  
  
];

const Card = ({ title, description }) => {
  return (
    <article className="rounded-xl border border-gray-700 bg-white p-6">
    <div className="flex flex-col justify-start items-start gap-4">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        className="size-16 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-medium text-[#190041]">Ruben Dokidis</h3>

        <div className="flow-root">
          <ul className="-m-1 flex flex-wrap">
            <li className="p-1 leading-none">
              <a href="#" className="text-xs font-medium text-gray-300">
                CEO at Company
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul className="mt-10 space-y-2">
      <li>
        <a href="#" className="block h-full rounded-lg ">
          <p className="mt-1 text-sm font-medium text-[#190041]">
            "I've been a user of PageBolt for over a year now, and it's been
            an invaluable tool for me to stay on top of my work. The interface
            is user-friendly and intuitive, making it easy for me to manage my
            tasks and projects
          </p>
        </a>
      </li>
    </ul>
  </article>
  );
};

const TestimonialScroll = () => {
  return (
    <>
    <div
      x-data="{}"
      x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_0px,_black_calc(100%-0px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {programs.map((program) => (
          <li className="min-w-[480px]">
            <Card key={program.title} {...program} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {programs.map((program) => (
         <li className="min-w-[480px]">
         <Card key={program.title} {...program} />
       </li>
        ))}
      </ul>
    </div>
    <div
      x-data="{}"
      x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
      className="w-full px-60 mt-4 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_0px,_black_calc(100%-0px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
        {programs.map((program) => (
          <li className="min-w-[480px]">
            <Card key={program.title} {...program} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {programs.map((program) => (
         <li className="min-w-[480px]">
         <Card key={program.title} {...program} />
       </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TestimonialScroll;
