import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import digitalVillage from '@/public/images/home/blog/digital_village.png';

const LowEfficientLogisticsIndiaTaurusOrganic = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={digitalVillage} alt="Low-Efficient Logistics in India" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Low-Efficient Logistics in India and Why It Matters for Taurus Organic
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Low-efficient logistics is one of the biggest hidden costs in India’s food and agriculture system. Explore how transport delays and weak storage impact food value.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Low-efficient logistics is one of the biggest hidden costs in India’s food and agriculture system. It refers to delays, high transport costs, weak storage, poor cold chain, fragmented movement, and avoidable handling losses that make goods slower, costlier, and less reliable to move from farm to consumer.
            </p>
            <p className="mb-4">
              Government and policy sources show that transport, storage, and market handling are major reasons food loses value after harvest. The Ministry of Food Processing Industries-backed NABCONS assessment covered post-harvest losses across 54 crops and commodities and evaluated losses along the chain from harvesting to market handling.
            </p>
            <p>
              NITI Aayog has also noted that lower logistics costs can directly improve outcomes in agriculture and increase farmer realization when freight systems become more efficient.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What Low-Efficient Logistics Means</h2>
            <p className="mb-4">
              Low-efficient logistics means the supply chain is not moving goods in the fastest, safest, and most cost-effective way. In agriculture, this includes poor road connectivity, too many handling points, weak warehousing, inadequate transport, and weak or broken cold chain systems.
            </p>
            <p className="text-gray-900 font-bold border-l-4 border-secondary-green pl-4 py-2 bg-secondary-green/5">
              This problem affects both farmers and customers. Farmers may receive lower prices because produce cannot move quickly, while customers may pay more because losses, delays, and transport costs get added into the final price.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Why It Is a Serious Issue</h2>
            <p className="mb-4">
              India’s post-harvest losses are already high, and logistics inefficiency is one of the main reasons. The official NABCONS-based assessment showed major losses across cereals, pulses, fruits, vegetables, and plantation crops, and these losses are closely linked to storage, transport, and handling gaps.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-red-50 border border-red-100 shadow-sm">
                <h3 className="font-bold text-red-800 text-xl mb-3">Staggering Losses</h3>
                <p className="text-gray-800 text-base">A Hindustan Times report on the NABCONS-linked findings said India loses agricultural produce worth about ₹1.5 lakh crore every year because of post-harvest inefficiencies.</p>
              </div>

              <div className="p-6 rounded-2xl bg-red-50 border border-red-100 shadow-sm">
                <h3 className="font-bold text-red-800 text-xl mb-3">Infrastructure Gaps</h3>
                <p className="text-gray-800 text-base">A policy note cited by Drishti IAS says India’s cold storage capacity is barely sufficient for around 10% of fruit and vegetable production, worsening food losses and farmer distress.</p>
              </div>
            </div>
            
            <p className="text-gray-700">
              The Drishti IAS policy summary highlights that inadequate transportation causes bruising, repeated loading and unloading damage, contamination, and heat or humidity exposure.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Why It Happens</h2>
            <p className="mb-4">Low-efficient logistics usually happens because of several structural issues at once. These include:</p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Weak cold chain infrastructure",
                "Poor rural connectivity",
                "Insufficient warehousing",
                "Fragmented supply chains and excessive intermediaries",
                "Delays between harvest, aggregation, dispatch, and retail sale"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Perishable products are hit the hardest. Fruits, vegetables, dairy, and fresh produce lose quality quickly when transport is slow or storage is weak, making logistics a quality issue as much as a cost issue.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">Why This Matters for Taurus Organic</h2>
            <p className="mb-4">
              For Taurus Organic, logistics efficiency matters because the website sells categories that depend on freshness, shelf life, and careful handling, including grains, oils, spices, dry fruits, teas, herbal powders, wellness products, and gift hampers.
            </p>
            <p className="mb-6">
              If logistics is inefficient, even strong products can arrive stale, damaged, delayed, or downgraded in quality. In a wellness and natural-products brand, logistics is part of the customer experience, not just an invisible back-end function.
            </p>

            <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm mb-6">
              <h3 className="font-bold text-primary-green text-xl mb-4">What Taurus Communicates:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Faster movement from source to shelf.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Better handling to protect freshness.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Smarter storage and dispatch.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Less waste, more value.</li>
                <li className="flex items-center gap-2 md:col-span-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Reliable delivery for natural products.</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm">
              This kind of language works because it makes the brand sound practical and trustworthy. It tells customers that Taurus cares about what happens before the product reaches them, not only about what appears on the product page.
            </p>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              Low-efficient logistics is a major reason food becomes more expensive, less fresh, and more wasteful in India. When transport, storage, and handling are weak, both farmers and consumers lose value.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              For Taurus Organic, this topic can become part of a strong brand story about freshness, trust, and responsible supply chain management. By ensuring smarter dispatch and reliable delivery, Taurus Organic protects quality from farm to customer.
            </p>
          </section>

          {/* References Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 text-xl">References</h4>
            <ul className="text-base text-gray-600 flex flex-col gap-3">
              <li className="flex flex-col">
                <strong className="text-gray-800">PIB / MoFPI:</strong>
                <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151371" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151371</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">Hindustan Times:</strong>
                <a href="https://www.hindustantimes.com/india-news/india-loses-rs-1-5-lakh-crore-worth-of-farm-produce-each-year-study-reveals-1017334082" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.hindustantimes.com/india-news/india-loses-rs-1-5-lakh-crore-worth-of-farm-produce-each-year-study-reveals-1017334082</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">MANAGE study material:</strong>
                <a href="https://www.manage.gov.in/studymaterial/scm-e.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.manage.gov.in/studymaterial/scm-e.pdf</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">Drishti IAS policy note:</strong>
                <a href="https://www.drishtiias.com/pdf/1702324587.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.drishtiias.com/pdf/1702324587.pdf</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">NITI Aayog freight report:</strong>
                <a href="https://www.niti.gov.in/sites/default/files/2023-02/Freight_report.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://www.niti.gov.in/sites/default/files/2023-02/Freight_report.pdf</a>
              </li>
              <li className="flex flex-col">
                <strong className="text-gray-800">Sansad PDF reply:</strong>
                <a href="https://sansad.in/getFile/loksabhaquestions/annex/183/AU1773_tyKJYF.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline break-words text-sm mt-1">https://sansad.in/getFile/loksabhaquestions/annex/183/AU1773_tyKJYF.pdf</a>
              </li>
            </ul>
          </section>

        </div>
      </article>
    </div>
  );
};
export default LowEfficientLogisticsIndiaTaurusOrganic;
