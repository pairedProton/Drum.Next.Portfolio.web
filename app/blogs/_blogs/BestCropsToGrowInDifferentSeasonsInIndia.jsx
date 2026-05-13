import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import bestCrops from '@/public/images/home/blog/best_crops_seasons.png';

const BestCropsToGrowInDifferentSeasonsInIndia = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={bestCrops} alt="Best Crops by Season" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Best Crops to Grow in Different Seasons in India: A Complete Farmer’s Guide
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Understanding season-wise crop selection to reduce risk, improve productivity, and support sustainable agriculture.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              India’s agriculture depends heavily on seasons. Choosing the right crop at the right time is one of the most important decisions for farmers. It directly impacts yield, profit, and sustainability.
            </p>
            <p>
              In this guide, we will explore the best crops to grow in different seasons in India, along with practical tips for better farming.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Understanding Cropping Seasons in India</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Kharif Season (Monsoon)</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">June to October</p>
                <ul className="text-base text-gray-700 flex flex-col gap-1">
                  <li>• Rice (Paddy)</li>
                  <li>• Maize</li>
                  <li>• Cotton</li>
                  <li>• Soybean</li>
                  <li>• Groundnut</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Rabi Season (Winter)</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">October to March</p>
                <ul className="text-base text-gray-700 flex flex-col gap-1">
                  <li>• Wheat</li>
                  <li>• Mustard</li>
                  <li>• Barley</li>
                  <li>• Gram (Chana)</li>
                  <li>• Peas</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Zaid Season (Summer)</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">March to June</p>
                <ul className="text-base text-gray-700 flex flex-col gap-1">
                  <li>• Watermelon</li>
                  <li>• Muskmelon</li>
                  <li>• Cucumber</li>
                  <li>• Fodder crops</li>
                  <li>• Summer vegetables</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Factors to Consider Before Choosing Crops</h2>
            <ul className="flex flex-col gap-4 text-gray-700">
              <li><strong>1. Climate and Weather:</strong> Temperature, rainfall, and humidity play a key role.</li>
              <li><strong>2. Soil Type:</strong> Different crops need different soil conditions. Soil testing helps.</li>
              <li><strong>3. Water Availability:</strong> Use efficient irrigation methods like drip irrigation.</li>
              <li><strong>4. Market Demand:</strong> Choose crops with good market value to increase profit.</li>
              <li><strong>5. Farming Practices:</strong> Adopt modern techniques like crop rotation and organic farming.</li>
            </ul>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-4 text-lg">
              Selecting the best crops to grow in different seasons in India is the key to successful farming. By understanding seasonal patterns and adopting sustainable practices, farmers can increase productivity, improve income, and reduce risks.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              Seasonal crop planning is not just a technique—it is a smart strategy for building a strong and sustainable future in Indian agriculture.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default BestCropsToGrowInDifferentSeasonsInIndia;
