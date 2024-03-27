import React from "react";
import Image from "next/image";
import google from "@/public/google.png";
const BrandScroll = () => {
  return (
      
      <div 
       x-data="{}"
       x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
       className="mt-5 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          <li>
            <Image
              src={google}
              alt="Hero Image"
              width={128}
              height={128}
              className="w-28 h-10"
            ></Image>
          </li>
          
        </ul>
      </div>
  
  );
};

export default BrandScroll;
