import React from 'react'
import Maxwidth from '@/app/_components/Commons/Maxwidth'
import TheRoadGsap from './TheRoadGsap'

const TheRoadData = [
  {
    year: "2026",
    title: "Phase 1 Solidifying",
    desc: "This isn't just a list of names; it's a managed network following our 'Krishi' protocols to ensure consistent quality and volume.",
    align: "flex-col pt-34",
  },
  {
    year: "2028",
    title: "Phase 2 Scaling",
    desc: "Expanding into 5 New States. Launching 'Spectrum Tech-Stack' to provide data-driven insights to the entire supply chain.",
    align: "flex-col-reverse pb-34",
  },
  {
    year: "2030",
    title: "Phase 3 Expansion",
    desc: "Achieving 1 Million+ Acres under management. Establishing Spectrum as the primary bridge for India’s organic exports to global markets.",
    align: "flex-col pt-38",
  },
  {
    year: "BEYOND..",
    title: "Global Ecosystem",
    desc: "Transforming Spectrum into a global SaaS & Infrastructure standard for regenerative agriculture.",
    align: "flex-col-reverse pb-30",
  },
];



const TheRoadSec = () => {
  return (
    <TheRoadGsap>
      <section className=" flex sec2MultiCon  w-full h-screen flex-col gap-10 bg-linear-to-r from-primary-green to-secondary-green text-white justify-center items-start">
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div className="sec2MultiGrad absolute top-0 -right-10 w-50 aspect-square rounded-full blur-3xl" style={{
            background: "linear-gradient(318deg, rgba(255, 121, 37, 0.51) -1.98%, rgba(222, 53, 255, 0.51) 23.75%, rgba(66, 107, 203, 0.51) 93.05%)"
          }} ></div>

          <div className="sec2MultiGrad absolute top-10 -left-10 w-50 aspect-square rounded-full blur-[117px]" style={{
            background: "linear-gradient(318deg, rgba(255, 121, 37, 0.51) -1.98%, rgba(222, 53, 255, 0.51) 23.75%, rgba(66, 107, 203, 0.51) 93.05%)"
          }} ></div>


          <div className="sec2MultiGrad absolute -bottom-30 -left-10 w-50 aspect-square rounded-full blur-[60px]" style={{
            background: "linear-gradient(200deg, rgba(255, 121, 37, 0.46) 55.41%, rgba(222, 53, 255, 0.46) 86.9%, rgba(66, 107, 203, 0.46) 171.74%)"

          }} ></div>
          <div className="sec2MultiGrad"></div>
          <div className="sec2MultiGrad"></div>
        </div> */}

        {/* heading section  */}
        <div className="theRoadHeading flex flex-col gap-0 justify-center items-start mb-14 px-10 pt-10">
          <h2 className="text-4xl font-bold heading text-white">
            The 2030 Roadmap
          </h2>
          <h3 className="text-4xl font-extralight lightText text-white w-[90%]">
            A strategic timeline to transition from regional excellence to
            India’s dominant agri-tech ecosystem.
          </h3>
        </div>

        {/* content section  */}
        <div className="sec2LowerCon relative h-120 w-[120vw] pl-[25%]  -mt-10 ">
          {/* section2 text section  */}

          {/* <div className="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 "></div> */}
          <div className="sec2LowerTextCon absolute  flex h-full w-full opacity-100 ">
            {TheRoadData.map((e, i) => (
              // <div
              //   key={i}
              //   className={`sec1lowertext${i + 1} flex flex-1 flex-col gap-2 ${e.align} p-10 bg-purple-300 border border-white`}
              // >
              <div
                key={i}
                className={`sec1lowertext${i + 1} flex flex-1 flex-col gap-20 justify-center items-start  pl-16  ${e.align}`}
              >
                <div
                  className={`sec1lowertextTitle${i + 1} text-4xl font-bold text-primary-yellow `}
                >
                  {e.year}
                </div>
                <div className={`sec1lowerTextDesc${i + 1} text-sm flex flex-col gap-4 p-4 rounded-2xl bg-white w-56 text-primary-green`}>
                  <h5 className='font-bold text-sm '>{e.title}</h5>
                  <p>
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* section2 line section  */}
          <div className="sec2LineConSec absolute top-0 left-0 flex h-full w-full">
            {TheRoadData.map((e, i) => (
              <div
                key={i}
                className={`sec2LineCon${i + 1} flex flex-1 items-center justify-start`}
              >
                <div
                  className={`sec2Line${i + 1} h-1 w-[99%] bg-white rounded-r-full`}
                ></div>

                <div className="sec2Circle1Con relative z-2 aspect-square w-[1%] scale-[600%] rounded-full">
                  <div
                    className={`sec2CircleWhite${i + 1} absolute top-0 left-0 z-1 h-full w-full scale-[190%] rounded-full bg-white`}
                    style={{
                      boxShadow: "0 0 20px 0.01px yellow",
                      backdropFilter: "blur(5px)",
                    }}
                  ></div>
                  <div
                    className={`sec2Circle${i + 1} bg-linear-to-r from-primary-yellow to-secondary-yellow absolute top-0 left-0 z-2 h-full w-full rounded-full`}
                    // style={{
                    //   background:
                    //     "linear-gradient(318deg,#FF7925 -1.98%,#DE35FF 23.75%,#426BCB 93.05%)",
                    // }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TheRoadGsap>
  );
}

export default TheRoadSec