import React from 'react'
import kisan1 from "@/public/images/home/our_proposed/kisan1.png";
import kisan2 from "@/public/images/home/our_proposed/kisan2.png";
import Image from 'next/image';


const OurProposedCard = ({card,index}) => {
  return (
    <li  className={`lapScreen${index+1}  relative z-10 w-full h-full`}>
                  <article
                    className={`w-full h-full relative flex justify-between items-center p-8 rounded-t-3xl bg-secondary-green`}
                  >
                    <div className="w-120 h-full  flex flex-col justify-center items-start text-white  gap-6 ">
                      <span className="px-4 py-1 font-secondary rounded-full border-tertiary-green border text-xs uppercase">
                        Direct farm to Market
                      </span>
    
                      <h4 className="text-4xl font-bold">
                        {card.title}
                      </h4>
    
                      <p className="w-[80%] font-secondary font-light">
                        {card.description[0]}
                      </p>
    
                      {/* members section */}
                      <span className="membersSec flex items-center gap-9">
                        <ul className="membersPic flex w-18  items-center">
                          <li className="w-10 aspect-square rounded-full border-secondary-green border-2 shrink-0">
                            <Image
                              src={kisan1}
                              alt="kisan1"
                              width={1920}
                              height={1080}
                              className="w-full h-full object-cover object-center rounded-2xl"
                            />
                          </li>
                          <li className="w-10 aspect-square rounded-full border-secondary-green border-2 shrink-0 -ml-3">
                            <Image
                              src={kisan2}
                              alt="kisan2"
                              width={1920}
                              height={1080}
                              className="w-full h-full object-cover object-center rounded-2xl"
                            />
                          </li>
                          <li className="w-10 aspect-square rounded-full border-secondary-green bg-[#16A34A] border-2 shrink-0 -ml-3 flex justify-center items-center font-secondary text-white text-xs font-semibold ">
                            +2K
                          </li>
                        </ul>
                        <h5 className="font-secondary font-light text-sm">
                          Trust us with their produce
                        </h5>
                      </span>
                    </div>
                    <figure className="w-100 h-full">
                      <Image
                        src={card.image}
                        alt="Lets Understand Image"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover object-center rounded-2xl"
                      />
                    </figure>
                  </article>
                </li>
  )
}

export default OurProposedCard