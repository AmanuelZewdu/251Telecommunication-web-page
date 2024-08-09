import React from 'react'
import '../styles/About.css'
import { FaCheck } from "react-icons/fa6";
import Aboutheader from '../Aboutheader/Aboutheader';



const Abouthero = () => {
     
 
  
  
  
  return (
    <section className="about-wrapper">
        <Aboutheader />
        <div className="about-container flex-col justify-center items-center align-middle ">
        <div className="about-us flex flex-col md:flex-row  items-center justify-between p-10 m-10">
          <div className="about-left w-[100%]">
           <img src="placeholder.jpg"  alt="placeholder" />
          </div>
          <div className="about-right w-[100%] flex flex-col justify-center align-middle p-10 gap-8">
           <h2 className='text-[--yellow] text-[2.5rem] font-bold'>About Us</h2>
           <p className='text-[1rem] text-[--white] w-[100%] md:w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           <button className='w-[8rem] h-[2.4rem] bg-[--yellow] text-[--black] rounded-[1.2rem]'>Let's talk</button> 
          </div>
</div>
        
        <div className="about-mission flex flex-col md:flex-row  items-center justify-between p-10 m-10 gap-8">
           <div className="mission-left flex flex-col align-middle justify-center gap-6">
           <h2 className=' relative text-[--yellow] text-[2.5rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-[0%] after:bottom-[-15%] after:absolute'>Our Mission</h2>
           <p className='text-[1rem] text-[--white] w-[100%] md:w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           <button className='w-[8rem] h-[2.4rem] bg-[--yellow] text-[--black] rounded-[1.2rem]'>Let's talk</button> 
</div>
           
           <div className="mission-right w-[100%]">
            <img src="placeholder.jpg" alt="placeholder" />
           </div>
          </div>

          <div className="vision flex flex-col md:flex-row  items-center justify-between p-10 m-10">
            <div className="vision-left w-[100%] flex flex-col align-middle justify-center p-15 py-20 gap-6">
           <h2 className='relative text-[--yellow] text-[2rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-0 after:bottom-[-15%] after:absolute'>Our Vision</h2>
           <p className='text-[1rem] mb-2 text-[--white] w-[70%]'> 251 Communication is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           </div>

       <div className="vision-right w-[100%] flex flex-col align-middle justify-between  p-15 py-20 gap-6">
       
     <h2 className='relative text-[--yellow] text-[2rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-0 after:bottom-[-15%] after:absolute'>Our Core Values</h2>
       
       <div className="right-content pb-8 flex flex-col align-middle justify-center gap-6">
       
        <div className='flex justify-start items-center gap-4'>
        <FaCheck className='text-[--yellow]' size={15} />
         <p className='text-[--white]'>We Act with integrity</p>
        </div>

        <div className='flex justify-start items-center gap-4'>
        <FaCheck className='text-[--yellow]' size={15} />
         <p className='text-[--white]'> We Establish realistic expectations, take responsibility, and deliver on commitments.</p>
        </div>
        <div className='flex justify-start items-center gap-4'>
        <FaCheck className='text-[--yellow]' size={15} />
         <p className='text-[--white]'> We maintain work/life balance.</p>
        </div>
        <div className='flex justify-start items-center gap-4'>
        <FaCheck className='text-[--yellow]' size={15} />
         <p className='text-[--white]'> We are what we say we are, we are mavericks. </p>
        </div>
       
       </div>

       </div>

          </div>

          <div className="founder flex flex-col md:flex-row  items-center justify-between p-10 m-10">
            <div className="founder-left w-[100%]">
              <img src="placeholder.jpg" alt="placeholder" />
            </div>

            <div className="founder-right w-[100%] mt-6 md:mt-0 flex flex-col gap-3 ">
              <h3 className='text-[1.5rem] text-[--white]'>Founder & Ceo</h3>
              <h2 className='text-[2.8rem] text-[--yellow]'>MR.ADDIS ALEMAYEHOU</h2>
              <p className='text-[--white]'>He is also the founder and Managing Partner of 251 Communications in Addis Ababa, Ethiopia. 251 Communications and Marketing, PLC is PR/Communication firm with a clear goal of providing communication services for various private as well as public clients.
Mr. Alemayehou is also the founder of Paconet Media PLC, which launched the first privately, held English FM Radio station (105.3 AFRO FM) and one of the co-founders of Kana Television - general entertainment, free-to-air, and satellite TV channel bringing international standard programming, which revolutionized the local media landscape. He is also engaged with Brand Africa, which is a pan-African inter-generational movement to create a positive image of Africa, celebrate Africa’s identity and inspire competitiveness as a brand counsel.
</p>
            </div>


          </div>
        </div>
    </section>

  )
}

export default Abouthero