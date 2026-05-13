import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
// import whySpectrumCreated from '@/public/images/home/blog/why_spectrum_created.png';
import whySpectrumCreated from '@/public/images/home/blog/why_spectrum_created.png'

const WhySpectrumCreated = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image
          src={whySpectrumCreated}
          alt="Spectrum Agriculture"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Why Spectrum Agriculture Was Created: Our Mission to Transform Indian
            Farming
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            A mission-driven platform designed to transform Indian farming
            through sustainable agriculture, farmer empowerment, zero-waste
            models, and strong market linkages.
          </p>
        </div>
      </div>

      {/* Main Blog Content */}
      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          {/* Intro Paragraphs */}
          <section className="flex flex-col gap-6">
            <p>
              Agriculture is the backbone of the Indian economy, but for decades,
              our farmers have faced a painful paradox. They grow the food that
              sustains the nation, yet many struggle to make a reliable income.
              From degraded soils and unpredictable weather to fragmented supply
              chains and unfair market prices, the challenges are steep.
            </p>
            <p>
              At the same time, the world is moving toward sustainability.
              Consumers want to know where their food comes from, how it was
              produced, and the impact it has on the planet. But there was a
              missing link between the farmers who could produce sustainable food
              and the markets that demanded it.
            </p>
            <p className="text-primary-green font-bold text-xl border-l-4 border-secondary-green pl-6 py-2 bg-secondary-green/5">
              That is the reason Spectrum Agriculture was created.
            </p>
            <p>
              Spectrum Agriculture is not just another agricultural trading
              company. It is a mission-driven platform designed to transform
              Indian farming through sustainable agriculture, farmer empowerment,
              and strong market linkages. We exist to bridge the gap between
              rural farmers and modern, sustainable food systems—creating a
              better future for farming, communities, and the planet.
            </p>
          </section>

          {/* Section 1: Why it had to be created */}
          <section className="mt-8 flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-2 border-b pb-4">
              Why Spectrum Agriculture Had To Be Created
            </h2>
            <p className="mb-4">
              The traditional agricultural supply chain is broken. Here are the
              core issues we saw that demanded a new approach:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-green text-xl mb-3">
                  1. Farmers Produce Wealth, But Don't Prosper
                </h3>
                <p className="text-base text-gray-700">
                  Despite producing the crops, farmers often receive the lowest
                  percentage of the final consumer price. Too many middlemen,
                  lack of market access, and unfair pricing models leave farmers
                  struggling to survive while intermediaries maximize profits.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-green text-xl mb-3">
                  2. The Degradation of the Green
                </h3>
                <p className="text-base text-gray-700">
                  Decades of chemical-heavy farming have depleted soils,
                  polluted water sources, and negatively impacted biodiversity. A
                  severe sustainability crisis is underway.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-green text-xl mb-3">
                  3. Post-Harvest Waste
                </h3>
                <p className="text-base text-gray-700">
                  A significant portion of India's agricultural output is lost
                  due to poor storage, lack of cold chain infrastructure, and
                  inefficient transport systems.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-green text-xl mb-3">
                  4. The Trust Deficit
                </h3>
                <p className="text-base text-gray-700">
                  Buyers often lack visibility into where their produce is
                  sourced from, while farmers have no direct way to access
                  high-value markets or secure fair, transparent contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Our Approach */}
          <section className="mt-12 flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-2 border-b pb-4">
              Our Approach: Building the Spectrum Model
            </h2>
            <p className="mb-4">
              Spectrum Agriculture was built to create an ecosystem where
              everyone wins—the farmer, the planet, and the consumer. Here is
              how we are doing it:
            </p>
            <div className="flex flex-col gap-6">
              {/* Box 1 */}
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="font-bold text-primary-green text-2xl mb-3">
                  Sustainable Agriculture for Long-Term Growth
                </h3>
                <p className="text-gray-700">
                  We focus on transitioning conventional farms to organic and
                  regenerative practices. By adopting sustainable methods, we
                  improve soil health, increase biodiversity, and ensure that
                  farmland remains productive for generations to come.
                </p>
              </div>
              {/* Box 2 */}
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="font-bold text-primary-green text-2xl mb-3">
                  Farmer Empowerment and Training
                </h3>
                <p className="text-gray-700 mb-4">
                  Farmers are at the center of our strategy. We provide
                  comprehensive training and support to help them adopt modern
                  techniques:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Soil Practices:</strong> From mulching to organic
                    pest management and crop rotation.
                  </li>
                  <li>
                    <strong>Access to Resources:</strong> High-quality seeds and
                    inputs.
                  </li>
                  <li>
                    <strong>Digital Tools:</strong> Utilizing data to optimize
                    water usage, forecast weather, and increase overall farm
                    efficiency.
                  </li>
                </ul>
              </div>
              {/* Box 3 */}
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="font-bold text-primary-green text-2xl mb-3">
                  Zero-Waste Systems
                </h3>
                <p className="text-gray-700">
                  We are dedicated to creating zero-waste agricultural
                  ecosystems. Every byproduct from the farm—whether crop residue
                  or waste—is repurposed or recycled back into the farm as
                  compost or natural fertilizer.
                </p>
              </div>
              {/* Box 4 */}
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="font-bold text-primary-green text-2xl mb-3">
                  Direct Market Linkages and Transparency
                </h3>
                <p className="text-gray-700 mb-4">
                  We eliminate the middlemen by creating direct, transparent
                  supply chains from the farm to the consumer. This ensures:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Fair Pricing:</strong> Farmers receive better, more
                    predictable prices for their produce.
                  </li>
                  <li>
                    <strong>Quality Assurance:</strong> Buyers get high-quality,
                    traceable produce.
                  </li>
                  <li>
                    <strong>Traceability:</strong> Consumers know exactly where
                    their food comes from.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Opportunities */}
          <section className="mt-12 flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-2 border-b pb-4">
              Opportunities for Partners and Investors
            </h2>
            <p>
              Spectrum Agriculture is actively seeking partnerships with those
              who share our vision for a sustainable agricultural sector. We
              offer various opportunities in:
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                "Sustainable Farming Infrastructure",
                "Local Farmer Networks",
                "Tech-enabled Supply Chains",
                "Zero-waste Processing Facilities",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-full text-base font-medium text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Section 4: Impact */}
          <section className="mt-12 flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-2 border-b pb-4">
              Impact Spectrum Agriculture Aims to Create
            </h2>
            <p className="mb-4">
              We are working towards meaningful and scalable change across the
              entire agricultural ecosystem:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Higher incomes for farmers",
                "Restored soil health",
                "Lower carbon footprint",
                "Transparent supply chains",
                "Empowered rural communities",
                "Zero-waste agricultural systems",
                "Increased resilience to climate change",
                "Better food security for the nation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-2xl text-secondary-green shrink-0" />
                  <span className="text-gray-800 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: The Future */}
          <section className="mt-12 flex flex-col gap-6">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-2 border-b pb-4">
              The Future We Are Building
            </h2>
            <p>The future of Indian agriculture must be:</p>
            <div className="flex flex-wrap gap-4">
              {[
                "Sustainable",
                "Empowered",
                "Organic",
                "Transparent",
                "Future-Ready",
                "Resilient",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-6 py-2 bg-primary-green text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Section 6: Conclusion */}
          <section className="mt-16 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-snug">
              Conclusion: Spectrum Agriculture is a Mission, Not Just a Company
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Spectrum Agriculture was created to point Indian agriculture
              towards a more sustainable future.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {[
                "Sustainable Practices",
                "Organic Produce",
                "Farmer Empowerment",
                "Transparent Supply",
                "Zero-waste Systems",
                "Market Linkages",
                "Fair Partnerships",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary-green"></div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              We are committed to transforming the agricultural landscape and
              empowering farmers. Spectrum Agriculture is more than just an
              organization; it is a movement towards a better, more resilient
              future for Indian agriculture. This is just the beginning. Together,
              we will grow a greener, stronger, more empowered India.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default WhySpectrumCreated;