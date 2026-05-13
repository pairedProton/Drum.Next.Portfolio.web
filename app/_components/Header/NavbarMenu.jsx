import React from 'react'
import Link from 'next/link'


const NavbarMenu = ({menuGap}) => {
  return (
    <ul className={`flex ${menuGap} text-base font-heading text-foreground-white`} >
        <Link href="/"><li className='cursor-pointer'>Home</li></Link>
        {/* <Link href="#gallerySec"><li className='cursor-pointer'>Gallery</li></Link> */}
        <Link href="/blogs"><li className='cursor-pointer'>Blogs</li></Link>
    </ul>
  )
}

export default NavbarMenu