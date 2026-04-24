import React from 'react'
import Image from 'next/image'


const OurImpactCard = ({
    item
}) => {

const {image, title, subTitle, description} = item;

  return (
    <div className=' ourImpactCard relative w-72 h-100 flex flex-col justify-start items-start bg-secondary-green rounded-2xl p-5 text-white ' >
        <h3 className='text-4xl font-bold text-primary-yellow'>{title}</h3>
        <h4 className='text-2xl font-bold '>{subTitle}</h4>
        <div className='h-0.5 w-full bg-primary-yellow my-2' ></div>
        <p className='w-[70%]  mt-14' ><span className='font-bold' >{description[0]}</span>  
            {description[1]}</p>
        <div className="absolute bottom-0 right-0 w-34 h-auto ">
            <Image
                src={image}
                alt="image"
                width={100}
                height={100}
                className="w-full h-auto"
            />
        </div>
    </div>
  )
}

export default OurImpactCard