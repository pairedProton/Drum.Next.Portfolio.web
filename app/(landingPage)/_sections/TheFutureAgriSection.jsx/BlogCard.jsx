import React from 'react'
import Image from 'next/image'
import pic1 from '@/public/images/home/gallery/pic1.jpg'
import Link from 'next/link'


const BlogCard = ({data}) => {
  return (
    <div className="card flex flex-col gap-2 bg-background rounded-2xl p-4 w-70 h-104 justify-start items-center  ">
               <h5 className="blogTag w-fit bg-primary-green text-center text-white px-4  text-sm py-0 rounded-full ">
                 {data?.tag}
               </h5>
               <div className="imageCon w-full h-40 rounded-xl overflow-hidden ">
                 <Image
                   src={data?.image}
                   alt="image"
                   width={100}
                   height={100}
                   className="w-full h-full object-cover object-center"
                 />
               </div>
               <h5 className="font-secondary font-light text-primary-green text-sm text-start w-full  ">
                 {data?.publishDate}
               </h5>
               <h5 className="font-secondary font-bold text-md text-primary-green text-start w-full -mt-1 leading-snug ">
                 {data?.title}
               </h5>
               <h6 className="font-secondary font-light text-sm text-primary-green text-start w-full -mt-1 leading-snug line-clamp-2">
                 {data?.desc}
               </h6>
               {/* <h6 className="font-secondary font-extralight text-sm text-primary-green text-start w-full -mt-1 my-auto">
                 10 mint read
               </h6> */}
               <div className="btnSec mt-auto flex justify-between items-center w-full ">
                 <Link href={`/blogs/${data?.slug}`} ><button className="blogTag w-fit bg-primary-green text-center text-white px-4  text-sm py-0 rounded-full border shadow-sm shadow-primary-green cursor-pointer hover:border-secondary-green hover:bg-secondary-green transition-all duration-300 ease-in-out font-secondary font-light ">
                   Read Article
                 </button></Link>
                 <h6 className="font-secondary font-extralight text-sm text-primary-green text-center ">
                   {data?.readingTime}
                 </h6>
               </div>
             </div>
  )
}

export default BlogCard