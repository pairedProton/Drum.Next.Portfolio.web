'use client'
import React from 'react'
import pic1 from '@/public/images/home/gallery/pic1.jpg'
import pic2 from '@/public/images/home/gallery/pic2.jpg'
import pic3 from '@/public/images/home/gallery/pic3.jpg'
import Image from 'next/image'
import BlogCard from './BlogCard'
import { GoArrowRight } from 'react-icons/go'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { blogData } from '../../../_data/blogs.js'
import Link from 'next/link'

const TheFutureAgriSec = () => {
  return (
    <section className=" flex BlogSec  w-full h-screen flex-col bg-linear-to-r from-primary-green to-secondary-green text-white justify-start items-start  ">
      <div className="container mx-auto flex flex-col gap-10 p-10 ">
        {/* heading section  */}
        <div className="BlogHeading flex flex-col gap-0 justify-center items-start   ">
          <h2 className=" font-bold heading text-white">
            The Future of Agri-Intelligence
          </h2>
          <h3 className=" lightText text-white w-[90%]">
            Expert analysis on supply chain innovation, sustainable farming, and
            the evolving landscape of Indian agriculture.
          </h3>
        </div>

        {/* Blog Content  */}
        <div className="w-full h-full flex gap-4 flex-col justify-center items-center  ">
          <div className="cardSection flex w-full gap-4 justify-center items-center ">
            <Swiper
              className=""
              spaceBetween={50}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              loop={true}
              // centeredSlides={true}
              modules={[Autoplay, Navigation]}
              navigation={true}
              // onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
            >
              {blogData?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className=" flex justify-start items-center !w-fit"
                >
                  <BlogCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Link href="/blogs">
            <button
              className={` group flex rounded-full gap-2 justify-center items-center text-primary-green bg-white shadow-lg px-4 py-2 cursor-pointer   shadow-black/60 font-semibold font-heading hover:bg-primary-green  transition-all duration-300 ease-in-out `}
            >
              <h3
                className={`text-md mt-0  -mb-1 text-primary-green group-hover:text-white `}
              >
                Read All Articles
              </h3>{" "}
              <GoArrowRight
                className={`text-lg text-primary-green font-extrabold group-hover:text-white `}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TheFutureAgriSec