"use client"

import React from 'react'
import Image from 'next/image'
import marker from "@/public/images/home/our_impact/map_marker.png"
import rupee from "@/public/images/home/our_impact/rupee.png"
import tracktor from "@/public/images/home/our_impact/tracktor.png"
import OurImpactCard from './OurImpactCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ourImpactCardData = [
  {
    image: tracktor,
    title: "11,000+",
    subTitle: "Integrated Farmers",
    description: [
      "Supply Certainty : ",
      "This isn't just a list of names; it's a managed network following our \"Krishi\" protocols to ensure consistent quality and volume.",
    ],
  },
  {
    image: marker,
    title: "12+",
    subTitle: "Districts Covered",
    description: [
      "Regional Diversified Risk : ",
      "Our footprint across multiple districts protects our supply chain from localized weather or soil issues.",
    ],
  },
  {
    image: rupee,
    title: "100%",
    subTitle: "Direct Sourcing",
    description: [
      "Margin Capture : ",
      "We bypass traditional Mandi systems entirely, securing the best price for the farmer and the highest margin for the enterprise.",
    ],
  },
];

const OurImpactSec = () => {


  useGSAP(() => {
    gsap.from(".ourImpactCard", {
      // opacity: 0,
      y: "100vh",
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".ourImpactSec",
        start: "top top",
        end: "+=150%",
        scrub: 4,
        pin: true,
        // markers: true,
      },
    });

    // tl.to(".ourImpactHeading", {
    //   opacity: 1,
    //   ease: "power1.inOut",
    //   duration: 0.2,
    //   // delay:.5,
    // });
  }, [])

  return (
    <div className="  ourImpactSec w-full h-screen bg-background  flex justify-center items-center  ">
      <div className="container flex flex-col justify-center items-center p-10">
        {/* Our Impact Section Heading */}
        <div className="ourImpactHeading flex flex-col gap-0 justify-center items-center mb-14 ">
          <h2 className="text-4xl font-bold heading text-secondary-green">Our Impact at Scale</h2>
          <h3 className="text-4xl font-extralight lightText text-secondary-green">
            Building a resilient agricultural ecosystem through direct sourcing and strategic infrastructure.
          </h3>
        </div>

        {/* Our Impact Section Content */}
       <section className='ourImpactCardSection  flex justify-center items-center gap-4' >
        {
          ourImpactCardData.map((item, index) => (
            <OurImpactCard key={index} item={item} />
          ))
        }
       </section>
      </div>
    </div>
  );
}

export default OurImpactSec