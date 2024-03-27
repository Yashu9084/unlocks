"use client";
import React from "react";
import Image from "next/image";
import CardIcon from "@/public/CardIcon.png";
import realEstate from "@/public/realEstate.png";
const programs = [
  {
    cardIcon: realEstate,
  },
  {
    cardIcon: realEstate,
  },
  {
    cardIcon: realEstate,
  },
  {
    cardIcon: realEstate,
  },
  {
    cardIcon: realEstate,
  },
  {
    cardIcon: realEstate,
  }
];

const Programs = () => {
  return (
    <section className="px-0 mt-4 md:mt-[6.5rem] py-6">
      <h2 className="w-full text-4xl md:text-4xl font-[400] text-center mb-4">
       Our Alumni Work At These Leading Companies
      </h2>
      <p className="text-sm text-white mx-auto w-[80%] md:w-[50%] text-center mb-8">
        Connect with 3000+ investors using Al-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>
      <div className="p-4 md:p-10 w-full grid grid-cols-2 justify-center items-center lg:grid-cols-3 xl:grid-cols-6 gap-4 bg-[#242A3B]">
        {programs.map((program) => (
          <div className="w-full flex flex-row justify-center items-center">
            <Image
              src={program.cardIcon}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-[60%] h-20"
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
