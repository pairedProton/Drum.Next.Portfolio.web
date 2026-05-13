import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import climateChange from '@/public/images/home/blog/climate_change.png';

const ClimateChangeImpactOnIndianAgriculture = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={climateChange} alt="Climate Change Impact" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            How Climate Change Affects Agriculture in India
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Understanding the impacts, challenges, and the path to a resilient agricultural future.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Climate change means the Earth’s weather patterns are slowly shifting. Temperatures, rainfall, storms, and heatwaves are becoming different from before. These changes happen because of human activities like burning fuels, mining, and cutting forests, as well as natural events.
            </p>
            <p className="mb-4">
              Crop cultivation has become more important due to India's expanding industrial needs. Consequently, more woods are turned into agricultural areas, which causes an unusual shift in weather patterns and temperatures. The extinction of numerous plant and animal species is one of the main effects of climate change on biodiversity.
            </p>
            <p className="mb-4">
              Today, farming stands at one of the most critical crossroads in history: the challenge of climate change. Rising temperatures, unpredictable monsoons, droughts, floods, declining soil fertility, pest outbreaks, and shrinking water resources are slowly rewriting India’s agricultural destiny.
            </p>
            <p className="font-bold text-primary-green mt-4 border-l-4 border-secondary-green pl-4 bg-secondary-green/5 py-2">
              Climate change is no longer a future threat—it’s happening right now, visible in every field where crops struggle to survive.
            </p>
            <p className="mt-4">
              But while the situation is coming, it is not hopeless. With modern innovations, sustainable agriculture, regenerative farming, organic farming, and new farm-to-market solutions, India has the power to rebuild a resilient agricultural ecosystem.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What Climate Change Means for Indian Agriculture</h2>
            <p className="mb-6">Climate change affects farming in multiple ways, often interconnected. A slight shift in seasonal patterns is enough to destroy a harvest worth lakhs for farmers. Here’s how:</p>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">1. Rising Temperatures Reduce Crop Productivity</h3>
                <p className="mb-2 text-gray-700">India has recorded increasing average temperatures over the last decade. Heat stress impacts rice, wheat, maize, pulses, oilseeds, and vegetables, leading to flowering loss and reduced grain quality.</p>
                <p className="text-sm font-semibold text-gray-900">Even a 1°C rise can lead to severe yield drops in wheat and rice—two staples feeding millions.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">2. Irregular & Unpredictable Rainfall</h3>
                <p className="mb-2 text-gray-700">Monsoons have shifted dramatically. Heavy rains come at unexpected times, while long dry spells delay sowing. Farmers face drought in some regions, flash floods in others, and crop diseases due to excess moisture.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">3. Water Scarcity & Irrigation Challenges</h3>
                <p className="mb-2 text-gray-700">Water tables are falling rapidly. 60%+ of India’s agriculture depends on rainfall. With erratic rains, borewells fail, rivers dry earlier, cost of irrigation increases, and soil moisture decreases. This threatens the future of food production.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">4. Pest & Disease Outbreaks Are Increasing</h3>
                <p className="mb-2 text-gray-700">Warm, humid weather encourages new pests like locust attacks and new fungal diseases. Pests are building resistance to pesticides, leading to higher input costs and more chemical usage which degrades the soil.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">5. Soil Fertility Is Declining Rapidly</h3>
                <p className="mb-2 text-gray-700">Climate change accelerates organic matter loss, micronutrient deficiency, erosion due to heavy rainfall, and salinity in coastal regions. Without intervention, India’s fertile land could degrade beyond recovery.</p>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Why India Must Transition Toward Sustainable Agriculture</h2>
            <p className="mb-6">Traditional farming alone cannot face climate change anymore. India needs a future-ready model focused on ecological balance, soil health, water efficiency, and farmer well-being. This is where the future of farming lies:</p>
            
            <ul className="flex flex-col gap-4 mb-6">
              <li className="flex gap-3">
                <GoCheckCircle className="text-2xl text-secondary-green shrink-0 mt-1" />
                <div><strong className="text-gray-900 block">Sustainable Agriculture:</strong> Agriculture that meets food needs today without harming resources for future generations.</div>
              </li>
              <li className="flex gap-3">
                <GoCheckCircle className="text-2xl text-secondary-green shrink-0 mt-1" />
                <div><strong className="text-gray-900 block">Regenerative Farming:</strong> Farming that heals soil, increases biodiversity, and restores carbon back into the earth.</div>
              </li>
              <li className="flex gap-3">
                <GoCheckCircle className="text-2xl text-secondary-green shrink-0 mt-1" />
                <div><strong className="text-gray-900 block">Organic Farming:</strong> Chemical-free cultivation that protects soil microbes and human health.</div>
              </li>
              <li className="flex gap-3">
                <GoCheckCircle className="text-2xl text-secondary-green shrink-0 mt-1" />
                <div><strong className="text-gray-900 block">Zero-Waste Farming:</strong> Every farm output is reused — waste becomes fertilizer, feed, compost, or energy.</div>
              </li>
            </ul>
            <p className="font-bold text-primary-green text-xl text-center border-y border-gray-200 py-4">These are not trends—they are the pillars of climate-resilient farming.</p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">Farm-to-Market Solutions: Reducing Climate Losses</h2>
            <p className="mb-4">Climate change makes harvesting unpredictable. Without timely market support, crop loss becomes food loss. Farm-to-market solutions provide direct buyer access, reduced middlemen, better price negotiation, digital traceability, and market demand insights.</p>
            <p>Tech-driven supply chains are becoming the backbone of agri-business in India.</p>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-4 text-lg">
              Climate change is shaking the roots of Indian agriculture, but it is also opening a new era of evolution. The future belongs to sustainable agriculture, organic farming, regenerative farming, and smart biological innovations.
            </p>
            <p className="text-white/90 mb-6 text-lg">
              India can still feed the future if we heal the soil, save water, adopt zero-waste farming, empower farmers, and build strong farm-to-market solutions.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              The climate change is real, but hope is stronger. With awareness, collaboration, and innovation, India can rise as a global leader in sustainable agriculture.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">1. How does climate change impact crop production in India?</h4>
                <p className="text-gray-700">Climate change leads to irregular rainfall, rising temperatures, and frequent extreme weather events. These conditions reduce crop yields, affect sowing and harvesting cycles, and increase crop stress.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">2. What effect does climate change have on water availability for farming?</h4>
                <p className="text-gray-700">Changing rainfall patterns and longer dry spells reduce groundwater levels and surface water availability, increasing water scarcity for irrigation.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">3. How does climate change increase pest and disease risks?</h4>
                <p className="text-gray-700">Warmer temperatures and changing humidity create favorable conditions for pests and plant diseases, leading to higher crop losses.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">4. How are small and marginal farmers affected?</h4>
                <p className="text-gray-700">They are the most vulnerable due to limited resources and dependence on monsoons. Climate shocks directly impact their income and food security.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">5. Can sustainable agriculture reduce the impact of climate change?</h4>
                <p className="text-gray-700">Yes, practices like crop diversification, water-efficient irrigation, and regenerative farming help improve climate resilience.</p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};
export default ClimateChangeImpactOnIndianAgriculture;
