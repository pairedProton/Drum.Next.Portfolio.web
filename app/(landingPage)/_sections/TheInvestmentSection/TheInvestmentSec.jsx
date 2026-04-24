import React from 'react'
import NavbarCTA from '@/app/_components/Header/NavbarCTA'

const TheInvestmentSec = () => {
  return (
    <div className="  growthSec w-full h-screen bg-linear-to-r to-secondary-green from-primary-green  flex justify-center items-center  overflow-hidden">
      <div className="container flex flex-col justify-center items-center p-10">
        {/* Growth Section Heading */}
        <div className="growthHeading flex flex-col gap-10 justify-center items-center ">
          <h2 className="text-4xl font-bold heading ">
            The Investment Opportunity
          </h2>

          {/* middle section  */}
          <div className='flex flex-col gap-1 justify-center items-center' >
            <h3 className='text-xl font-bold' >Invest in the Future of Food Sovereignty</h3>
            <p className=" lightText">
              Join us as we scale a tech-driven, sustainable, and high-yield
              agricultural ecosystem across India.
            </p>
          </div>

{/* CTA sec  */}
<NavbarCTA bg="white" con="px-6 py-3 !shadow-2xl shadow-black" text="text-base!" icon="text-xl!"/>

        </div>
      </div>
    </div>
  );
}

export default TheInvestmentSec