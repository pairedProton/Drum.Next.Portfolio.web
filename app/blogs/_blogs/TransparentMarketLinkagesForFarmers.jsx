import React from "react";
import Image from "next/image";
import marketLinkage from '@/public/images/home/blog/market_linkage.png';

const TransparentMarketLinkagesForFarmers = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={marketLinkage} alt="Market Linkages" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Designing Transparent Market Linkages for Farmers
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Spectrum's demand-first supply chains connect organic farmers with retailers, F&B brands, and export markets.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Farmers often grow first and search for buyers later. Spectrum reverses the flow by locking demand, quality specs, and logistics before a single seed is sown.
            </p>
            <p>
              Our market linkage program gives farmers visibility on prices, timelines, and sustainability requirements months in advance.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-8">
              How the Marketplace Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Demand Capture", text: "Dedicated sourcing managers co-create annual procurement plans with retail and HoReCa partners." },
                { title: "Quality & Traceability", text: "Spectrum tags every lot with blockchain-backed traceability, lab reports, and farmer stories." },
                { title: "Cold Chain & Logistics", text: "Hub-and-spoke collection centers, reefer vans, and partner warehouses extend shelf life." },
                { title: "Fair Contracts", text: "Farmers sign forward contracts with floor prices and upside sharing to ride market highs." }
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
              Proof from the Field
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Retailers retain 98% of Spectrum supply partners due to consistency.",
                "Farmers receive payments within 72 hours via digital escrow accounts.",
                "Export buyers achieve full container loads with single-origin produce.",
                "Waste is down 22% because volumes match actual demand."
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
              Partner with Spectrum
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              We invite conscious brands, institutional buyers, and agri-startups to plug into our transparent supply network. Together we can give farmers predictable markets and give consumers produce they trust.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default TransparentMarketLinkagesForFarmers;
