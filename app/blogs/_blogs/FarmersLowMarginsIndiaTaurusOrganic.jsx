import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import regenerativeFarming from '@/public/images/home/blog/regenerative_farming.png';

const FarmersLowMarginsIndiaTaurusOrganic = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={regenerativeFarming} alt="Low Farmer Margins in India" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Why Farmers Get Lower Margins in India and Why It Matters for Taurus Organic
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Farmers often produce the food that consumers buy, but they do not always receive a proportionate share of the final retail price. Explore why this gap exists and how Taurus Organic addresses it.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Farmers often produce the food that consumers buy, but they do not always receive a proportionate share of the final retail price. This gap between what the customer pays and what the farmer finally earns is one of the biggest structural issues in Indian agriculture.
            </p>
            <p className="mb-4">
              Recent RBI-linked findings reported by Indian Express said farmers receive only around 33% of the consumer price for tomato, 36% for onion, and 37% for potato. The same reporting said farmers receive around 31% for bananas, 35% for grapes, and 43% for mangoes in the domestic value chain.
            </p>
            <p className="mb-4">
              A government reply published by PIB repeated these RBI working-paper findings. In contrast, the same RBI-based comparisons suggest much higher shares in other categories such as pulses, dairy, and eggs, showing that margins are especially weak in many fruits and vegetables.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What Low Farmer Margins Mean</h2>
            <p className="mb-4">
              Low farmer margins mean that the farmer gets only a small part of the final price paid by the consumer. The remaining share is absorbed across the supply chain through transport, aggregation, wholesaling, retailing, storage costs, spoilage risk, and intermediary margins.
            </p>
            <p className="text-gray-900 font-bold border-l-4 border-secondary-green pl-4 py-2 bg-secondary-green/5">
              This is why a customer may feel that food is expensive while the farmer still feels underpaid. Both can be true at the same time because the distance between farmgate price and retail price is often widened by an inefficient or fragmented supply chain.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What the Data Shows</h2>
            <p className="mb-4">
              The strongest recent numbers come from RBI-linked working papers and official government references:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3">Fruits & Vegetables</h3>
                <ul className="flex flex-col gap-2 text-gray-700">
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Bananas</span> <strong>31%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Tomatoes</span> <strong>33%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Grapes</span> <strong>35%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Onions</span> <strong>36%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Potatoes</span> <strong>37%</strong></li>
                  <li className="flex justify-between pb-1"><span>Mangoes</span> <strong>43%</strong></li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3">Other Categories</h3>
                <ul className="flex flex-col gap-2 text-gray-700">
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Tur (Pulses)</span> <strong>65%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Moong (Pulses)</span> <strong>70%</strong></li>
                  <li className="flex justify-between border-b border-[#d1f1e1] pb-1"><span>Dairy</span> <strong>~70%</strong></li>
                  <li className="flex justify-between pb-1"><span>Gram (Pulses)</span> <strong>75%</strong></li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 italic">
              *Percentages represent the estimated share of the consumer rupee received by the farmer. This shows how differently value chains can behave across categories.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Why Margins Stay Low</h2>
            <p className="mb-4">Low farmer margins are usually caused by a combination of structural issues. These include:</p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Too many intermediaries in the supply chain",
                "Weak access to market information",
                "Fragmented aggregation",
                "Price volatility and perishability",
                "Inadequate storage facilities",
                "Inability of small farmers to hold produce and negotiate better prices"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Perishable crops are the most affected because they must be sold quickly. When farmers cannot store produce or wait for better prices, they often have to accept lower farmgate rates, while later stages of the chain capture a larger share of the consumer rupee.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">Why This Matters for Taurus Organic</h2>
            <p className="mb-4">
              For Taurus Organic, the issue of low farmer margins can support a strong sourcing and brand story. If the brand works with natural food categories such as grains, spices, oils, dry fruits, teas, wellness products, and other farm-linked goods, then fairness in sourcing becomes part of the trust equation.
            </p>
            <p className="mb-6">
              A website can use this topic to show that Taurus Organic values ethical sourcing, transparent supply chains, and better value delivery for both farmers and consumers. This is especially powerful if the brand wants to stand for quality, trust, and responsible commerce rather than only product sales.
            </p>

            <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm mb-6">
              <h3 className="font-bold text-primary-green text-xl mb-4">What Taurus Communicates:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Better sourcing relationships.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> More transparent value chains.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Greater respect for growers.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Quality with fairness.</li>
                <li className="flex items-center gap-2 md:col-span-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Natural products backed by responsible sourcing.</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm">
              This kind of positioning helps the brand connect ethics with quality. It tells customers that buying from Taurus Organic is not only about what they consume, but also about how the product reaches them.
            </p>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              Low farmer margins are a major problem in Indian agriculture because farmers often receive only a fraction of what consumers finally pay. RBI-linked studies and government replies show that this is especially serious in fruits and vegetables.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              For Taurus Organic, this topic can become a strong credibility point around ethical sourcing, quality, and responsible brand building. A strong website can use this to make three promises clear: product quality, responsible sourcing, and a more meaningful connection between farm and consumer.
            </p>
          </section>

          {/* References Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 text-xl">References</h4>
            <ul className="text-base text-gray-600 flex flex-col gap-3">
              <li className="flex flex-col">
                <strong className="text-gray-800">Indian Express:</strong>
                <a href="https://indianexpress.com/article/business/economy/farmers-get-only-a-third-of-what-consumer-pays-for-vegetables-fruits-rbi-study-9606529/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://indianexpress.com/article/business/economy/farmers-get-only-a-third-of-what-consumer-pays-for-vegetables-fruits-rbi-study-9606529/</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">PIB / Government reply:</strong>
                <a href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2146943" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2146943</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">Scroll:</strong>
                <a href="https://scroll.in/latest/1074172/farmers-get-only-a-third-of-what-consumers-spend-on-vegetables-fruits-reserve-bank-study" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://scroll.in/latest/1074172/farmers-get-only-a-third-of-what-consumers-spend-on-vegetables-fruits-reserve-bank-study</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">Sansad PDF:</strong>
                <a href="https://sansad.in/getFile/annex/266/AU508_z2PmqX.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://sansad.in/getFile/annex/266/AU508_z2PmqX.pdf</a>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </div>
  );
};
export default FarmersLowMarginsIndiaTaurusOrganic;
