import React from "react";
import Image from "next/image";
import CardIcon from "@/public/CardIcon.png";
import TestimonialScroll from "../components/TestimonialScroll/TestimonialScroll";
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

const Testimonials = () => {
  return (
    <section className="overflow-x-hidden min-w-[100vw] container mx-0 px-0 py-0">
     <h2 className="w-full text-4xl md:text-4xl font-[400] text-center mb-4">
        Hear It From The Learners
      </h2>
      <p className="text-sm text-white mx-auto w-[80%] md:w-[50%] text-center mb-8">
        Connect with 3000+ investors using Al-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>

      <TestimonialScroll></TestimonialScroll>
      
      
    
    </section>
  );
};

export default Testimonials;
