'use client'

import React from 'react'
import MilestoneCard from './MilestoneCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);


const milestonesData = [
  {
    title:"500+",
    subTitle:"SKU Portfolio"
  },
  {
    title:"100+",
    subTitle:"Carbon Neutral Operations"
  },
  {
    title:"250,000+",
    subTitle:"Integrated Farmers"
  }
  
]


const MilestonesSec = () => {

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".milestonesSec",
      start: "top top",
      end: "+=200%",
      scrub: 4,
      pin: true,
      // markers: true,
      
    },
  });

  tl.to(".milestoneCard", {
    x: "-=100%",
    // duration: 1,
    ease: "power3.inOut",
  });

  tl.to(".milestoneCard", {
    x: "-=100%",
    // duration: 1,
    ease: "power3.inOut",
  });




}, []);


  return (
    <div className="  milestonesSec w-full h-screen bg-background  flex  justify-center items-center  ">
      <div className="container flex flex-row justify-center items-center p-10  gap-12">
        {/* Our Impact Section Heading */}
        <header className="milestonesHeading">
          <h2 className="text-4xl font-bold heading text-secondary-green">
            Milestones for 2030
          </h2>
        </header>
        <section className="milestonesContent relative flex flex-row justify-start items-start w-[40%]  overflow-hidden">
          <div className="absolute w-full h-full z-10  bg-linear-to-r from-background from-0% via-35% via-transparent to-130% to-background "></div>
          {milestonesData.map((item, index) => (
            <MilestoneCard key={index} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default MilestonesSec