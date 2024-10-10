
import React, { useState } from 'react'
import '../styles/Contacthero.css'
import axios from '../../api/axios'
import Header from '../header/Header'
const Contacthero = () => {
   const CONTACT_URL= '/contact'
  const [full_name, setFullName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
     try {
      const response = axios.post(CONTACT_URL, 
        JSON.stringify({full_name, email, message}),
        {
          headers:{
            "Content-Type": 'application/json'
          }
        }
        )
        console.log(response.data)
        alert("emailed sucessfully")
     } catch (error){
      console.log(error)
     }
    }
      
    
  
  
  
  
  return (
    <section className="contact-wrapper overflow-x-hidden">
        <Header />
      <div className="contact-container flex flex-col lg:flex-row items-center p-2 sm:p-10 py-20 justify-center">
    
      
      <div className="contact-left flex flex-col p-4 md:p-10 gap-4" style={{ paddingLeft: '2rem' }}>
  <div className="contact-left-top flex items-center justify-center gap-12 px-6  align-middle">
    <h1 className='md:text-[5.5rem] sm:text-[4.5rem] text-[3rem] leading-[4rem] text-[--white] font-[1000] md:leading-[4.2rem]'>
      NOW <br /> WE'RE<br />TALKING
    </h1>
    <h2 className='text-[--white] md:text-[10rem] text-[6rem] sm:text-[8rem] font-[1000] mb-4'>{'>'}</h2>
  </div>
  <p className='text-[--white] font-[bold] w-full text-[.5rem] sm:text-[.8rem] sm:w-[70%] pl-14'>
    WE SEEK PASSIONATE COLLABORO-CLIENTS DEDICATED TO THEIR PRODUCTS AND CUSTOMERS. REQUEST A CALL BACK AND TALENTED
    INDIVIDUALS STRIVING FOR EXCELLENCE. CONTACT US FOR BUSINESS, PRESS, AND LET'S CREATE REMARKABLE WORK TOGETHER.
  </p>
</div>



      <div className="contact-right  flex-col justify-between  flex gap-2 mr-[10%] p-10">
        <h3 className='text-[--white] font-[700]'>Contact Us Today</h3>
         <form className='flex-col justify-end text-[1rem] flex gap-4' onSubmit={handleSubmit}>
         <input className='md:w-[18rem]  w-[20rem] p-2 border-none' required type='text' placeholder='Name' onChange={e => {setFullName(e.target.value)}}  />
         <input className='md:w-[18rem]  w-[20rem]  p-2  border-none' required type='text' placeholder='Email' onChange={e => {setEmail(e.target.value)}} />
         <input className='md:w-[18rem]  w-[20rem]  p-2 h-[6rem]  border-none'  required type='text' placeholder='Your MESSAGE' onChange={e => {setMessage(e.target.value)}} />
         <button className='bg-[--yellow] text-[1rem] w-[20rem] p-2 md:w-[18rem] text-[--white]'>REQUEST A CALL BACK</button>
         </form> 
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
