import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import logisticsCost from '@/public/images/home/blog/logistics_cost.png';

const CostOfLogisticsInIndiaVsGlobalMarket = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={logisticsCost} alt="Cost of Logistics" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Cost of Logistics in India vs Global Market: A Complete Analysis
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Understanding supply chains and how efficient logistics directly impact farmer income and economic growth.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Logistics is the backbone of any economy. It connects producers to consumers, supports trade, and drives economic growth. However, one of the biggest challenges India faces today is its high logistics cost compared to global standards.
            </p>
            <p>
              Understanding the cost of logistics in India vs global market is important for businesses, policymakers, and especially sectors like agriculture, where efficient supply chains directly impact farmer income.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Logistics Cost: India vs Global Market</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-1 p-6 rounded-2xl bg-red-50 border border-red-100">
                <h3 className="font-bold text-red-800 text-2xl mb-2">India: 13–14% of GDP</h3>
                <p className="text-base text-gray-700">Significantly higher than global benchmarks due to overdependence on road transport, infrastructure gaps, and fragmented supply chains.</p>
              </div>
              <div className="flex-1 p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1]">
                <h3 className="font-bold text-primary-green text-2xl mb-2">Global: 8–10% of GDP</h3>
                <p className="text-base text-gray-700">Developed countries like the USA, Germany, and Japan maintain lower costs through strong multimodal transport and advanced technology.</p>
              </div>
            </div>

            <h3 className="font-bold text-xl text-gray-900 mb-4">Why is logistics cost high in India?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Overdependence on Road Transport</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Infrastructure Gaps & Congestion</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Fragmented Logistics Sector</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> Inefficient Warehousing</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div> High Fuel Costs</li>
            </ul>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Impact on Agriculture and Farmers</h2>
            <p className="mb-4">High logistics cost directly affects farmer empowerment and income. Key issues include high transportation costs reducing profit, lack of cold storage leading to waste, and limited market access.</p>
            <p className="font-bold mb-3">Efficient logistics can:</p>
            <ul className="flex flex-col gap-2 mb-6 text-gray-700">
              <li className="flex items-center gap-3"><GoCheckCircle className="text-secondary-green" /> Reduce waste</li>
              <li className="flex items-center gap-3"><GoCheckCircle className="text-secondary-green" /> Improve pricing</li>
              <li className="flex items-center gap-3"><GoCheckCircle className="text-secondary-green" /> Connect farmers to better markets</li>
            </ul>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-4 text-lg">
              The gap between logistics cost in India and the global market is significant, but it is gradually closing. By adopting better infrastructure, advanced technology, and efficient policies, India can reduce logistics costs and boost economic growth.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              For sectors like agriculture, improved logistics means better farmer income, reduced waste, and stronger supply chains. Efficient logistics is not just about transportation—it is about building a stronger, more sustainable economy.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default CostOfLogisticsInIndiaVsGlobalMarket;
