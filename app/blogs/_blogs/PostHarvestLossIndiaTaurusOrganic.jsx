import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import farmerColective from '@/public/images/home/blog/farmer_collective.png';

const PostHarvestLossIndiaTaurusOrganic = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={farmerColective} alt="Post-Harvest Loss in India" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Post-Harvest Loss in India and Why It Matters for Taurus Organic
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            India loses a significant share of farm produce after harvest due to storage, transport, and handling issues. Learn what post-harvest loss means and how Taurus Organic protects quality.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              India produces a huge amount of food, but a large part of it is lost after harvest because of weak handling, storage, transport, and packaging. This issue is called post-harvest loss, and it affects both the quantity and the quality of farm produce before it reaches consumers.
            </p>
            <p>
              For a brand like Taurus Organic, this topic is important because freshness, handling, and product quality are central to trust.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What Is Post-Harvest Loss?</h2>
            <p className="mb-4">
              Post-harvest loss means the reduction in food value after harvest and before final consumption. It can happen at many points in the supply chain, including sorting, drying, packaging, storage, transport, and wholesale handling. 
            </p>
            <p>
              The result may be physical loss, such as spoilage or breakage, or quality loss, such as reduced freshness, taste, appearance, or shelf life. In simple terms, food is grown successfully but does not always reach the buyer in the same condition.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">How Big Is the Problem in India?</h2>
            <p className="mb-4">
              Official and media reports show that post-harvest loss is a major issue in India. A government-linked NABCONS study commissioned by the Ministry of Food Processing Industries covered 54 crops and commodities across the post-harvest chain. 
            </p>
            <p className="mb-4">
              A later parliamentary reply based on the same study said annual losses were 12.49 million metric tonnes for cereals, 1.37 million metric tonnes for pulses, 2.11 million metric tonnes for oilseeds, 7.36 million metric tonnes for fruits, 11.97 million metric tonnes for vegetables, and 30.59 million metric tonnes for plantation crops including sugarcane and spices.
            </p>
            <p className="text-gray-900 font-bold border-l-4 border-secondary-green pl-4 py-2 bg-secondary-green/5">
              A major news report also said India loses farm produce worth around ₹1.5 lakh crore each year because of post-harvest inefficiencies.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Why Do These Losses Happen?</h2>
            <p className="mb-4">The biggest causes are weak post-harvest systems and poor handling practices. Common reasons include:</p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Poor harvesting methods and rough handling",
                "Weak storage infrastructure",
                "Lack of cold chain for perishable produce",
                "Delays in transport",
                "Moisture, spoilage, and pest damage"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>Fruits and vegetables are especially vulnerable because they spoil faster than grains or dry goods.</p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">Why This Matters for Taurus Organic</h2>
            <p className="mb-4">
              Taurus Organic is more than a product catalog. It is a wellness-led brand that depends on freshness, trust, and careful product handling. The same issue that affects farmers also affects brands that sell grains, oils, dry fruits, spices, herbal powders, teas, and wellness mixes.
            </p>
            <p className="mb-6">
              If quality is lost after harvest, the customer receives less value. That is why Taurus Organic can position itself as a brand that cares about sourcing, storage, packing, and freshness from source to shelf.
            </p>

            <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm mb-6">
              <h3 className="font-bold text-primary-green text-xl mb-4">What Taurus Organic Communicates:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Sourced with care.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Packed to reduce spoilage.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Stored for freshness.</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Shipped with quality protection.</li>
                <li className="flex items-center gap-2 md:col-span-2"><div className="w-2 h-2 rounded-full bg-primary-green"></div> Focused on preserving natural goodness.</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm">
              This messaging makes the brand feel reliable without sounding too technical. The website helps users discover products easily, shop by wellness condition, and buy daily-use essentials in one place with complete trust in the quality.
            </p>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              Post-harvest loss is a real agricultural and business issue in India. For Taurus Organic, it becomes part of the brand story around quality, freshness, and responsible sourcing.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              A good website should not only sell products, but also show customers why Taurus is a trustworthy choice. Explore Taurus Organic products built for freshness, quality, and everyday wellness.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">What is post-harvest loss?</h4>
                <p className="text-gray-700">Post-harvest loss is the waste or quality reduction that happens after crops are harvested but before they are consumed.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Why is post-harvest loss important in India?</h4>
                <p className="text-gray-700">Because it affects food availability, farmer income, and the overall supply chain, especially for perishable items.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">How can Taurus Organic relate to this topic?</h4>
                <p className="text-gray-700">By showing that it cares about sourcing, handling, storage, and freshness of natural products.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Which Taurus products are most affected by freshness?</h4>
                <p className="text-gray-700">Grains, oils, spices, dry fruits, teas, herbal powders, and wellness mixes.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Can this topic help the website’s brand story?</h4>
                <p className="text-gray-700">Yes. It supports trust, quality, and sustainability messaging.</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">References:</h4>
              <ul className="text-sm text-gray-600 flex flex-col gap-1">
                <li>• <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2151371" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline">PIB / MoFPI</a></li>
                <li>• <a href="https://www.hindustantimes.com/india-news/india-loses-rs-1-5-lakh-crore-worth-of-farm-produce-each-year-study-reveals-1017334082" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline">Hindustan Times</a></li>
                <li>• <a href="https://www.downtoearth.org.in/governance/as-told-to-parliament-august-6-2024-4-8-grains-5-15-fruits-vegetables-lost-after-harve-98381" target="_blank" rel="noopener noreferrer" className="hover:text-primary-green underline">Down To Earth</a></li>
              </ul>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};
export default PostHarvestLossIndiaTaurusOrganic;
