'use client'
import React from "react";
import Image from "next/image";
// import HeroSectionImage from '/images/hero/herobanner1.png'
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);


const heroPictureData = [
  {
    imageUrl: "/images/home/hero/herobanner3.png",
    zIndex: 50,
    top:"-16px",
    left:"24px",
    opacity: 1,
    height:"90%"
    
  },
  {
    imageUrl: "/images/home/hero/herobanner2.png",
    zIndex: 40,
    top:"-8px",
    left:"36px",
    opacity: 1,
    height:"80%"
    
  },
  {
    imageUrl: "/images/home/hero/herobanner1.png",
    zIndex: 30,
    top:"0px",
    left:"46px",
    opacity: 0,
    height:"70%"
    
  },

];


const HeroSection = () => {

const cardRefs = useRef([]);

const heroBgRef = useRef(null);

// useGSAP(() => {
//   const [card1, card2, card3] = cardRefs.current;

//   const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//   tl.to(card1, {
//     opacity: 0,
//     duration: 0.5,
//   })

//     // Move card2 → position of card1
//     .to(
//       card2,
//       {
//         top: heroPictureData[0].top,
//         left: heroPictureData[0].left,
//         height: heroPictureData[0].height,
//         zIndex: heroPictureData[0].zIndex,
//         duration: 0.6,
//       },
//       "<",
//     )

//     // Move card3 → position of card2
//     .to(
//       card3,
//       {
//         top: heroPictureData[1].top,
//         left: heroPictureData[1].left,
//         height: heroPictureData[1].height,
//         zIndex: heroPictureData[1].zIndex,
//         opacity: 1,
//         duration: 0.6,
//       },
//       "<",
//     )

//     // RESET positions instantly (loop illusion)
//     .call(() => {
//       // rotate array visually
//       cardRefs.current.push(cardRefs.current.shift());

//       // reset styles
//       cardRefs.current.forEach((card, i) => {
//         gsap.set(card, {
//           top: heroPictureData[i].top,
//           left: heroPictureData[i].left,
//           height: heroPictureData[i].height,
//           zIndex: heroPictureData[i].zIndex,
//           opacity: i === 2 ? 0 : 1,
//         });
//       });
//     });
// }, []);

useGSAP(()=>{
  const [card1,card2,card3] = cardRefs.current;

  const timePeriod = 2;
  const delayTime = 5;
   const tl = gsap.timeline({ repeat: -1});


   // first shuffle card 1 removed
// tl.to(card1,{
//   position:"fixed",
//   width:"100%",
//   height:"100%",
//   top:"0",
//   left:"0",
//   borderRadius:"0",
//   border:"none",
//   ease:"power1.out",
//   duration:1
//   ,delay:delayTime
// })

// tl.to(heroBgRef.current,{
//   backgroundImage: `url(${heroPictureData[1].imageUrl})`,
//   duration: timePeriod,
//   delay: delayTime
// })


   tl.to(card1,{
    opacity:0,
    ease:"power1.out",
    duration:1
    ,delay:delayTime
   },'a')



   tl.to(card2,{
    top:heroPictureData[0].top,
    left:heroPictureData[0].left,
    height:heroPictureData[0].height,
    zIndex:heroPictureData[0].zIndex,
    duration:timePeriod
    ,delay:delayTime
   },"a")

   tl.to(card3,{
    
    top:heroPictureData[1].top,
    left:heroPictureData[1].left,
    height:heroPictureData[1].height,
    zIndex:heroPictureData[1].zIndex,
    opacity:1,
    duration:timePeriod
    ,delay:delayTime
   },"a")

   tl.to(card1,{
    top:heroPictureData[2].top,
    left:heroPictureData[2].left,
    height:heroPictureData[2].height,
    zIndex:heroPictureData[2].zIndex,
    // opacity:0,
    duration:.5
    ,delay:delayTime
   },'a')



   

   // second shuffle card 2 removed
   tl.to(card2,{
    opacity:0,
    ease:"power1.out",
    duration:1
    ,delay:delayTime
   },"b")

   tl.to(card3,{
    
    top:heroPictureData[0].top,
    left:heroPictureData[0].left,
    height:heroPictureData[0].height,
    zIndex:heroPictureData[0].zIndex,
    opacity:1,
    duration:timePeriod
    ,delay:delayTime
   },"b")

   tl.to(card1,{
    top:heroPictureData[1].top,
    left:heroPictureData[1].left,
    height:heroPictureData[1].height,
    zIndex:heroPictureData[1].zIndex,
    opacity:1,
    duration:timePeriod
    ,delay:delayTime
   },'b')

   tl.to(card2,{
    
    top:heroPictureData[2].top,
    left:heroPictureData[2].left,
    height:heroPictureData[2].height,
    zIndex:heroPictureData[2].zIndex,
    // opacity:0,
    duration:.5
    ,delay:delayTime
   },'b')

  //  third shuffle card 3 removed
   tl.to(card3,{
    opacity:0,
    ease:"power1.out",
    duration:1
    ,delay:delayTime
   },"c")

   tl.to(card1,{
    top:heroPictureData[0].top,
    left:heroPictureData[0].left,
    height:heroPictureData[0].height,
    zIndex:heroPictureData[0].zIndex,
    opacity:1,
    duration:timePeriod
    ,delay:delayTime
   },"c")

   tl.to(card2,{
    top:heroPictureData[1].top,
    left:heroPictureData[1].left,
    height:heroPictureData[1].height,
    zIndex:heroPictureData[1].zIndex,
    opacity:1,
    duration:timePeriod
    ,delay:delayTime
   },"c")

   tl.to(
     card3,
     {
       top: heroPictureData[2].top,
       left: heroPictureData[2].left,
       height: heroPictureData[2].height,
       zIndex: heroPictureData[2].zIndex,
       // opacity: 0,
       duration:.5
       ,delay:delayTime
     },
     "c",
   );


   
   
},[])


  return (
    <div ref={heroBgRef}
      className=" heroSectionBg w-full h-screen relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${heroPictureData[2].imageUrl})` }}
    >
      {/* Hero Section text section */}

      <div className="absolute  w-200 h-60 top-18 flex flex-col py-4 px-6   gap-1">
        <div className="flex gap-2 ">
          <div className="text-7xl font-bold font-heading">Engineering</div>
          <div className="flex flex-col items-start gap-0 justify-end">
            <h4 className=" text-2xl  -mb-2">The New Standard for</h4>
            <h4 className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-r from-white from-60% to-secondary-green leading-10 -mb-1">
              Indian Agriculture
            </h4>
          </div>
        </div>
        <div className="flex justify-start items-center gap-1 ">
          <div className="w-6 h-px bg-white" />
          <div className="w-1/2 text-base font-semibold font-heading">
            Predictable Yield
          </div>
        </div>
      </div>

      {/* Hero Section carousel section */}
      <div className="absolute  w-200 h-70 bottom-0  flex flex-col py-4 pt-10 px-6  gap-1">
        {/* Hero Section carousel*/}
        <div className="w-96 h-50 rounded-2xl  relative flex justify-end  items-end p-0">
        <div className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl backdrop-blur-lg "></div>
          {/* {heroPictureData.map((e,i)=>{
            return (
              <div key={i}
                className={` heroImg${i+1} absolute  w-40 rounded-2xl border-2 border-white bg-[url('/images/home/hero/herobanner3.png')] bg-no-repeat bg-cover bg-center`}
                style={{
                  backgroundImage: `url(${e.imageUrl})`,
                  zIndex: e.zIndex,
                  opacity: e.opacity,
                  top: e.top,
                  left: e.left,
                  height: e.height,
                }}
              ></div>
            );
          })} */}
          {heroPictureData.map((e, i) => {
            return (
              <div
                key={i}
                ref={el => (cardRefs.current[i] = el)}
                className="absolute w-40 rounded-2xl border-2 border-white bg-cover bg-center"
                style={{
                  backgroundImage: `url(${e.imageUrl})`,
                  zIndex: e.zIndex,
                  opacity: e.opacity,
                  top: e.top,
                  left: e.left,
                  height: e.height,
                }}
              />
            );
          })}

          <h4 className=" relative z-10 w-40 text-2xl font-heading font-semibold pb-11 text-right pr-5 leading-6  ">
            Controlled Supply
          </h4>
          <div className="absolute top-4 right-4 rounded-full w-10 aspect-square bg-white/80 flex justify-center items-center ">
            <GoArrowUpRight className="text-xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
