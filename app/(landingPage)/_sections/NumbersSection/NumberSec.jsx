"use client";

import React, { useRef } from "react";
import "./NumberStyle.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import specLightLogo from '@/public/images/home/numbers/spec_logo.png'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: "12+", label: "District Transformed" },
  { value: "₹ 21 Crore+", label: "Injected into Rural Economies" },
  { value: "0%", label: "Chemical Usage across managed lands" },
  { value: "100%", label: "Gender-inclusive hiring" },
];

const NumberSec = () => {
  const cubeRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cube = cubeRef.current;
    const faces = gsap.utils.toArray(".cube-face");

    // Main rotation timeline — rotates the cube 270° (3 turns to show all 4 faces)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%",
        scrub:3 ,
        pin: true,
      },
    });

    tl.to(cube, {
      rotateY: 90,
      ease: "power2.inOut",
      duration: 3,
    });
    tl.to(cube, {
      rotateY: 180,
      ease: "power2.inOut",
      duration: 3,
    });
    tl.to(cube, {
      rotateY: 270,
      ease: "power2.inOut",
      duration: 3,
    });

    tl.to(cube, {
      opacity:1,
      ease: "power2.inOut",
      duration: 3,
    });

    // Opacity control — hide faces that are behind
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=300%",
      scrub: 1,
      onUpdate: () => {
        const rawRotation = gsap.getProperty(cube, "rotateY");
        // Normalize to 0–360
        const rotation = ((rawRotation % 360) + 360) % 360;

        // faces.forEach((face, i) => {

        //   const faceAngle = i * 90;
        //   // Calculate shortest angular distance
        //   let diff = Math.abs(rotation - faceAngle);
        //   if (diff > 180) diff = 360 - diff;

        //   // Front face (diff ~0) = full opacity
        //   // Side faces (diff ~90) = partial opacity
        //   // Back face (diff ~180) = hidden
        //   // if (diff <= 90) {
        //   //   gsap.set(face, { opacity: 1 - diff / 120 });
        //   // } else {
        //   //   gsap.set(face, { opacity: 0 });
        //   // }
        // });


        faces.forEach(face => {
          const faceClass = face.classList;

          let baseRotY = 0;

          if (faceClass.contains("cube-face--front")) {
            baseRotY = 0;
          } else if (faceClass.contains("cube-face--right")) {
            baseRotY = 90;
          } else if (faceClass.contains("cube-face--back")) {
            baseRotY = 180;
          } else if (faceClass.contains("cube-face--left")) {
            baseRotY = -90;
          }

          let relativeY = (rotation + baseRotY) % 360;

          if (relativeY < 0) relativeY += 360;

          face.style.opacity = relativeY > 89 && relativeY < 271 ? "0" : "1";
        });
      },

    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative cube-section  w-full min-h-screen bg-linear-to-r from-primary-green to-secondary-green  flex justify-center items-center  overflow-hidden "
    >

      <div className='absolute bottom-0 right-0  w-100 h-100  translate-x-1/2 opacity-20  ' >
        <Image src={specLightLogo} alt='spectrum' width={1000} height={1000} className='w-full h-full object-center object-cover' />
      </div>
      <div className="cube-viewport w-full h-full flex items-center justify-center">
        <div className="cube-perspective perspective-distant w-125 h-100">
          <div
            ref={cubeRef}
            className="cube relative w-full h-full transform-3d will-change-transform flex justify-center items-center"
          >
            {statsData.map((stat, i) => {
              const faceClass = ["front", "right", "back", "left"][i];
              return (
                <div
                  key={i}
                  className={`cube-face backface-hidden cube-face--${faceClass} absolute  flex flex-col justify-center items-center text-center gap-1`}
                >
                  <span className="cube-face__value font-black font-body text-7xl">
                    {stat.value}
                  </span>
                  <div className="w-[80%] h-px opacity-50 bg-white rounded-full  " />
                  <span className="cube-face__label  w-80 font-secondary font-extralight text-lg ">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberSec;
