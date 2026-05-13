import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import marketLinkage from '@/public/images/home/blog/market_linkage.png';

const FutureOfAgriIntelligence = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={marketLinkage} alt="The Future of Agri-Intelligence" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            The Future of Agri-Intelligence
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Explore how AI, digital tools, and smart agricultural systems are transforming the future of farming in India.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              For generations, Indian agriculture has relied on traditional wisdom, seasonal patterns, and manual labor. However, as the challenges of climate change, declining soil fertility, and unpredictable markets grow, traditional methods are no longer enough to guarantee stability. 
            </p>
            <p className="mb-4">
              Enter <strong>Agri-Intelligence</strong>—the integration of Artificial Intelligence (AI), data analytics, and digital tools into the agricultural sector. 
            </p>
            <p>
              Agri-Intelligence is rapidly reshaping how crops are grown, harvested, and sold. It is bridging the gap between farm and technology, providing Indian farmers with the insights they need to make data-driven decisions that improve yields, reduce costs, and ensure sustainable farming practices.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">What is Agri-Intelligence?</h2>
            <p className="mb-6">
              Agri-Intelligence refers to the use of smart agricultural technologies to optimize the farming lifecycle. It encompasses a wide range of digital solutions designed to bring precision and predictability to an unpredictable industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Artificial Intelligence (AI)</h3>
                <p className="text-gray-700 text-base">AI algorithms analyze massive datasets from satellites, drones, and ground sensors to predict weather patterns, detect diseases, and recommend optimal planting times.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">IoT (Internet of Things)</h3>
                <p className="text-gray-700 text-base">IoT devices, such as smart soil moisture sensors, communicate real-time data directly to farmers' smartphones, ensuring precise irrigation and fertilization.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Big Data Analytics</h3>
                <p className="text-gray-700 text-base">By processing historical yield data, market prices, and climate trends, big data helps farmers decide which crops to plant to maximize their profitability.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">Blockchain Traceability</h3>
                <p className="text-gray-700 text-base">Ensures transparency in the supply chain by tracking produce from the farm to the consumer, verifying organic certifications and fair trade practices.</p>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">How Agri-Intelligence is Transforming Indian Farming</h2>
            
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Precision Farming</h3>
                <p className="text-gray-700">Instead of applying water and fertilizer uniformly across a field, precision farming uses GPS and sensor data to apply resources only where they are needed. This significantly reduces waste, cuts input costs, and prevents groundwater contamination.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Automated Crop Health Assessment</h3>
                <p className="text-gray-700">Drones equipped with multispectral cameras can fly over large fields and instantly identify areas affected by pests, nutrient deficiencies, or fungal infections long before the human eye can spot them. This allows for targeted, localized treatment.</p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2"><GoCheckCircle className="text-secondary-green" /> Smart Supply Chains & Market Linkages</h3>
                <p className="text-gray-700">Agri-Intelligence platforms connect farmers directly with buyers based on real-time demand and supply algorithms. This reduces the dependency on middlemen, ensures fair pricing, and minimizes post-harvest losses caused by supply chain delays.</p>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">Empowering Farmers with Technology</h2>
            <p className="mb-4">
              The goal of Agri-Intelligence is not to replace the farmer, but to empower them. In India, where a large percentage of farmers operate on small landholdings, mobile-based advisory apps are making advanced analytics accessible to everyone.
            </p>
            <p>
              By democratizing data, farmers can transition from reactive farming to proactive farming. They can anticipate risks, optimize their inputs, and build climate-resilient farming models that ensure their long-term economic stability.
            </p>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              The future of farming in India is digital. As Agri-Intelligence continues to evolve, it will serve as the foundation for a sustainable, zero-waste, and highly productive agricultural ecosystem.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              By embracing AI, smart sensors, and data analytics, Indian agriculture is stepping into a new era where technology and nature work hand-in-hand to secure the nation's food future while empowering the farming community.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">1. Can small-scale farmers in India afford Agri-Intelligence?</h4>
                <p className="text-gray-700">Yes. While large drones and heavy machinery may be expensive, the core of Agri-Intelligence—such as AI-driven weather predictions and market insights—is increasingly available through affordable smartphone applications and government-supported digital platforms.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">2. How does AI help in reducing crop failure?</h4>
                <p className="text-gray-700">AI models can analyze historical weather data and current soil conditions to predict risks such as droughts or pest outbreaks. This gives farmers early warnings, allowing them to take preventive measures before the crop is damaged.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">3. Will technology replace traditional farming knowledge?</h4>
                <p className="text-gray-700">No. Agri-Intelligence is designed to complement traditional wisdom, not replace it. It provides data that validates and enhances traditional practices, making them more precise and efficient.</p>
              </div>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};
export default FutureOfAgriIntelligence;
