'use client'
import React from 'react'
import Image from 'next/image'
import cart from '@/public/images/home/growth/cart.png'
import chemical_free from "@/public/images/home/growth/pic11.png";
import credit_access from "@/public/images/home/growth/pic22.png";
import fair_trade from "@/public/images/home/growth/pic33.png";
// import chemical_free from "@/public/images/home/growth/chemical_free.png";
// import credit_access from "@/public/images/home/growth/credit_access.png";
// import fair_trade from "@/public/images/home/growth/fair_trade.png";
import leaves from "@/public/images/home/growth/leaves.png";
import mockup from "@/public/images/home/growth/mockup1.png";
import rupees from "@/public/images/home/growth/rupees.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const growthData = [
  {
    image: chemical_free,
    icon: leaves,
    title: "Environmental Stewardship",
    leftText:
      "Transitioning thousands of acres to chemical-free, organic farming practices.",
    rightText:
      'Utilizing solar-powered "Shuddh" units with 100% byproduct upcycling.',
  },

  {
    image: credit_access,
    icon: rupees,
    title: "Economic Empowerment",
    leftText:
      "Facilitating credit access for small-hold farmers through our banking partnerships.",
    rightText:
      "Increasing average farmer household income by 35% through middleman elimination.",
  },

  {
    image: fair_trade,
    icon: cart,
    title: "Future-Proofing",
    leftText:
      'Using the "Setu" platform to ensure 100% traceability from farm to fork.',
    rightText:
      "Ensuring fair-trade practices that exceed global compliance standards.",
  },
];
const GrowthSec = () => {

useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".growthSec",
      start:"top top",
      end:"+=400%",
      scrub:4,
      // markers:true,
      pin:true,
    }
  })

  tl.to(".growthHeading", {
    opacity:1,
    duration:1,
    ease:"power2.out",
  });

  tl.to(".mobileImg",{
    x:"-=100%",
    duration:1,
    ease:"power2.out",
  },'a')

  tl.to(
    ".mobileText",
    {
      x: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "a",
  );

  tl.to(
    ".leftText",
    {
      y: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "a",
  );

  tl.to(
    ".rightText",
    {
      y: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "a",
  );

  tl.to(".mobileImg", {
    x: "-=100%",
    duration: 1,
    ease: "power2.out",
  },'b');

  tl.to(
    ".mobileText",
    {
      x: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "b",
  );

  tl.to(
    ".leftText",
    {
      y: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "b",
  );

  tl.to(
    ".rightText",
    {
      y: "-=100%",
      duration: 1,
      ease: "power2.out",
    },
    "b",
  );

  tl.to(".growthHeading", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });

},[])


  return (
    <div className="  growthSec w-screen h-screen bg-background  flex justify-center items-center  ">
      <div className="container flex flex-col justify-center items-center p-10">
        {/* Growth Section Heading */}
        <div className="growthHeading flex flex-col gap-0 justify-center items-center mb-14 ">
          <h2 className="text-4xl font-bold heading text-secondary-green">
            Growth with Purpose
          </h2>
          <h3 className="text-4xl font-extralight lightText text-secondary-green">
            Beyond the balance sheet, we are engineering a sustainable future
            for rural India.
          </h3>
        </div>

        {/* Growth Section Content */}
        <div className="growthContent flex flex-row gap-2 justify-between items-center  text-secondary-green relative w-full h-full ">
          {/* Left Side */}
          <div className="lightTextCon relative flex flex-col w-80 h-30  items-start justify-start  overflow-hidden ">
            <div className="absolute top-0 left-0 w-full h-full z-60  bg-linear-to-b from-background via-transparent to-background " />
            {growthData.map((e, i) => {
              return (
                <h4
                  className=" leftText w-full h-full shrink-0 flex justify-center items-center "
                  key={i}
                >
                  {e.leftText}
                </h4>
              );
            })}
          </div>

          {/* middel section  */}
          <div className="flex flex-col w-52 gap-2 h-auto">
            <div className="flex flex-row w-full h-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full z-60  bg-linear-to-r from-background via-20% via-transparent to-160% to-background " />
              {growthData.map((e, i) => {
                return (
                  <h3
                    className="mobileText shrink-0 w-full text-center text-2xl font-bold font-secondary "
                    key={i}
                  >
                    {e.title}
                  </h3>
                );
              })}
            </div>
            <div className="mobileCon w-full h-auto">
              <div className="relative w-full   rounded-[1.9rem] overflow-hidden">
                <Image
                  src={mockup}
                  alt=""
                  className="relative object-cover w-full object-center z-50"
                  width={100}
                  height={100}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-row z-40">
                  {growthData.map((e, i) => {
                    return (
                      <Image
                        key={i}
                        src={e.image}
                        alt=""
                        className="mobileImg   relative object-cover w-full h-full object-center z-40"
                        width={100}
                        height={100}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rightTextCon relative flex flex-col w-80 h-30  items-start justify-start overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-60  bg-linear-to-b from-background via-transparent to-background " />
            {growthData.map((e, i) => {
              return (
                <h4
                  className="rightText w-full h-full shrink-0 flex justify-center items-center text-end "
                  key={i}
                >
                  {e.rightText}
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthSec