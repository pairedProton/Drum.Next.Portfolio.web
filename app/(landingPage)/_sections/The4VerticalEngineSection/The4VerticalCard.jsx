import React from 'react'
import Image from 'next/image'


const The4VerticalCard = ({card}) => {
  return (
    <div className="the4verticalCard w-full flex flex-row gap-12 justify-center items-center p-10 px-16  shrink-0 ">
      {/*Card Left Section */}
      <div className="theVerticalLeft w-[40%] flex flex-col gap-6">
        <div className="flex flex-col gap-0">
          <h4 className=" font-bold font-body text-5xl">{card.title}</h4>
          <h5 className=" font-extralight lightText text-tertiary-green ">
            {card.subTitle}
          </h5>
        </div>
        <section className="flex flex-col gap-3">
          <p className="font-secondary text-sm font-light">
            <span className="font-semibold">{card.description[0]}</span>
            {card.description[1]}
          </p>
          <p className="font-secondary text-sm font-light">
            {card.description[2]}
          </p>
        </section>

        <section className="flex gap-4">
          {card.tags.map((tag, index) => (
            <div
              key={index}
              className="text-xs font-secondary font-light border border-tertiary-green rounded-full px-4 py-1 bg-secondary-green"
            >
              {tag}
            </div>
          ))}
        </section>
      </div>

      {/* Card Right Section */}
      <div className="theVerticalRight w-[30%] flex justify-end items-center">
        <Image
          src={card.image}
          alt="krishi"
          width={500}
          height={500}
          className="w-80 aspect-square object-center object-cover"
        />
      </div>
    </div>
  );
}

export default The4VerticalCard