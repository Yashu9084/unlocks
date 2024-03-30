import React from "react";
import circle from "../../assets/circle.png";
import Image from "next/image";
const Experience = () => {
  return (
    <div className="mt-[5rem] mx-auto max-w-[80rem] h-fit md:h-[16rem] bg-[#242A3B] rounded-md">
      <h1 className="text-center p-6">
        Manufacturing Software that goes beyond the benchmark
      </h1>
      <div className="flex flex-wrap items-center gap-6 justify-evenly mt-6">
        <div className="relative">
          <h1 className="absolute left-[5%] top-[25%] text-5xl">23+</h1>
          <div className="flex items-center gap-6">
            <Image width={100} height={100} src={circle} alt="" />
            <h2 className="">Years of Experience</h2>
          </div>
        </div>
        <div className="relative">
          <h1 className="absolute top-[25%] text-5xl">300%</h1>
          <div className="flex items-center gap-12">
            <Image width={100} height={100} src={circle} alt="" />
            <h2 className="">Year on Year Growth</h2>
          </div>
        </div>
        <div className="relative">
          <h1 className="absolute left-[5%] top-[25%] text-5xl">12+</h1>
          <div className="flex items-center gap-6">
            <Image width={100} height={100} src={circle} alt="" />
            <h2 className="">Countries of operation</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
