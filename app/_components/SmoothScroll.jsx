"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 10,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: .9,
      // touchMultiplier: 2,
      // normalizeWheel: false,
      // syncTouch: false,
      // syncTouchLerp: 0.07,
      // smoothTouch: false,
      // smoothTouchLerp: 0.07,
      // touchInertia: 0,
      // infinite: true,

      
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
gsap.ticker.add(time => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

      // requestAnimationFrame(raf);
    }
    lenis.on("scroll", ScrollTrigger.update);

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
