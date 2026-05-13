import React from 'react'
import Image from 'next/image'
import { IoArrowForwardOutline } from "react-icons/io5";
import LetsCard from './_components/LetsCard';
import LetsGsap from './LetsGsap';



const LetsUnderstandSec = () => {

const LetsCardData = [
  {
    id: 1,
    title: "Post Harvesting Loss",
    description: [
      "According to a NABCONS study for the Government of India, the country loses about ₹1.53 lakh crore every year in post-harvest losses.",
      "This staggering figure represents food that spoils after harvest, before it ever reaches the customer—a critical gap in our supply chain efficiency.",
    ],
    image: "/images/home/lets-understand/post_loss.png",
    link: "/blogs/post-harvest-loss-india-taurus-organic",
  },
  {
    id: 2,
    title: "Post Farmers Less Margins",
    description: [
      "RBI studies show Indian farmers receive only 33–50% of the final consumer price for fruits and vegetables like tomato (33%), onion (36%), potato (37%), with the rest captured by multiple middlemen layers.",
    ],
    image: "/images/home/lets-understand/farmer_margin.png",
    link: "/blogs/why-farmers-get-lower-margins-india-taurus-organic",
  },
  {
    id: 3,
    title: "Low Efficient Logistics",
    description: [
      "Recent assessments by DPIIT and NCAER estimate that India’s logistics costs account for around 8–9% of the country’s GDP.",
      "This is significantly higher than the global benchmark of about 5–6%, indicating structural inefficiencies in the movement of goods across the country.",
    ],
    image: "/images/home/lets-understand/logistics.png",
    link: "/blogs/low-efficient-logistics-india-taurus-organic",
  },
];


  return (
    <LetsGsap>
    <div className="  letsUnderstandSec w-full h-screen bg-linear-to-r from-primary-green to-secondary-green  flex justify-center items-center  ">
      <div className="container flex flex-col justify-center items-center p-10">
        {/* Lets Understand Section Heading */}
        <div className="letsUnderstandSecHeading flex flex-col gap-0 justify-center items-center mb-14 ">
          <h2 className=" font-bold heading">Let's Understand</h2>
          <h3 className="font-extralight lightText">
            From where the number came
          </h3>
        </div>

        {/* Lets Understand Card Section */}
        {/* <LetsCard /> */}
        <div className="relative  w-260 h-100 " >
          {LetsCardData.map((card,index) => (
            <LetsCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
    </LetsGsap>
  );
}

export default LetsUnderstandSec