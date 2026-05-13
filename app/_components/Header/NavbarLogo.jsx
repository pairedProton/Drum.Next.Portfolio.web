import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const NavbarLogo = () => {
  return (
    <Link href="/">
        <Image src="/images/commons/logo_green.png" alt="Logo" width={200} height={200} className='h-10 w-auto cursor-pointer'/>
    </Link>
  )
}

export default NavbarLogo