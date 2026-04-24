"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TheRoadGsap = ({ children }) => {
  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2MultiCon",
        start: "top top",
        end: "+=400%",
        scrub: 5,
        pin: true,
        // markers: true,
      },
    });

    //  first line section
    tl2.from(".sec2Line1", {
      width: "0%",
    });
    tl2.from(
      ".sec2Circle1",
      {
        transform: "scale(0)",
      },
      "a",
    );

    tl2.from(
      ".sec1lowertextTitle1",
      {
        y: "20vh",
        opacity: 0,
      },
      "a",
    );

    tl2.from(
      ".sec1lowerTextDesc1",
      {
        y: "50vh",
        opacity: 0,
      },
      "a",
    );

    tl2.from(".sec2CircleWhite1", {
      transform: "scale(0)",
    });

    // second line section

    tl2.from(".sec2Line2", {
      width: "0%",
    });
    tl2.from(
      ".sec2Circle2",
      {
        transform: "scale(0)",
      },
      "b",
    );

    tl2.from(
      ".sec1lowertextTitle2",
      {
        y: "20vh",
        opacity: 0,
      },
      "b",
    );

    tl2.from(
      ".sec1lowerTextDesc2",
      {
        y: "50vh",
        opacity: 0,
      },
      "b",
    );

    tl2.from(".sec2CircleWhite2", {
      transform: "scale(0)",
    });

    // third line section
    tl2.from(".sec2Line3", {
      width: "0%",
    });
    tl2.from(
      ".sec2Circle3",
      {
        transform: "scale(0)",
      },
      "c",
    );

    tl2.from(
      ".sec1lowertextTitle3",
      {
        y: "20vh",
        opacity: 0,
      },
      "c",
    );

    tl2.from(
      ".sec1lowerTextDesc3",
      {
        y: "50vh",
        opacity: 0,
      },
      "c",
    );

    tl2.from(".sec2CircleWhite3", {
      transform: "scale(0)",
    });

    tl2.to(
      ".sec2LowerCon",
      {
        x: "-40vw",
      },
      "e",
    );

    // fourth line section

    tl2.from(
      ".sec2Line4",
      {
        width: "0%",
      },
      "e",
    );

    tl2.from(
      ".sec2Circle4",
      {
        transform: "scale(0)",
      },
      "d",
    );

    tl2.from(
      ".sec1lowertextTitle4",
      {
        y: "20vh",
        opacity: 0,
      },
      "d",
    );

    tl2.from(
      ".sec1lowerTextDesc4",
      {
        y: "50vh",
        opacity: 0,
      },
      "d",
    );

    tl2.from(".sec2CircleWhite4", {
      transform: "scale(0)",
    });

    tl2.to(".sec2MultiTitle", {
      y: 0,
    });

    tl2.to(".theRoadHeading", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.5,
      // delay:.5,
    });
  });

  return <>{children}</>;
};

export default TheRoadGsap;
