import React from "react";
import Image from "next/image";
import CardIcon from "@/public/CardIcon.png";
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
    <div className="relative cursor-pointer">
      {" "}
      <span className="absolute top-0 left-0 w-full lg:w-[94%] h-full mt-1 ml-1 bg-[#1B2339] rounded-xl"></span>{" "}
      <div className="relative p-6 bg-[#242A3B] w-full lg:w-[93%] h-full rounded-xl hover:scale-105 transition duration-500">
        {" "}
        <div className="flex items-center">
          {" "}
          <Image
            src={CardIcon}
            alt="Hero Image"
            width={128}
            height={128}
            className="w-16 h-16"
          ></Image>
          
        </div>{" "}
        <h3 className="my-2 text-white text-lg">
            Marketing
          </h3>
        <hr className="border-gray-600 my-4" />{" "}
        <p className="text-white">
          The gradual accumulation of information about
        </p>{" "}
      </div>{" "}
    </div>
  );
};

const Programs = () => {
  return (
    <section className="container md:mx-auto py-2 md:py-4">
      <h2 className="w-full text-3xl md:text-4xl font-[400] text-center mb-4">
        Explore The Programs
      </h2>
      <p className="text-sm text-white mx-auto w-[80%] md:w-[50%] text-center mb-8">
        Connect with 3000+ investors using Al-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        {programs.map((program) => ( 
          <Card key={program.title} {...program} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
