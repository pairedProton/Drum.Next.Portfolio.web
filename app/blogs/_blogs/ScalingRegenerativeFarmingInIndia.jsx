import React from "react";
import Image from "next/image";
import regenerativeFarming from '@/public/images/home/blog/regenerative_farming.png';

const ScalingRegenerativeFarmingInIndia = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={regenerativeFarming} alt="Regenerative Farming" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Scaling Regenerative Farming Across India's Heartlands
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            How Spectrum Agriculture helps farmers rebuild soil, capture carbon, and earn more through regenerative practices.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Regenerative agriculture is more than a buzzword—it is a practical path to healing soil, managing water, and building climate resilience. At Spectrum Agriculture we pair farmer wisdom with research-backed protocols to make regenerative transitions realistic for smallholders.
            </p>
            <p>
              Field teams co-design crop plans, input schedules, and verification protocols so that every acre rehabilitated translates into measurable income.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-8">
              The Regenerative Blueprint
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Multi-layer Cropping", text: "Stacking fruit trees, intercrops, and soil-cover species to ensure year-round income and nitrogen fixation." },
                { title: "Living Soil Labs", text: "Community labs test soil biology quarterly and create low-cost bio inputs to replace chemicals." },
                { title: "Water Positive Villages", text: "Contour bunds, farm ponds, and IoT moisture tracking reduce water stress and power micro-irrigation." },
                { title: "Carbon & Outcome Tracking", text: "Digital field diaries capture practice adoption, enabling carbon credit monetisation for farmer collectives." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                  <h3 className="font-bold text-primary-green text-xl mb-2">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Impact After Two Seasons
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-gray-700"><strong className="text-gray-900">+38% net income:</strong> Achieved through diversified harvest cycles and premium pricing.</p>
              <p className="text-gray-700"><strong className="text-gray-900">60% lower chemical spend:</strong> Thanks to microbial inputs, bio fertilizers, and pest scouting.</p>
              <p className="text-gray-700"><strong className="text-gray-900">15% higher soil organic carbon:</strong> Verified via blended lab and satellite data.</p>
              <p className="text-gray-700"><strong className="text-gray-900">Women-led field schools:</strong> 42 producer groups now run their own regenerative nurseries.</p>
            </div>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Looking Ahead
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Spectrum's goal is to convert 50,000 acres to regenerative systems by 2027 with transparent monitoring and assured market linkages. Every farmer trained becomes a local coach, multiplying the movement village by village.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default ScalingRegenerativeFarmingInIndia;
