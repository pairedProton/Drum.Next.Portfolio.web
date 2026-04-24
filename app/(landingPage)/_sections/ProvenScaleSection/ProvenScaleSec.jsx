import React from 'react'
import Image from 'next/image'
import india from '@/public/images/home/proven-scale/india.svg'


const provenScaleData = [
  {
    number: "20+",
    text: "STATES",
  },
  {
    number: "10+",
    text: "FARMS",
  },
]



const ProvenScaleSec = () => {
  return (
    <div className="w-full min-h-screen flex flex-row p-10 bg-background justify-center items-center">
      {/* left section */}
      <section className="leftSec flex flex-col gap-4    w-[40%]">
        {/* left header section */}
        <header className="flex flex-col gap-6 ">
          <h2 className="text-6xl  flex flex-col  gap-3">
            <span className="text-primary-green font-bold">Proven Scale,</span>{" "}
            <span className="text-secondary-green font-normal">Real-World</span>{" "}
            <span className="text-secondary-green font-normal">Impact</span>
          </h2>
          <div className="bg-secondary-yellow h-1 w-24 " />
        </header>

        {/* left para */}
        <p className="text-primary-green w-[60%] text-4xl  lightText">
          Our Model is already active, Transforming fragmented fields into a
          high Performance network across India
        </p>

        {/* left numbers section */}
        <section className="flex flex-row gap-4  mt-10">
          {/* number 1 */}
          <div className="flex flex-col gap-1 items-center justify-center">
            <h5 className="text-3xl font-semibold font-body text-secondary-green">
              20+
            </h5>
            <h5 className="text-sm font-body text-secondary-green">STATES</h5>
          </div>

          {/* line */}
          <div className="bg-secondary-yellow/70  h-14 w-0.5 "></div>

          {/* number 2  */}
          <div className="flex flex-col gap-1 items-center justify-center">
            <h5 className="text-3xl font-semibold font-body text-secondary-green">
              10+
            </h5>

            <h5 className="text-sm font-body text-secondary-green">FARMS</h5>
          </div>
          <div></div>
        </section>
      </section>

      {/* right section */}
      <section className="">
        <Image
          src={india}
          alt="india"
          width={100}
          height={100}
          className="w-130 aspect-square object-cover object-center"
        />
      </section>
    </div>
  );
}

export default ProvenScaleSec