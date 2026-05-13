import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import sustainableAgri from '@/public/images/home/blog/sustainable_agri_guide.png';

const CompleteGuideToSustainableAgricultureIndia = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={sustainableAgri} alt="Sustainable Agriculture Guide" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Sustainable Agriculture in India: A Complete Guide for Farmers 2026
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Growing food sustainably preserves natural resources, safeguards the environment, and guarantees that farming may continue for future generations.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Growing crops is simply one aspect of farming; another is caring for the water, land, and people that depend on it. However, what exactly is sustainable farming? Growing food sustainably preserves natural resources, safeguards the environment, and guarantees that farming may continue for future generations. It enables farmers to produce high harvests without damaging the ecosystem, water, or soil.
            </p>
            <p>
              This guide explains sustainable agriculture in India in a simple, practical, and farmer-friendly way. It covers what sustainable agriculture is, its types, benefits, challenges, and how farmers can adopt models like regenerative farming in India and organic farming in India. The goal is clear: farmer empowerment and long-term growth.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What is Sustainable Agriculture?</h2>
            <p className="mb-4">
              Sustainable agriculture is an agricultural technique that meets today's food needs while preserving future generations' ability to farm. It strikes a balance between production, environmental sustainability, and farmer livelihoods.
            </p>
            <p className="mb-4">
              It decreases the need for pesticides while promoting natural fertilizers, crop rotation, and soil-healthy practices. It is also concerned about the safety of farmers and local populations.
            </p>
            <p className="font-bold mb-3">In simple terms, sustainable agriculture means:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Protecting soil health", "Using water wisely", "Reducing chemical dependency", "Improving farmer income", "Respecting nature and local ecosystems"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-green"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Sustainable Measures in Indian Agriculture</h2>
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">1. Agroforestry</h3>
                <p className="text-gray-700">Agroforestry is gaining popularity. This strategy involves incorporating trees and shrubs into traditional farming systems, increasing biodiversity and overall sustainability.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">2. Crop Rotation</h3>
                <p className="text-gray-700">Crop rotation reduces soil deterioration, pest infestations, and nutrient depletion, resulting in a healthier and more resilient farming ecology.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">3. Rainwater Harvesting & Water Management</h3>
                <p className="text-gray-700">These techniques help preserve water resources and improve soil fertility. Along with artificial groundwater recharge and mulching, it reduces dependence on rainfall and supports climate-resilient farming.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">4. Integrated Pest Management (IPM)</h3>
                <p className="text-gray-700">IPM focuses on controlling pests through natural methods such as cover crops, biological control, and crop diversity, reducing dependence on chemical pesticides and protecting soil.</p>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Types of Sustainable Agriculture in India</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Organic Farming", text: "Uses natural inputs like compost and bio-fertilizers to cultivate without chemicals." },
                { title: "Regenerative Farming", text: "Aims to restore soil fertility through minimum tillage, cover cropping, and increased organic matter." },
                { title: "Natural Farming", text: "Uses low-cost, locally available ingredients like cow-based concoctions to lower input costs." },
                { title: "Integrated Farming", text: "Combines crops, cattle, fisheries, and poultry to improve revenue stability and lower risk." },
                { title: "Agroforestry", text: "Combines trees, crops, and livestock to enhance soil structure and generate diverse income." },
                { title: "Water-Smart Farming", text: "Includes rainwater gathering, mulching, and efficient irrigation for water-scarce areas." },
                { title: "Precision Agriculture", text: "Optimizes inputs using technologies like soil testing, sensors, and digital advising tools." }
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700 text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-4 text-lg">
              Sustainable agriculture in India is the key to a more resilient agricultural sector, healthier soils, and empowered farmers. Models such as regenerative and organic farming demonstrate that production and sustainability are compatible.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              Farmers can create lucrative and future-ready agriculture systems by implementing the correct solutions. The path may be time-consuming, but the benefits are long-term for farmers, consumers, and the environment.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default CompleteGuideToSustainableAgricultureIndia;
