import Image from "next/image";
import { Button } from "@/components/ui/button";
import Programs from "@/app/Sections/Programs";
import Practioners from "../Sections/Practioners";
import Testimonials from "../Sections/Testimonials";
import HeroBGImg from "@/public/HomepageHeroGradient.svg";
import Brandshowcase from "../Sections/Brandshowcase";
import Newsletter from "../Sections/Newsletter";
import Companies from "../Sections/Companies";
import Timeline from "../Sections/Timeline";
import PPrograms from "./components/PPrograms";
import gradient from "../../assets/gradient.png"
import circle from "../../assets/circle.png"
import BrandScroll from "../components/BrandScroll";

export default function Homepage() {
  return (
    <>
      <div className="relative py-16">

        {/* <Image
            src={HeroBGImg}
            alt="Hero Image"
            className= "absolute -top-4 -left-80"
            unoptimized
          ></Image> */}
        <Image
          src={gradient}
          alt="Gradient"
          width={128}
          height={128}
          className="w-[20%] h-full absolute inset-0 z-[1]"
          unoptimized
        ></Image>
        <div className="relative max-w-screen-xl mx-auto lg:px-36  z-10 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Make Your Growth <span className=" text-[#3ACBBC]"> 100x </span> More From It is
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
          <button
            type="button"
            className=" bg-[#242A3B] mb-[7%] text-[#3ACBBC] text-base font-semibold px-8 py-2.5 rounded-sm transition duration-300 ease-in-out shadow-explore hover:shadow-xl"
          >
            Explore Courses -{">"}
          </button>

          <div className="flex gap-3 flex-col md:flex-row p-10 md:justify-around">
            <div className=" relative lg:w-1/6 md:w-1/4 flex items-center gap-1">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-1/2 hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="font-bold text-3xl">
                23+
              </div>
              <div className="text-base">
                Years Of Experience
              </div>
            </div>
            <div className="relative lg:w-1/6 md:w-1/4 flex items-center gap-3">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-[69%] hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="text-[#3ACBBC] font-bold text-5xl">
                300%
              </div>
              <div className="text-base">
                Years Of Experience
              </div>
            </div><div className="relative lg:w-1/6 md:w-1/4 flex items-center gap-1">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-1/2 hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="font-bold text-3xl">
                23+
              </div>
              <div className="text-base">
                Years Of Experience
              </div>
            </div>
          </div>

        </div>
      </div>
      <BrandScroll></BrandScroll>

      <PPrograms />
      <Programs />
      <Practioners></Practioners>
      <Timeline></Timeline>
      <Testimonials></Testimonials>
      <Brandshowcase></Brandshowcase>
      <Newsletter></Newsletter>
      <Companies></Companies>
    </>
  );
}
