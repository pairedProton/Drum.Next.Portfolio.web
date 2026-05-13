import React from "react";
import Image from "next/image";
import digitalVillage from '@/public/images/home/blog/digital_village.png';

const DigitalVillagePlaybookForFarmers = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={digitalVillage} alt="Digital Village" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            The Digital Village Playbook for Empowered Farmers
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            How spectrum deploys advisory apps, IoT, and community data hubs to put intelligence in every farmer's pocket.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          {/* Intro Box */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Technology is only meaningful when it is accessible. Spectrum Agriculture builds Digital Village Centers staffed by agri-youth who translate satellite data, weather alerts, and crop advisory into hyperlocal decisions.
            </p>
            <p>
              Our multilingual mobile app works offline-first, syncing whenever connectivity returns so that advice never pauses.
            </p>
          </section>

          {/* What the Digital Stack Includes */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              What the Digital Stack Includes
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Soil health passports linked to QR codes on every plot",
                "AI-supported pest diagnostics with photo uploads analyzed by agronomists",
                "Market dashboards broadcasting live prices from nearby mandis and buyers",
                "Credit scores based on actual farm records, unlocking low-interest working capital"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary-green mt-2.5 shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Human + Tech Partnerships */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Human + Tech Partnerships
            </h2>
            <p className="mb-4 text-gray-700">
              Each Digital Village Center is co-owned by a farmer producer group. Spectrum trains a three-person command team—an agronomist, a data steward, and a logistics coordinator.
            </p>
            <p className="text-gray-700">
              This blend ensures that farmers get trusted advice from people they already know, backed by strong analytics.
            </p>
          </section>

          {/* Results to Date */}
          <section className="mt-6 bg-primary-green text-white p-10 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Results to Date
            </h2>
            <div className="flex flex-col gap-5">
              {[
                "12,000 farmers receiving predictive irrigation alerts every week",
                "24% reduction in crop loss during unpredictable rain spells",
                "3x faster access to institutional credit through verified farm data"
              ].map((item, i) => (
                <p key={i} className="text-white/90 text-lg font-medium">{item}</p>
              ))}
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};
export default DigitalVillagePlaybookForFarmers;
