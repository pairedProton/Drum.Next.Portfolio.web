import React from 'react'

const NavbarMenu = ({menuGap}) => {
  return (
    <ul className={`flex ${menuGap} text-base font-heading `} >
        <li className='text-foreground-white cursor-pointer'>Home</li>
        <li className='text-foreground-white cursor-pointer'>Gallery</li>
        <li className='text-foreground-white cursor-pointer'>Blogs</li>
    </ul>
  )
}

export default NavbarMenu