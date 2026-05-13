'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import ceo from '@/public/images/home/vision/ceo.svg'
import falcon from '@/public/images/home/vision/falcon1.png'
import ffm from '@/public/images/home/vision/ffm1.png'
import hdfc from '@/public/images/home/vision/hdfc2.png'
import hyper from '@/public/images/home/vision/hyper1.png'
import idfc from '@/public/images/home/vision/idfc1.png'
import kubota from '@/public/images/home/vision/kubota1.png'
import mani from '@/public/images/home/vision/mani1.png'
import marut from '@/public/images/home/vision/marut1.png'
import vioq from '@/public/images/home/vision/vioq1.png'
import Image from 'next/image'


const visionData = [
  {image: falcon},
  {image: ffm},
  {image: hdfc},
  {image: hyper},
  {image: idfc},
  {image: kubota},
  {image: mani},
  {image: marut},
  {image: vioq},
]

const TheVisionSec = () => {
  return (
    <div className="  theVisionSec w-full h-screen bg-linear-to-r from-primary-green to-secondary-green  flex justify-start items-start  ">
      <div className="container flex flex-col justify-start items-start p-10 w-full h-full">
        {/* The Vision Section Heading */}
        <div className="theVisionHeading flex flex-col gap-0 justify-start items-start mb-14 text-white">
          <h2 className=" font-bold heading ">The Vision to Scale</h2>
          <h3 className=" lightText ">
            Building the future of agriculture through strategic execution and
            institutional trust.
          </h3>
        </div>

        {/* The Vision Section Content */}
        <div className="theVisionContent flex flex-col gap-2 justify-center items-center  text-white relative pl-20 w-full h-full ">
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <Image
              src={ceo}
              alt="image"
              width={100}
              height={100}
              className="w-auto h-full object-cover object-center drop-shadow-2xl "
            />
          </div>
          <h4 className="theVisionMsgSec p-8 rounded-2xl text-lg font-semibold italic text-secondary-green  bg-white pl-[28%] text-start w-full">
            "My focus is not just on the soil, but on the system.
            <br />
            At Spectrum, we are building the industrial infrastructure that
            India’s agriculture has lacked for decades<br />—bringing efficiency,
            transparency, and scale to the forefront."
          </h4>

          <div className="theVisionCarouselSec flex flex-row gap-4 justify-start items-start w-full pl-[28%]">
            <div className="theVisionCarouselLeftSec w-[30%] flex flex-col gap-0.5 justify-start items-start ">
              <h5 className="text-lg font-semibold font-secondary">
                Validated by the Best
              </h5>
              <p className="font-secondary lightText ">
                We are proud to work with India’s leading institutions to
                deliver value at every level of the supply chain.
              </p>
            </div>
            <div className="theVisionCarouselRightSec w-[70%] relative mt-4">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
                loop={true}
                centeredSlides={true}
                modules={[Autoplay]}
                // onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
              >
                {visionData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item.image}
                      alt="image"
                      width={100}
                      height={100}
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheVisionSec