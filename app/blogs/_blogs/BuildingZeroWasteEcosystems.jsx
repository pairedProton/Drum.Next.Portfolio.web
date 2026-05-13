import React from "react";
import Image from "next/image";
import zeroWaste from '@/public/images/home/blog/zero_waste.png';

const BuildingZeroWasteEcosystems = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={zeroWaste} alt="Zero Waste Ecosystems" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Building Zero-Waste Farm Ecosystems
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Turning crop residue, surplus produce, and organic matter into profitable circular businesses for farmer collectives.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Indian agriculture wastes nearly 30% of what it grows. Spectrum Agriculture pilots zero-waste modules that treat every residue stream as a resource—from biochar to cold chain partnerships.
            </p>
            <p>
              Farmer cooperatives operate the units and capture new revenue while keeping villages cleaner.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              The Three-Loop System
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "Bio-input Loop", text: "Vermicompost pits, fermented cow dung inoculants, and nano-nutrient sprays replace synthetic fertilizers." },
                { title: "Energy Loop", text: "Mini biogas digesters fuel community kitchens and dryers while supplying slurry for fields." },
                { title: "Market Loop", text: "Grading and dehydration hubs convert surplus fruits and vegetables into shelf-stable powders and snacks." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm flex flex-col gap-2">
                  <h3 className="font-bold text-primary-green text-xl">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Economics that Work
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Average collective earns ₹3.2 lakh annually from residue valorisation.",
                "Drying units extend shelf life from 3 days to 8 months for delicate produce.",
                "Biochar blended with compost sells to urban gardeners via e-commerce partners.",
                "Village youth manage operations, creating dignified green jobs."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-secondary-green mt-2.5 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Roadmap for Expansion
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Spectrum will replicate zero-waste hubs along major procurement clusters, linking them directly to conscious brands needing traceable ingredients. The outcome: cleaner villages, more revenue per acre, and responsible supply chains.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default BuildingZeroWasteEcosystems;