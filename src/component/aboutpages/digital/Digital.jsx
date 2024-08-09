import React from 'react'
import '../../styles/Digital.css'
import Aboutheader from '../../Aboutheader/Aboutheader'
import Header from '../../header/Header'
const Digital = () => {
  return (
    <section className="digital-top p-0 m-0">
         <Header />
         <Aboutheader />
          <div className="digital-content flex-col md:flex-row gap-16 md:gap-0 flex justify-between items-center p-20">
            <div className="digital-left">
                <h2 className='text-[--yellow] text-[1.5rem] font-bold'>WE CRAFT</h2>
                <h2 className='text-[--white] text-[1.5rem] font-bold'>A POWERFUL DIGITAL <br/> PRESENCE <br /> FOR YOUR BRAND</h2>
                <h2 className='text-[--yellow] text-[1.5rem] font-bold'>PROPELLING YOU FORWARD</h2>
                <h2 className='text-[--red] text-[1.5rem] font-bold'>IN TODAY'S ONLINE <br/> LANDSCAPE.</h2>
            </div>

            <div className="digital-left">
                <h2 className='text-[--yellow] text-[1.4rem] font-bold'>WE DO THIS THROUGH A <br/> COMPREHENSIVE SUITE OF <br/> SERVICES, INCLUDING
</h2>
                <h2 className='text-[--white] text-[1.4rem] font-bold'>WEBSITE DEVELOPMENT <br/> AND OPTIMIZATION, <br/> SOCIAL MEDIA MASTERY, <br/> AND STRATEGIC DIGITAL <br/>ADVERTISING.</h2>
                
                
            </div>
          </div>
    </section>
  )
}

export default Digital