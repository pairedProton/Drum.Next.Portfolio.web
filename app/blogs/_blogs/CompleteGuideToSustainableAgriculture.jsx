import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import whySpectrumCreated from '@/public/images/home/blog/why_spectrum_created.png';

const CompleteGuideToSustainableAgriculture = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={whySpectrumCreated} alt="Sustainable Agriculture" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Complete Guide to Sustainable Agriculture in India
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Farming methods that protect the environment, improve soil health, and ensure long-term productivity.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Agriculture is the backbone of India, supporting millions of farmers and feeding the nation. However, modern farming practices have led to serious challenges such as soil degradation, water scarcity, and declining crop productivity.
            </p>
            <p>
              This is where sustainable agriculture in India is becoming essential. It focuses on farming methods that protect the environment, improve soil health, and ensure long-term productivity while increasing farmer income.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Types of Sustainable Agriculture in India</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Organic Farming", text: "Avoids chemical fertilizers and pesticides. Uses natural inputs like compost and bio-fertilizers." },
                { title: "Regenerative Farming", text: "Focuses on restoring soil health, increasing biodiversity, and improving water retention." },
                { title: "Agroforestry", text: "Combines trees and crops on the same land. It improves soil fertility and provides additional income." },
                { title: "Conservation Agriculture", text: "Includes minimum tillage, crop residue management, and soil cover." },
                { title: "Zero-Waste Farming", text: "Uses farm waste like crop residue and animal manure to produce compost and bio-energy." },
                { title: "Precision Farming", text: "Uses technology like sensors and data to help farmers use water and fertilizers efficiently." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                  <h3 className="font-bold text-primary-green text-xl mb-2">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Key Benefits & Challenges</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">Benefits</h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Improved Soil Health</li>
                  <li className="flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Water Conservation</li>
                  <li className="flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Higher Farmer Income</li>
                  <li className="flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Environmental Protection</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-4 border-b pb-2">Challenges</h3>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 rounded-full bg-red-400"></div> Lack of Awareness</li>
                  <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 rounded-full bg-red-400"></div> Initial Cost</li>
                  <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 rounded-full bg-red-400"></div> Market Access</li>
                  <li className="flex items-center gap-2 text-red-600"><div className="w-2 h-2 rounded-full bg-red-400"></div> Training and Support</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-4 text-lg">
              Sustainable agriculture in India is not just a trend—it is a necessity. By adopting eco-friendly farming practices, farmers can improve soil health, save water, reduce costs, and increase income.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              The journey towards sustainability starts with small steps but its impact is long-lasting. It ensures food security and protects the environment for future generations.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default CompleteGuideToSustainableAgriculture;
