import React from 'react'
import Mainheader from '../../Aboutheader/Mainheader'
import { NavLink, useLocation } from 'react-router-dom'
import '../../styles/Research.css'
const Research = () => {
    const location = useLocation();
    return (
    <section className="research-wrapper bg-[--white]  bg-cover text-[--black] p-0" >
     {/* <Mainheader /> */}
     <div className="reasearch-container p-4 m-0 md:p-0">
         <div className='p- flex flex-col gap-4 w-[100%] md:w-[50%] md:ml-[5%] pt-[5%]'>
          {/* <h1 className='text-[--yellow] text-[2rem] font-700'>Fun Fact</h1> */}
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