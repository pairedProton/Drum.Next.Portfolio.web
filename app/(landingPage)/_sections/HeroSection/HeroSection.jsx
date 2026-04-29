import React from "react";
import Image from "next/image";
// import HeroSectionImage from '/images/hero/herobanner1.png'
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="w-full h-screen relative bg-[url('/images/home/hero/herobanner4.png')] bg-no-repeat bg-cover bg-center ">
      {/* <Image
        src="/images/home/hero/herobanner1.png"
        alt="Hero Section Image"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      /> */}

      {/* Hero Section Content */}

      {/* Hero Section text section */}

      <div className="absolute  w-200 h-60 top-18 flex flex-col py-4 px-6   gap-1">
        <div className="flex gap-2 ">
          <div className="text-7xl font-bold font-heading">Engineering</div>
          <div className="flex flex-col items-start gap-0 justify-end">
            <h4 className=" text-2xl  -mb-2">The New Standard for</h4>
            <h4 className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-r from-white from-60% to-secondary-green leading-10 -mb-1">
              Indian Agriculture
            </h4>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1 ">
          <div className="w-6 h-px bg-white" />
          <div className="w-1/2 text-base font-semibold font-heading">
            Predictable Yield
          </div>
        </div>
      </div>

      {/* Hero Section carousel section */}
      <div className="absolute  w-200 h-70 bottom-0  flex flex-col py-4 pt-10 px-6  gap-1">
        {/* Hero Section carousel*/}
        <div className="w-96 h-50 rounded-2xl backdrop-blur-lg bg-white/10 relative flex justify-end items-end p-0">
          <div className="absolute -top-4 left-6 w-40  h-[90%] z-50 rounded-2xl border-2 border-white bg-[url('/images/home/hero/herobanner3.png')] bg-no-repeat bg-cover bg-center"></div>

          <div className="absolute -top-2 left-9 w-40 h-[80%] z-40 rounded-2xl border-2 border-white bg-[url('/images/home/hero/herobanner2.png')] bg-no-repeat bg-cover bg-center"></div>

          <div className="absolute top-0 left-11.5 w-40 h-[70%] z-30 rounded-2xl border-2 border-white bg-[url('/images/home/hero/herobanner1.png')] bg-no-repeat bg-cover bg-center"></div>

          <h4 className="w-40 text-2xl font-heading font-semibold pb-11 text-right pr-5 leading-6">Controlled Supply</h4>
          <div className="absolute top-4 right-4 rounded-full w-10 aspect-square bg-white/80 flex justify-center items-center ">
            <GoArrowUpRight className="text-xl text-black"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
