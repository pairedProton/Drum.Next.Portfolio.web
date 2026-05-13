import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import farmerColective from '@/public/images/home/blog/farmer_collective.png';

const FarmerCollectivesAndRuralGrowth = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={farmerColective} alt="Farmer Collectives" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Farmer Collectives: The Engine Behind Spectrum's Scale
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Why we bet on farmer producer companies (FPCs) and women self-help groups to lead the next agri revolution.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Collective action rewires bargaining power. Spectrum invests in leadership coaching, governance systems, and compliance so that farmer institutions can negotiate as one.
            </p>
            <p>
              Each collective manages procurement, grading, and last-mile logistics with Spectrum's tech and capital support.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              What Strong Collectives Need
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Transparent governance playbooks and quarterly audits",
                "Entrepreneurship bootcamps for board members and youth",
                "Shared infrastructure—from packhouses to testing labs",
                "Patient working capital that matches harvest cycles"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Stories of Change
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "Sundarban FPC", text: "Transitioned 800 acres to organic vegetables, secured a retail contract, and doubled member dividends in one year." },
                { title: "Mahila Shakti SHG", text: "Women entrepreneurs now run spice processing units, selling traceable masalas to metro stores with Spectrum branding." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                  <h3 className="font-bold text-primary-green text-xl mb-2">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-6">
              The Future of Collective Power
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              By 2026 Spectrum will incubate 120 thriving collectives with their own brands, export readiness, and youth leaders. We believe every successful agri-enterprise in India will be co-owned by the farmers who power it.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default FarmerCollectivesAndRuralGrowth;
