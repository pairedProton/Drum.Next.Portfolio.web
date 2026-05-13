import React from 'react'
import whatsapp from '@/public/images/commons/wa.svg'
import instagram from '@/public/images/commons/insta.svg'
import linkedin from '@/public/images/commons/linkedin.svg'
import youtube from '@/public/images/commons/yt.svg'
import Image from 'next/image'
import spectrum from '@/public/images/commons/spec.png'
import Link from 'next/link'

export const footerData = {
  info: [
    {
      title: "Contact",
      details: process.env.PHONE_NUMBER,
    },
    {
      title: "Email",
      details: process.env.EMAIL,
    },
    {
      title: "Address",
      details:
        process.env.ADDRESS,
    },
  ],

  social: [
    {
      name: "WhatsApp",
      icon: whatsapp,
      link: `https://wa.me/${process.env.PHONE_NUMBER}`,
    },
    {
      name: "Instagram",
      icon: instagram,
      link: process.env.INSTA,
    },
    {
      name: "LinkedIn",
      icon: linkedin,
      link: process.env.LINKEDIN,
    },
    {
      name: "YouTube",
      icon: youtube,
      link: process.env.YOUTUBE,
    },
  ],
};


const Footer = () => {
  return (
    <div className="  footer  relative w-full h-screen bg-linear-to-r to-secondary-green from-primary-green  flex justify-center items-start ">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-center ">
        {/* <h2 className='text-[14rem] font-black font-body text-background' >SPECTRUM</h2> */}
        <Image
          src={spectrum}
          alt="spectrum"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container flex flex-col justify-start items-start p-10  gap-10">
        {/* Footer Section Heading */}
        <div className="footerHeading flex flex-row gap-6 w-full justify-center items-center ">
          <h2 className=" italic font-bold heading shrink-0 ">
            Let's Go from Grey to Green
          </h2>
          <div className="w-full h-1 bg-white rounded-r-full "></div>
        </div>

        {/* footer login section  */}

        <Link href="https://spectrumms.in/">
          <button
            type="button"
            className="bg-primary-green text-white font-body font-extralight text-xl shadow-md shadow-emerald-950 px-8 py-2 rounded-full border border-white"
          >
            {" "}
            Login{" "}
          </button>
        </Link>

        {/* footer link Sec  */}
        <div className="flex flex-row justify-between items-start gap-10 w-full h-auto">
          {/* left  */}
          <div className="flex flex-col justify-start items-start gap-6 w-1/2 h-auto">
            {footerData.info.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-row justify-start items-start gap-2 font-secondary "
                >
                  <h3 className="text-xl font-bold shrink-0 w-24">
                    {e.title} :{" "}
                  </h3>
                  <p className="text-lg  font-extralight max-w-80 ">
                    {e.details}
                  </p>
                </div>
              );
            })}
          </div>
          {/* right  */}
          <div className="flex flex-col justify-start items-center gap-4 font-secondary ">
            <h5 className="text-xl font-semibold ">Follow Us</h5>
            {/* social icon  */}
            <div className="flex flex-row justify-start items-start gap-4 ">
              {footerData.social.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.link}
                    className="flex flex-row justify-start items-start  "
                  >
                    <Image
                      src={e.icon}
                      width={100}
                      height={100}
                      alt={e.name}
                      className="w-10 h-10"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer