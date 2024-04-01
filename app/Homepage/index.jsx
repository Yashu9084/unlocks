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
import cardimg from "../../assets/CardImg.png";
import edimg from "../../assets/edimg.png";
import Experience from "../Sections/Experience";
import CustomImage from "../Sections/CustomImage";

export default function Homepage() {
  return (
    <>
      <div className="max-w-[100rem] relative py-16 overflow-hidden">
        <div className="absolute -top-96 -left-24 w-full h-full pointer-events-none">
          <svg
            width="2273"
            height="2324"
            viewBox="0 0 2273 2324"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_326_61)">
              <g clip-path="url(#clip0_326_61)">
                <g filter="url(#filter1_f_326_61)">
                  <ellipse
                    cx="1799"
                    cy="1077"
                    rx="470"
                    ry="639"
                    fill="#2C00D9"
                  />
                </g>
                <g filter="url(#filter2_f_326_61)">
                  <ellipse
                    cx="1220.5"
                    cy="1112.16"
                    rx="764.521"
                    ry="308.275"
                    transform="rotate(9.05178 1220.5 1112.16)"
                    fill="#FF0099"
                  />
                </g>
                <g filter="url(#filter3_f_326_61)">
                  <ellipse
                    cx="200"
                    cy="1227"
                    rx="572"
                    ry="489"
                    fill="#FF9900"
                  />
                </g>
                <g filter="url(#filter4_f_326_61)">
                  <ellipse
                    cx="1640.12"
                    cy="1064.2"
                    rx="308"
                    ry="203"
                    transform="rotate(27.7951 1640.12 1064.2)"
                    fill="#00FFFF"
                  />
                </g>
                <g filter="url(#filter5_f_326_61)">
                  <ellipse
                    cx="1136.43"
                    cy="1201.19"
                    rx="492.324"
                    ry="202"
                    transform="rotate(-2.20285 1136.43 1201.19)"
                    fill="#FFF4F5"
                  />
                </g>
                <g filter="url(#filter6_f_326_61)">
                  <ellipse
                    cx="217.431"
                    cy="652.29"
                    rx="139"
                    ry="352.216"
                    transform="rotate(-24.0408 217.431 652.29)"
                    fill="#AB4700"
                  />
                </g>
              </g>
              <rect
                x="200.5"
                y="200.5"
                width="1872"
                height="1923"
                stroke="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_326_61"
                x="0"
                y="0"
                width="2273"
                height="2324"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter1_f_326_61"
                x="929"
                y="38"
                width="1740"
                height="2078"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="200"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter2_f_326_61"
                x="163.916"
                y="484.733"
                width="2113.17"
                height="1254.85"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter3_f_326_61"
                x="-672"
                y="438"
                width="1744"
                height="1578"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter4_f_326_61"
                x="1101.61"
                y="584.245"
                width="1077.04"
                height="959.913"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="125"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter5_f_326_61"
                x="494.41"
                y="848.439"
                width="1284.04"
                height="705.499"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="75"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <filter
                id="filter6_f_326_61"
                x="-274.152"
                y="25.626"
                width="983.166"
                height="1253.33"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_326_61"
                />
              </filter>
              <clipPath id="clip0_326_61">
                <rect x="200" y="200" width="1873" height="1924" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

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
          <div className="relative aspect-w-16 aspect-h-9 mx-auto flex justify-center mt-10 h-[70vh] shadow-new ">
            <div className="absolute top-24 -left-28 ">
              <CustomImage></CustomImage>
            </div>
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
      <Experience></Experience>
      <Brandshowcase></Brandshowcase>
      <Newsletter></Newsletter>
      <Companies></Companies>
    </>
  );
}
