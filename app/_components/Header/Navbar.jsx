import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'
import NavbarCTA from './NavbarCTA'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <NavbarLogo />

        {/* Navbar Menu and CTA */}
        <div className='flex justify-between items-center'>
            <NavbarMenu />
            <NavbarCTA />
        </div>
    </div>
  )
}

export default Navbar