import React from 'react'
import Aboutheader from '../../Aboutheader/Aboutheader'
import { NavLink, useLocation } from 'react-router-dom'
import Creativeimg from '../../../asset/creative-img.png'
import Mainheader from '../../Aboutheader/Mainheader'
const Creative = () => {
     
    const location = useLocation();


    return (
    <section className="creative-wrapper bg-[--white]  bg-cover text-[--black] p-0" >
             <Mainheader />
             <div className="header-sub-menu hover:cursor-pointer  grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-7   align-middle justify-center px-5 md:px-20  p-10">
          <NavLink to='/about/expermental' className={`border-[1px] text-[--black]  border-solid border-[--black] px-6 text-center ${location.pathname === '/about/expermental' ? 'border-[--yellow]' : ''} `}>
            <p>Experimental</p>
          </NavLink>
          <NavLink to='/about/creative'   className={`border-[1px]  text-[--black] border-solid border-[--black] px-6 text-center w-[100%] ${location.pathname === '/about/creative' ? 'bg-black text-[--white]' : ''}`}>
            <p>Creative</p>
          </NavLink>
          <NavLink to='/about/digital' className='border-[1px] text-[--black] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Digital</p>
          </NavLink>
          <NavLink to='/about/pr' className='border-[1px] text-[--black] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>PR</p>
          </NavLink>
          
          <NavLink to='/about/production' className='border-[1px] text-[--black] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Production</p>
          </NavLink>
          <NavLink to='/about/reasearch' className='border-[1px] text-[--black] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Reasearch</p>
          </NavLink>
          <NavLink to='/about/communication' className='border-[1px] text-[--black]  border-solid border-[--black] px-6 text-center w-[100%]'> 
            <p>communiction</p>
          </NavLink>
        </div>
      
      <div className="creative-container flex justify-around p-10">
       <img className='w-[180%]' src={Creativeimg} alt="creative"  />
        <div className='p-4 flex flex-col gap-4 mt-[10%] '>
            <p className='text-[--black] text-[1rem]'>
            We offer comprehensive creative services for enhanced
communication and marketing. </p> 

<p className='text-[--black] text-[1rem]'>From brand development to website design, our team
excels in crafting compelling content and visuals.
Specializing in branding and identity development, we
ensure a consistent brand image across all channels.</p>

<p  className='text-[--black] text-[1rem]'>With expertise in digital, social management, and more,
we strengthen brand presence effectively</p>
           
        </div>
      </div>

      </section>
  )
}

export default Creative