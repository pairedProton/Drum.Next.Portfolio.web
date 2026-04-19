import React from 'react'
import { GoArrowRight } from "react-icons/go";



const NavbarCTA = () => {
  return (
    <div className="flex rounded-full gap-2 justify-center items-center text-white bg-[#285946] shadow-2xl px-4 py-2 cursor-pointer  text-sm  shadow-black font-heading">
      <h3 className='text-sm mt-0  -mb-1  '>Schedule a meeting</h3> <GoArrowRight className="text-lg" />
    </div>
  );
}

export default NavbarCTA