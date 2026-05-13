import React from "react";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";
import empoweringFarmers from '@/public/images/home/blog/empowering_farmers.png';

const EmpoweringFarmersThroughInnovation = () => {
  return (
    <div className="w-full min-h-screen bg-[#fdfdfd]">
      <div className="relative w-full h-[60vh] lg:h-[70vh]">
        <Image src={empoweringFarmers} alt="Empowering Farmers" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight drop-shadow-lg">
            Empowering Farmers Through Innovation: Building a Sustainable Agricultural Future
          </h1>
          <p className="mt-6 text-white/90 font-secondary text-lg md:text-xl max-w-3xl drop-shadow-md">
            How empowerment, innovation, sustainability, and impact come together to support rural communities.
          </p>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-10 font-secondary text-gray-800 leading-relaxed text-lg">
          
          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <p className="mb-4">
              Indian agriculture is at a critical turning point. Today's farmers face increased input costs, climate unpredictability, soil deterioration, and limited access to fair markets. Simultaneously, there is an increasing possibility to transform farming into a more resilient, profitable, and sustainable sector that actually empowers farmers and supports rural communities.
            </p>
            <p>
              At Spectrum, we believe that agriculture can thrive when empowerment, innovation, sustainability, and impact come together. Our work is rooted in the belief that farmers are not just producers—they are entrepreneurs, innovators, and custodians of the land.
            </p>
          </section>

          <section className="p-8 md:p-10 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">Empowerment: Farmer Self-Reliance</h2>
            <p className="mb-4">True farmer empowerment goes beyond providing inputs. It means helping farmers gain control over their decisions, resources, and markets.</p>
            <p className="mb-4">Spectrum works closely with farmers to promote:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Advanced and practical farming models",
                "Access to fair and transparent markets",
                "Knowledge-driven decision-making",
                "Continuous on-ground and digital support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary-green shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-900 font-bold border-l-4 border-secondary-green pl-4 py-2 bg-secondary-green/5">
              Empowered farmers create empowered communities.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Innovation: Blending Tradition with Technology</h2>
              <p className="mb-4 text-base">Innovation in agriculture does not mean replacing traditional wisdom—it means enhancing it with the right technology.</p>
              <ul className="flex flex-col gap-2 text-base text-gray-700 mb-4">
                <li>• Combining local farming knowledge with modern advisory systems</li>
                <li>• Promoting data-informed crop planning</li>
                <li>• Supporting digital access to information</li>
              </ul>
              <p className="text-base text-gray-700">Our mission is ensuring that innovation is accessible, affordable, and effective.</p>
            </section>

            <section className="p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Sustainability: Farming in Harmony with Nature</h2>
              <p className="mb-4 text-base">Sustainable agriculture is not an option—it is a necessity. Spectrum promotes sustainability by encouraging:</p>
              <ul className="flex flex-col gap-2 text-base text-gray-700 mb-4">
                <li>• Organic and natural farming practices</li>
                <li>• Zero-waste and circular farming models</li>
                <li>• Soil regeneration and ecosystem restoration</li>
                <li>• Reduced chemical dependency</li>
              </ul>
            </section>
          </div>

          <section className="mt-6 bg-primary-green text-white p-10 md:p-14 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Closing Thought</h2>
            <p className="text-white/90 mb-4 text-lg">
              The future of agriculture lies in collaboration between farmers, technology, nature, and responsible enterprises. By staying true to our core values, Spectrum is committed to shaping a farming future that is resilient, profitable, and deeply rooted in rural empowerment.
            </p>
            <p className="text-white font-medium text-xl leading-relaxed border-t border-white/20 pt-8">
              Together with farmers, retailers, and rural communities, Spectrum is committed to building a future where agriculture is sustainable, resilient, and rewarding for everyone involved. Let's go from grey to green!
            </p>
          </section>

        </div>
      </article>
    </div>
  );
};
export default EmpoweringFarmersThroughInnovation;
