'use client'

import React from "react";
import Image from "next/image";
import krishi from "@/public/images/home/vertical-engine/krishi.png";
import setu from "@/public/images/home/vertical-engine/setu.png";
import shuddh from "@/public/images/home/vertical-engine/shudhh.png";
import vikas from "@/public/images/home/vertical-engine/vikas.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import The4VerticalCard from "./The4VerticalCard";

gsap.registerPlugin(ScrollTrigger);

const verticalEngineData = [
  {
    title: "Spectrum - Krishi",
    subTitle: "Precision Production",
    description: [
      "The Supply Shield : ",
      "We use smart farming to protect crops from weather and chemicals",
      "By standardizing how food is grown, we ensure a steady, predictable supply that isn't at the mercy of the climate.",
    ],
    image: krishi,
    tags: ["Smart farming", "Climate Resilient"],
  },

  {
    title: "Spectrum - Shuddh",
    subTitle: "Value Transformation",
    description: [
      "The Waste-Stopper : ",
      "We process crops right at the source.",
      "By cleaning and cooling harvest immediately, we stop the rot and lock in value before it can ever disappear.",
    ],
    image: shuddh,
    tags: ["Cold Storage", "Temperature Control"],
  },

  {
    title: "Spectrum - Setu",
    subTitle: "Digital & Logistical Integrity",
    description: [
      "The Direct Bridge : ",
      "We bypass the 5-7 layers of middlemen.",
      "Our tech-driven logistics move food directly from farm to market, keeping the profit that usually leaks into the hands of agents.",
    ],
    image: setu,
    tags: ["Digital connect", "Farm to Customer"],
  },

  {
    title: "Spectrum - Vikas",
    subTitle: "Systematic Scale",
    description: [
      "The Scale Engine : ",
      " We don't just fix one farm; we build a system.",
      "Vikas trains communities and integrates new tech to multiply our reach across thousands of new acres every year.",
    ],
    image: vikas,
    tags: ["Special Gene", "Resilient Crops"],
  },
];

const The4VerticalEngineSec = () => {

useGSAP(() => {

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".the4VerticalEngineSec",
    start: "top top",
    end: "+=400%",
    scrub: 4,
    pin: true,
  },
});

tl.to(".the4verticalCard", {
  x: "-=100%",
  // duration: 1,
  ease: "sine.inOut",
});
tl.to(".the4verticalCard", {
  x: "-=100%",
  // duration: 1,
  ease: "sine.inOut",
});
tl.to(".the4verticalCard", {
  x: "-=100%",
  // duration: 1,
  ease: "sine.inOut",
});

tl.to(".the4VerticalHeading", {
  opacity: 1,
  ease: "power1.inOut",
  duration: 0.2,
  // delay:.5,
});

}, []);





  return (
    <section className=" the4VerticalEngineSec w-full h-screen flex justify-center items-center relative text-white overflow-hidden ">
      <div className=" w-full h-full flex flex-col justify-center items-center  gap-8 ">
        {/* The 4 Vertical Engine Section Heading */}
        <header className="container flex flex-col gap-0 justify-center items-center mb-8 text-white ">
          <h2 className=" the4VerticalHeading font-bold heading">
            The 4 - Vertical Engine
          </h2>
          <h3 className="lightText w-180 text-center ">
            A closed - loop system designed to control quality, minimize waste,
            and maximize margin at every stage the lifecycle{" "}
          </h3>
        </header>

        {/*Lower Content */}
        <div className="the4verticalCardsContainer w-full h-auto flex flex-row ">
          {/* Card */}
          {verticalEngineData.map((item, index) => (
            <The4VerticalCard key={index} card={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default The4VerticalEngineSec;
