import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'

const Navbar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 text-gray-700 border-b border-borderColor relative transition-all duration-300
      ${location.pathname === '/' && 'bg-light'}`}
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-8" />
      </Link>
      <div
         className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 
        flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 
        ${location.pathname === '/' ? 'bg-light' : 'bg-white'} 
        ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
        
      <div className='hidden lg:flex items-center text-sm gap-2 
        border px-3 border-borderColor rounded-full max-w-56'>
            <input type="text" className="py-1.5 w-full bg-transparent 
            outline-none placeholder-gray-500" placeholder="Search Vehicles"/>
            <img src={assets.search_icon} alt="search"/>
        </div> 
      </div>

    </div>
  )
}

export default Navbar
