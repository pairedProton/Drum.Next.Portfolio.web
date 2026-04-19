import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Sec5Gsap = ({ children }) => {
  useGSAP(() => {
    // Check if screen matches lg breakpoint (typically 1024px and above)

    const t5a = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec5Con",
        start: "top bottom",
        end: "top top",
        // pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    t5a.to(".sec5Con", {
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
          trigger: ".sec5Con",
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 3,
          // markers: true,
        },
      });

      t5b.to(".sec5boxes1", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      });
      t5b.to(".sec5boxes2", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      });
      t5b.to(".sec5boxes3", {
        y: "-=100%",
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      });

      t5b.to(".sec5Title", {
        y: 0,
        ease: "power1.inOut",
        duration: 0.5,
        // delay:.5,
      });

      // Clean up ScrollTrigger when screen size changes
      mediaQuery.onchange = e => {
        if (!e.matches) {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
      };
    }
  });

  return <>{children}</>;
};

export default Sec5Gsap;
