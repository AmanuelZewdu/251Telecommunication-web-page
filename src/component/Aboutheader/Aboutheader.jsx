import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const Aboutheader = () => {
      const location = useLocation();
     
  
    return (
    <div>
            <div className="header-sub-menu hover:cursor-pointer  grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-6   align-middle justify-center px-5 md:px-20 m-auto  p-10">
          <NavLink to='/about/expermental' className={`border-[1px] text-[--white1]  border-solid border-[--white1] px-6 text-center ${location.pathname === '/about/expermental' ? 'border-[--yellow]' : ''} `}>
            <p>Experimental</p>
          </NavLink>
          <NavLink to='/about/creative'   className={`border-[1px]  text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%] ${location.pathname === '/about/creative' ? 'bg-black' : ''}`}>
            <p>Creative</p>
          </NavLink>
          <NavLink to='/about/digital' className={`border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%] ${location.pathname === '/about/digital' ? 'bg-[--red]' : ''} `}>
            <p>Digital</p>
          </NavLink>
          <NavLink to='/about/pr' className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>PR</p>
          </NavLink>
          
          <NavLink to='/about/production' className={`border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%] ${location.pathname === '/about/production' ? 'bg-[--orange]' : ''}`}>
            <p>Production</p>
          </NavLink>
          <NavLink to='/about/reasearch' className={`border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%] ${location.pathname === '/about/reasearch' ? 'bg-[--brown]' : ''}`}>
            <p>Reasearch</p>
          </NavLink>
          
        </div>

       
    </div>
  )
}

export default Aboutheader