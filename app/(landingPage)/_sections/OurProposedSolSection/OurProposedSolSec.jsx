"use client"

import React from "react";
import Image from "next/image";
import eliminate from "@/public/images/home/our_proposed/eliminate.png";
import futureProof from "@/public/images/home/our_proposed/future_proof.png";
import zeroWaste from "@/public/images/home/our_proposed/zero_waste.png";
import OurProposedCard from "./OurProposedCard";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OurProposedSolSecData = [
  {
    id: 1,
    title: "Eliminate the middlemen",
    description: [
      "Unlike traditional players who buy from brokers, we integrate directly with the farm gate. This eliminates 15-20% of leakage and ensures 100% price and quality control.",
    ],
    image: eliminate,
  },
  {
    id: 2,
    title: "Zero-Waste, Multi-Stream ROI",
    description: [
      'We don’t just sell crops. Our model re-purposes agricultural by-products into high-value secondary assets (bio-energy, organic fertilizers), turning "waste" into a profit center.',
    ],
    image: futureProof,
  },
  {
    id: 3,
    title: "Future-Proofing the Harvest",
    description: [
      "By deploying regenerative protocols, we de-risk the supply chain against climate volatility, ensuring consistent yield when traditional farming fails.",
    ],
    image: zeroWaste,
  },
];

const OurProposedSolSec = () => {


  useGSAP(() => {
    // Check if screen matches lg breakpoint (typically 1024px and above)

    const t5a = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourProposedSec",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    t5a.to(".ourProposedSec", {
      borderRadius: "0",
      ease: "power1.inOut",
      duration: 0.5,
      // delay:.5,
    });

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Only create animations if on desktop
    if (mediaQuery.matches) {
      const t5b = gsap.timeline({
        scrollTrigger: {
          trigger: ".ourProposedSec",
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 3,
          // markers: true,
        },
      });

      t5b.to(".lapScreen2", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      },'a');
      t5b.to(".lapScreen3", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      },'a');

      t5b.to(".lapScreen3", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      });

      t5b.to(".ourProposedHeading", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.2,
        // delay:.5,
      });
      // t5b.to(".sec5boxes3", {
      //   y: "-=100%",
      //   ease: "power1.inOut",
      //   duration: 0.5,
      //   // delay:.5,
      // });

      // t5b.to(".sec5Title", {
      //   y: 0,
      //   ease: "power1.inOut",
      //   duration: 0.5,
      //   // delay:.5,
      // });

      // Clean up ScrollTrigger when screen size changes
      mediaQuery.onchange = e => {
        if (!e.matches) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    }
  });
  return (
    <section className=" ourProposedSec w-full h-screen flex justify-center items-center relative border-2 border-primary-green bg-background overflow-hidden rounded-t-[8rem]">
      <div className="container flex flex-col justify-center items-center p-10 gap-8">
        {/* Lets Understand Section Heading */}
        <header className=" flex flex-col gap-0 justify-center items-center mb-8 text-primary-green">
          <h2 className="font-bold heading">Our Proposed Solution</h2>
          <h3 className=" ourProposedHeading lightText">
            Turning Fragmentation into High -Margin Integration
          </h3>
        </header>

        {/* Our Proposed Solution Card Section */}
        <div className="w-full h-auto flex  flex-col justify-center items-center relative">
          {/* lapScreenSec */}
          <ul className="relative  w-230 h-100 flex flex-col justify-center items-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              {OurProposedSolSecData.map((card, index) => (
                <OurProposedCard key={index} card={card} index={index} />
              ))}
            </div>
          </ul>

          {/* lapScreenSecEnd */}
          <div className=" relative z-50 w-266 h-6 rounded-b-3xl bg-primary-green"></div>
        </div>
      </div>
    </section>
  );
};

export default OurProposedSolSec;
