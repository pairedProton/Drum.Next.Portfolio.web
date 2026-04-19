"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LetsGsap = ({children}) => {
 useGSAP(() => {
   const tl1 = gsap.timeline({
     scrollTrigger: {
       trigger: ".letsUnderstandSec",
       start: "top top",
       end: "+=600%",
       pin: true,
       scrub: 1,
    //    markers: true,
     },
   });

   tl1.from(".letSecCard1", {
     y: "100vh",
     opacity: 0,
     ease: "power3.inOut",
   });

   tl1.from(
     ".letSecCard2",
     {
       y: "100vh",
       ease: "power3.inOut",
     },
     "a",
   );

   tl1.to(
     ".letSecCard1",
     {
       transform: "scale(0.9) translateY(-12%)",

       ease: "power3.inOut",
     },
     "a",
   );

   tl1.from(
     ".letSecCard3",
     {
       y: "100vh",

       ease: "power3.inOut",
     },
     "b",
   );

   tl1.to(
     ".letSecCard2",
     {
       transform: "scale(0.9)  translateY(-12%)",
       ease: "power3.inOut",
     },
     "b",
   );

   tl1.to(
     ".letSecCard1",
     {
       transform: "scale(0.8) translateY(-26%)",
       ease: "power3.inOut",
     },
     "b",
   );
 });

 return <>{children}</>;
}

export default LetsGsap;