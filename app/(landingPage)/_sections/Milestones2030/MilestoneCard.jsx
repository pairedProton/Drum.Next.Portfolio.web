import React from 'react'

const MilestoneCard = ({item}) => {
    const {title, subTitle} = item;
  return (
    <div className='milestoneCard relative w-full h-full flex flex-col justify-center items-center shrink-0 p-6 ' >
        <h3 className='text-4xl font-bold text-secondary-green' >{title}</h3>
        <h4 className='text-2xl font-bold text-center text-secondary-green ' >{subTitle}</h4>
    </div>
  )
}

export default MilestoneCard