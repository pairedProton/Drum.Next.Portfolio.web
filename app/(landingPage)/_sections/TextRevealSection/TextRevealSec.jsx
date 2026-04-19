"use client";

import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TextRevealSec = () => {
  const textRef = useRef(null);
  const textSplitter = () => {
    var h1text = textRef.current.textContent;
    var h1textSplit = h1text.split("");
    var clut = "";
    h1textSplit.forEach(e2 => {
       clut += `<span>${e2}</span>`;
    });
    textRef.current.innerHTML = clut;
  };

  useGSAP(() => {
    textSplitter();

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".textRevealSec",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        //    markers: true,
      },
    });

    tl1.from(".textRevealSec h3 span", {
      opacity: 0.1,
      // y: "100vh",
      stagger: 0.1,
    });

    tl1.to(".textRevealSec", {
      opacity: 1,
    });
  }, []);

  return (
    <div className="textRevealSec w-full h-screen bg-linear-to-r from-primary-green to-secondary-green  flex justify-center items-center">
      <h3 ref={textRef} className="text-3xl font-semibold w-250 text-center ">
        India’s agricultural sector is currently defined by a{" "}
        <span className="text-4xl font-bold">$50B</span> efficiency gap.
        Traditional models are broken by multi-layered middlemen and massive
        post-harvest loss. Spectrum closes this gap by owning the logic of the
        entire value chain.
      </h3>
    </div>
  );
};

export default TextRevealSec;
