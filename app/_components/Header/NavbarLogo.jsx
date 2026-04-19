import React from 'react'
import Image from 'next/image'



const NavbarLogo = () => {
  return (
    <div>
        <Image src="/images/commons/logo_green.png" alt="Logo" width={200} height={200} className='h-10 w-auto'/>
    </div>
  )
}

export default NavbarLogo