import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import OrganicFarming from '@/public/images/home/blog/organic_farming.png';

const ZeroWasteFarmingChangingIndianAgriculture = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={OrganicFarming} alt="Zero Waste Farming" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Zero-Waste Farming: How It Is Changing Indian Agriculture
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Bringing agriculture back to its roots while aligning with modern ideas of sustainable agriculture and farmer empowerment.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Indian agriculture has always been closely connected to nature. Traditionally, farmers reused crop residues, animal waste, and natural resources efficiently. However, with the rise of chemical-based farming and modern inputs, a large amount of agricultural waste started going unused or harmful. 
            </p>
            <p className="mb-4">
              Today, Zero-Waste Farming is bringing agriculture back to its roots—while aligning with modern ideas of sustainable agriculture and farmer empowerment.
            </p>
            <p>
              Zero-waste farming is not just a method; it is a mindset that helps farmers reduce costs, protect the environment, and build long-term resilience. Across India, especially in rural regions, this approach is slowly transforming the way farming is practiced.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What Is Zero-Waste Farming?</h2>
            <p className="mb-4">
              Zero-waste farming is an agricultural approach where nothing goes to waste. All farm by-products—crop residues, animal waste, kitchen waste, and natural resources—are reused or recycled within the farming system.
            </p>
            <p className="mb-4">Instead of burning crop residue or discarding organic waste, farmers convert it into:</p>
            <ul className="flex flex-col gap-2 mb-4">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary-green"></div>Compost</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary-green"></div>Natural fertilizers</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary-green"></div>Bio-inputs for pest control</li>
            </ul>
            <p>This system supports organic farming, strengthens soil health, and reduces dependency on external chemical inputs.</p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">How to Start Zero-Waste Farming (Practical Steps)</h2>
            <p className="mb-6">Starting zero-waste farming does not require big investments or advanced machinery. It begins with understanding your farm resources and using them efficiently.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "1. Understand Your Farm Resources", text: "Recognize that crop residue, kitchen waste, and biomass are valuable resources, not waste." },
                { title: "2. Stop Burning Crop Residue", text: "Use residue for mulching or add it to compost pits to improve soil moisture." },
                { title: "3. Prepare Compost on the Farm", text: "Use cow dung, dry leaves, and kitchen waste to make compost." },
                { title: "4. Create Natural Bio-Inputs", text: "Prepare liquid bio-fertilizers using cow-based inputs and neem." },
                { title: "5. Adopt Mulching Practices", text: "Mulching helps control weeds naturally and reduce water evaporation." },
                { title: "6. Diversify Crops", text: "Growing different crops breaks pest cycles and improves nutrients." },
                { title: "7. Integrate Livestock", text: "Animal dung and urine are valuable inputs helping close the nutrient loop." },
                { title: "8. Manage Water Efficiently", text: "Use rainwater harvesting and efficient irrigation methods." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-primary-green mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion: A Sustainable Path for Indian Agriculture</h2>
            <p className="text-white/90 mb-4 text-lg">
              Zero-waste farming is not just a farming technique—it represents a practical and hopeful vision for the future of Indian agriculture. By turning farm waste into valuable resources, this approach reduces production costs, restores soil health, and builds climate-resilient farming systems.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              For Indian farmers, especially small and marginal ones, zero-waste farming offers a path toward self-reliance and stability. The shift improves farm profitability while protecting natural resources for future generations.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default ZeroWasteFarmingChangingIndianAgriculture;
