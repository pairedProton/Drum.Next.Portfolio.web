import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import zeroWaste from '@/public/images/home/blog/zero_waste.png';

const TransformingIndianSustainableAgriculture = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={zeroWaste} alt="Transforming Agriculture" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Transforming Indian Sustainable Agriculture with Innovation and Purpose
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            Empowering farmers, supporting rural communities, and building a future-ready farming ecosystem.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Agriculture in India is changing rapidly, and farmers today need more than traditional practices to succeed. They need sustainable agriculture, reliable markets, modern support systems, and trustworthy partners who guide them toward long-term growth.
            </p>
            <p className="mb-4">
              Spectrum Marketing and Service Private Limited was created to fulfill this exact need.
            </p>
            <p>
              Spectrum is an emerging agri business in India, dedicated to empowering farmers, supporting rural communities, and building a future-ready farming ecosystem. Through our four specialized models—Spectrum Setu, Spectrum Krishi, Spectrum Suddh, and Spectrum Vikash we are working to make farming more profitable, transparent, and sustainable.
            </p>
            <p className="font-bold text-primary-green mt-4">
              Our commitment is simple: bring innovation, opportunity, and empowerment to Indian agriculture.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">1. Company Introduction</h2>
            <p className="mb-4">
              Spectrum Marketing and Service Private Limited is a forward-focused agriculture enterprise in India offering integrated farm-to-market solutions. Built on the foundation of trust, innovation, and farmer-first values, Spectrum connects the farming community with modern market needs.
            </p>
            <p className="mb-4">
              We work with farmers, businesses, retailers, and investors to create a seamless agricultural ecosystem that supports zero-waste farming, organic cultivation, fair prices, and long-term growth.
            </p>
            <p>
              Our core objective is to build a platform where farmers prosper, businesses gain reliable supply chains, and India moves toward a future of sustainable agriculture and food security.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">2. What We Do</h2>
            <p className="mb-4">
              Spectrum provides end-to-end agricultural services designed to increase efficiency, enhance productivity, and improve the income of farmers. Our services run through four core models:
            </p>
            <p className="mb-4">
              Spectrum provides end-to-end agricultural support from farming assistance to market linkage with a focus on organic, clean, and profitable practices. We help farmers access better markets, adopt advanced farming practices, improve crop quality, and connect directly with buyers.
            </p>
            <p className="mb-4">We offer solutions for farmers who want to grow better, businesses who want reliable sourcing, and organizations who wish to invest or partner in agriculture projects.</p>
            <p className="font-bold mb-3">Our work includes:</p>
            <ul className="flex flex-col gap-2 mb-4">
              {["Farm development and management", "Market connection and buyer sourcing", "Organic and clean food support", "Farmer empowerment programs", "Sustainability and zero-waste farming initiatives", "End-to-end farm-to-market solutions"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GoCheckCircle className="text-xl text-secondary-green shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p>Every model we create works toward strengthening the agricultural value chain in sustainable agriculture India.</p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">3. Our Four Core Service Models</h2>
            <p className="mb-6">Spectrum operates through four powerful service models that define our work and values.</p>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">1. Spectrum Setu – The Bridge Connecting Farmers and Markets</h3>
                <p className="mb-3 text-gray-700">Spectrum Setu acts as a bridge between farmers and large buyers. The goal is to make the supply chain transparent, efficient, and fair for both sides.</p>
                <p className="mb-3 text-gray-700">Through Setu, we enable transparent and efficient B2B farm-to-market solutions. This model ensures:</p>
                <div className="grid grid-cols-2 gap-2 text-gray-700 mb-3">
                  <p>• Fair pricing</p><p>• Reliable demand</p><p>• Stronger relationships</p><p>• Reduced middlemen</p><p>• Income stability</p><p>• Market information</p>
                </div>
                <p className="text-gray-700 text-sm">Spectrum Setu also promotes zero-waste farming by helping farmers sell their produce on time, reducing losses and improving efficiency.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">2. Spectrum Krishi – Integrated Farming Support</h3>
                <p className="mb-3 text-gray-700">Spectrum Krishi focuses on farming support, helping reduce the gap between farmers and markets. Our aim is to create profitable and sustainable farming models, including:</p>
                <div className="flex flex-col gap-1 text-gray-700 mb-3">
                  <p>• Layered and integrated farming</p><p>• Mega farm development</p><p>• Climate-resilient agricultural practices</p><p>• Farmer guidance and mentoring</p>
                </div>
                <p className="text-gray-700 text-sm">Spectrum Krishi is built to transform agriculture into a stable livelihood option while ensuring fair prices and increased revenue for farmers.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">3. Spectrum Suddh – Quality, Purity & Organic Produce</h3>
                <p className="mb-3 text-gray-700">Focuses on promoting organic, clean, and chemical-free farming. Shuddh supports farmers and retailers by ensuring clean, safe, and high-quality agricultural produce.</p>
                <div className="flex flex-col gap-1 text-gray-700 mb-3">
                  <p>• Quality checking</p><p>• Organic farming support</p><p>• Clean produce promotion</p><p>• Training for safe cultivation</p>
                </div>
                <p className="text-gray-700 text-sm">With Spectrum Suddh, we aim to build India’s most reliable organic farming company model. This supports our vision for healthier consumers and healthier farms.</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f0fbf6] border border-[#d1f1e1] shadow-sm">
                <h3 className="font-bold text-primary-green text-xl mb-2">4. Spectrum Vikash – Development & Farmer Empowerment</h3>
                <p className="mb-3 text-gray-700">Drives long-term agricultural growth and community development. It focuses on improving every aspect of farming operations and rural livelihood.</p>
                <div className="grid grid-cols-2 gap-2 text-gray-700 mb-3">
                  <p>• Full farming operations</p><p>• Farmer empowerment</p><p>• Market linkage</p><p>• Warehouse setups</p><p>• Research & development</p><p>• Processing units</p>
                </div>
                <p className="text-gray-700 text-sm">Spectrum Vikash aims to uplift farmers and communities by creating sustainable income, improving infrastructure, and building a resilient rural economy.</p>
              </div>
            </div>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">4. Our Vision & 5. Our Mission</h2>
            <p className="mb-4">
              <strong>Vision:</strong> Our vision is to lead a transformative shift in agriculture by integrating innovation, sustainability, and inclusivity—empowering farmers, strengthening rural economies, and building a resilient, food-secure future for generations to come. We want to build a future where sustainable agriculture, organic farming, and zero-waste farming become the new standards across India.
            </p>
            <p>
              <strong>Mission:</strong> Our mission is to build a sustainable and inclusive future for India’s farmers by creating a comprehensive farming ecosystem that empowers them with knowledge, technology, and access to market opportunities.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">6. Future Goals of Spectrum</h2>
            <p className="mb-4">Spectrum is growing, and our future goals reflect our aim to create national-level agricultural impact.</p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                { title: "Becoming a leading Spectrum Agriculture ecosystem in India", text: "With a strong presence across multiple states." },
                { title: "Establishing large-scale organic and zero-waste farming clusters", text: "To support natural, sustainable cultivation." },
                { title: "Creating India’s strongest farm-to-market network", text: "Where buyers, investors, and farmers can collaborate seamlessly." },
                { title: "Building processing, warehousing & cold storage units", text: "To reduce food loss, improve quality, and increase farmer income." },
                { title: "Expanding into agritech innovations", text: "Including data-driven farming, market intelligence, and traceability." },
                { title: "Partnering with businesses & investors", text: "Who want to support sustainable agriculture India and contribute to rural development." },
                { title: "Empowering farmers through continuous training", text: "Enhancing knowledge of soil health, organic cultivation, and modern technologies." }
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <div className="flex items-start gap-2">
                    <GoCheckCircle className="text-xl text-secondary-green shrink-0 mt-0.5" />
                    <strong className="text-gray-900">{item.title}</strong>
                  </div>
                  <p className="text-gray-700 pl-7">{item.text}</p>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-2xl text-primary-green mb-3">Why Spectrum Matters</h3>
            <p className="mb-4">Spectrum is more than a company—it is a movement for farmer empowerment, agricultural transformation, and sustainable growth. We focus on:</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>Fair opportunities</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>Clean and organic farming</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>Community development</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>Value-driven partnerships</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>Reliable agriculture solutions</li>
            </ul>
          </section>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Conclusion</h2>
            <p className="text-white/90 mb-6 text-lg leading-relaxed">
              Spectrum Marketing and Service Private Limited is committed to shaping the next era of Indian agriculture. Through our innovative service models, strong values, and farmer-first approach, we aim to become India’s most trusted partner in sustainable agriculture, organic farming, and farm-to-market solutions.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              Our work is guided by simplicity, transparency, and the belief that when farmers grow, the entire nation grows.
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default TransformingIndianSustainableAgriculture;
