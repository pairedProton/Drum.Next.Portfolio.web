import React from 'react'
import { GoArrowRight } from "react-icons/go";



const NavbarCTA = ({bg,con,text,icon}) => {
  return (
    <div className={`flex rounded-full gap-2 justify-center items-center ${bg=="green"?"text-white bg-secondary-green":"text-secondary-green bg-white"} shadow-2xl px-4 py-2 cursor-pointer   shadow-black font-heading ${con} `}>
      <h3 className={`text-sm mt-0  -mb-1 ${bg=="green"?"text-white":"text-secondary-green"} 
      ${text}
      `}>Schedule a meeting</h3> <GoArrowRight className={`text-lg ${icon} `} />
    </div>
  );
}

export default NavbarCTA