import React from 'react'
import '../styles/Contacthero.css'
const Contacthero = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-container flex flex-col md:flex-row items-center p-10 py-20 justify-between">
      <div className="contact-left w-[100%] justify-start flex flex-col p-10 gap-4 ">
        <div className="contact-left-top flex items-center justify-center gap-12 p-4 align-middle">
          <h1 className='text-[5.5rem] text-[--white] font-bold leading-[4.4rem]'>
            NOW <br/> WE'RE<br/>TALKING
          </h1>
          <h2 className='text-[--white] text-[10rem] font-bold mb-4' > {'>'}</h2>
        </div>
        <p className='text-[--white] font-[bold] text-[1rem]'> WE SEEK PASSINATE COLLABRRO-CLIENTS DEDICATED TO THEIR PRODUCTS AND CUSTOMERS, REQUEST A CALL BACK AND TALENTED
         INDIVISUALS STRIVING FOR EXCELLENCE.CONTACT US FOR BUSINESS, PRESS
         ET'S CREATE REMARKABLE WORK TOGETHER.</p>
          
         
      </div>
      <div className="contact-right w-[100%] flex-col justify-end flex gap-4 ml-[15%]">
        <h3 className='text-[--white] font-[500]'>Contact Us Today</h3>
         <input className='md:w-[50%] w-[80%] p-2 border-none' type='text' placeholder='Name'  />
         <input className='md:w-[50%] w-[80%]  p-2  border-none' type='text' placeholder='Email' />
         <input className='md:w-[50%] w-[80%]  p-2 h-[6rem]  border-none' type='text' placeholder='Your MESSAGE' />
         <button className='bg-[--yellow]  w-[80%] p-2 md:w-[50%] text-[--white]'>REQUEST A CALL BACK</button>
        
      </div>
      </div>

      <div className='flex flex-col gap-2 p-16'>
          <h3 className='text-[--white] '>FAQ</h3>
          <p className='text-[--white1]'>powred by <u>251 cloud</u></p>
          <h3 className='text-[--white]'>Privacy Policy Terms of Service  ©2024</h3>
         </div>
    </section>
  )
}

export default Contacthero