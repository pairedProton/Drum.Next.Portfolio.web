"use client"

import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'
import NavbarCTA from './NavbarCTA'
import { useState } from 'react'

const Navbar = () => {  

  const [menuGap, setMenuGap] = useState("gap-12")

  return (
    <nav className='flex justify-between items-center  px-6 py-4 absolute top-0 left-0 right-0 z-50 shadow-2xl'>
        <NavbarLogo />

        {/* Navbar Menu and CTA */}
        <div className={`flex justify-between items-center ${menuGap}`}>
            <NavbarMenu menuGap={menuGap}/>
            <NavbarCTA  bg={"green"} con={""} text={""} icon={""} />
        </div>
    </nav>
  )
}

export default Navbar