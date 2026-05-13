import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import OrganicFarming from '@/public/images/home/blog/organic_farming.png';

const OrganicFarmingSupportFarmers = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={OrganicFarming} alt="Organic Farming Support" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Organic Farming Support for Farmers: Building a Sustainable Future for Indian Agriculture
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            A complete guide to how structured support systems empower farmers, boost soil health, and secure profitable livelihoods.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          {/* Intro Box */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Organic farming is no longer just an alternative—it is shaping the future of Indian agriculture. But the transition from chemical-heavy farming to organic practices isn't always easy. Farmers face numerous challenges, from pest control to finding the right markets.
            </p>
            <p className="mb-4">
              This is where organic farming support steps in. It provides the knowledge, resources, and market linkages farmers need to successfully shift to organic farming, while ensuring profitability and sustainability.
            </p>
            <p>
              At Spectrum Agriculture, our mission is to empower farmers across India to make this transition seamlessly. We provide end-to-end support, from seed selection to market access, so organic farming becomes a profitable and practical choice.
            </p>
          </section>

          {/* What is Organic Farming */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              What Is Organic Farming and Why Does It Matter?
            </h2>
            <p className="mb-6">
              Organic farming is a sustainable agricultural practice that relies on natural fertilizers and pest control methods. Its main goals are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Soil Conservation",
                "Safe Food",
                "Biodiversity",
                "Sustainable Agriculture",
                "Ecological Balance",
                "Environmental Protection"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p>
              By eliminating harmful chemicals, organic farming protects the environment, produces healthier food, and builds long-term soil health.
            </p>
          </section>

          {/* Why Organic Farming is Becoming Essential */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Why Organic Farming is Becoming Essential in India
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "1. Degraded Soils Require Immediate Healing", text: "Decades of chemical fertilizer use have damaged soil structure. Organic farming helps restore the land and improve crop resilience." },
                { title: "2. Ensured Long-Term Profitability", text: "Consumers are willing to pay a premium for chemical-free, healthy food. Organic produce commands better prices in both domestic and international markets." },
                { title: "3. Lowering the Water Demand", text: "Organic farming improves the water-holding capacity of the soil, meaning farms require less water—a crucial factor in India's changing climate reality." },
                { title: "4. Reduced Input Costs", text: "Synthetic fertilizers and pesticides are expensive. Organic farming uses natural, on-farm inputs like compost and neem extract, significantly reducing cultivation costs." },
                { title: "5. Environmentally Friendly", text: "Organic farming protects local ecosystems, preventing water pollution and creating a safer environment for farming communities." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                  <h3 className="font-bold text-primary-green text-xl mb-2">{item.title}</h3>
                  <p className="text-base text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Challenges */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌍</span>
              <h2 className="text-3xl font-heading font-bold text-primary-green">
                The Challenges Farmers Face in Organic Farming
              </h2>
            </div>
            <p className="mb-6">
              The advantages of organic farming are undeniable, but farmers face several hurdles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Lack of proper training and knowledge",
                "Long transition periods (often 3 years to get certified)",
                "Decreased yields during the initial transition",
                "High cost of organic certification",
                "Limited access to high-quality organic inputs",
                "Navigating complex market linkages"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-green mt-2.5 shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-medium text-gray-900">
              These challenges highlight the immense need for robust organic support systems for farmers.
            </p>
          </section>

          {/* How Support Transforms */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌱</span>
              <h2 className="text-3xl font-heading font-bold text-primary-green">
                How Organic Farming Support Can Transform the Farming Ecosystem
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Box 1 */}
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3 flex items-center gap-2">
                  <span className="bg-primary-green text-white w-6 h-6 rounded-md flex items-center justify-center text-sm">1</span>
                  Training and Skill Development
                </h3>
                <p className="text-base text-gray-700 mb-2">
                  Most farmers have relied on chemical farming for generations. Support systems provide crucial training on soil health, water management, and natural pest control methods.
                </p>
                <p className="text-base text-gray-700">
                  At Spectrum Agriculture, we conduct field schools where farmers learn practical, hands-on techniques directly from agricultural experts.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3 flex items-center gap-2">
                  <span className="bg-primary-green text-white w-6 h-6 rounded-md flex items-center justify-center text-sm">2</span>
                  Access to Organic Inputs
                </h3>
                <p className="text-base text-gray-700">
                  Transitioning farmers need reliable access to organic inputs. Support systems ensure a steady supply of quality seeds, bio-fertilizers, and natural pesticides.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3 flex items-center gap-2">
                  <span className="bg-primary-green text-white w-6 h-6 rounded-md flex items-center justify-center text-sm">3</span>
                  Certification & Government Schemes
                </h3>
                <p className="text-base text-gray-700 mb-3">
                  Organic certification is a complex process. Support organizations guide farmers through the requirements:
                </p>
                <ul className="list-disc pl-5 mb-3 text-base text-gray-700 space-y-1">
                  <li>Documenting farm practices</li>
                  <li>Arranging soil inspections</li>
                  <li>Securing certification (e.g., NPOP, PGS)</li>
                </ul>
                <p className="text-base text-gray-700">
                  They also help farmers access government subsidies and financial assistance designed for organic farming.
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3 flex items-center gap-2">
                  <span className="bg-primary-green text-white w-6 h-6 rounded-md flex items-center justify-center text-sm">4</span>
                  Market Linkages: The Real Game-Changer
                </h3>
                <p className="text-base text-gray-700 mb-3">
                  Many organic farmers struggle to find buyers willing to pay fair prices. A structured support system bridges this gap.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {[
                    "Direct partnerships with buyers",
                    "Eliminating middlemen",
                    "Fair price guarantees",
                    "Demand aggregation",
                    "Quality testing and grading",
                    "Export facilitation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-green shrink-0"></div>
                      <span className="text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700 font-medium">
                  Spectrum connects farmers directly to consumers and premium retailers.
                </p>
              </div>

              {/* Box 5 */}
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-3 flex items-center gap-2">
                  <span className="bg-primary-green text-white w-6 h-6 rounded-md flex items-center justify-center text-sm">5</span>
                  Digital Support and Technology
                </h3>
                <p className="text-base text-gray-700 mb-3">
                  Technology plays a vital role in organic farming support:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {[
                    "Weather forecasting",
                    "Pest alert systems",
                    "Farm management apps",
                    "Crop monitoring tools",
                    "Market intelligence",
                    "Direct communication platforms"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-green shrink-0"></div>
                      <span className="text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base text-gray-700">
                  Digital tools provide farmers with real-time insights for better decision-making.
                </p>
              </div>
            </div>
          </section>

          {/* Future of Organic Farming */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
              Future of Organic Farming in India
            </h2>
            <p className="mb-4">
              India is already home to the largest number of organic farmers in the world. With structured support, the future looks incredibly bright for the organic sector.
            </p>
            <p className="font-bold text-gray-900 mb-3">Key drivers for future growth include:</p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Increasing consumer awareness and demand",
                "Supportive government policies and subsidies",
                "Expansion of dedicated organic supply chains"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <GoCheckCircle className="text-lg text-secondary-green shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-medium text-primary-green border-l-4 border-secondary-green pl-4 bg-secondary-green/5 py-2">
              Organic farming is not just a trend; it's a permanent shift toward sustainable agriculture.
            </p>
          </section>

          {/* Final Thoughts */}
          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌿</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Final Thoughts
              </h2>
            </div>
            
            <p className="text-white/90 mb-6 text-lg">
              Organic farming support is not just beneficial—it is essential. It provides the necessary foundation for helping Indian farmers step away from destructive farming practices and embrace a more sustainable, profitable future.
            </p>
            <p className="text-white/90 mb-6 text-lg font-medium">
              With robust support systems, organic farming guarantees a lasting impact on the farming community, the environment, and the broader economy:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Higher profit margins",
                "Consumer health and safety",
                "Soil conservation",
                "Better market access through transparent practices"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary-green shrink-0"></div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              Organic farming is the heartbeat of this transformation. It's the beginning of a new agricultural revolution.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};

export default OrganicFarmingSupportFarmers;