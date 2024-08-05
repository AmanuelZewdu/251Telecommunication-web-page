import React from 'react'
import Mainheader from '../../Aboutheader/Mainheader'
import { NavLink, useLocation } from 'react-router-dom'
import '../../styles/Research.css'
const Research = () => {
    const location = useLocation();
    return (
    <section className="research-wrapper bg-[--white]  bg-cover text-[--black] p-0" >
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
          <NavLink to='/about/reasearch' className={`border-[1px] text-[--black] border-solid border-[--black] px-6 text-center w-[100%] ${location.pathname === '/about/reasearch' ? 'bg-[--brown] text-[white]' : ''}`}>
            <p>Reasearch</p>
          </NavLink>
          <NavLink to='/about/communication' className='border-[1px] text-[--black]  border-solid border-[--black] px-6 text-center w-[100%]'> 
            <p>communiction</p>
          </NavLink>
        </div>
        <div className="reasearch-container p-0 m-0">
         <div className='p- flex flex-col gap-4 w-[50%] ml-[5%] pt-[15%]'>
         <p className='text-[--brown] text-[1.2rem] '>
         Our research services deliver valuable insights for informed
marketing strategies. We cover market analysis, consumer
behavior, competitor analysis, and trend forecasting.
</p>

<p className='text-[--brown] text-[1.2rem]'>
With meticulous data collection and analysis, we provide
actionable insights to stay ahead. Capitalize on emerging
opportunities with our research expertise.
</p>
</div>
        </div>

    </section>
  )
}

export default Research