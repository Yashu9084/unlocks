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
        
        <div className="relative max-w-screen-xl mx-auto lg:px-36  z-10 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Give A Super Boost To Your Education 🚀
          </h1>
          <p className="md:max-w-[70%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
          <button
            type="button"
            className="bg-[#3ACBBC] hover:bg-[#3ACBBC] text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Start fundraising -{">"}
          </button>
          <button
            type="button"
            className="mt-4 md:mt-0 bg-[transparent] underline text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out"
          >
            Apply for access -{">"}
          </button>
          <div className="aspect-w-16 aspect-h-9 mx-auto flex justify-center mt-10 h-[70vh]">
            <iframe
              src="https://www.youtube.com/embed/r9jwGansp1E"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

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
