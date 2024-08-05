import React from 'react'
import '../styles/Culture.css'
import { FaCheck } from "react-icons/fa6";

const Culturehero = () => {
  return (
    <section className="culture-wrapper ">
        <div className="culture-container p-10 pt-0 m-0">
        
          <h1 className=' flex justify-center text-[--yellow] text-[3rem] font-bold leading-[3.8rem] m-auto p-10'>WE EMBODIES A CULTURE OF <br/> COLLABRATION, GROWTH,<bR/> AND CLIENTS FOCUS WHILE<bR/> SUPPORTING AND VALUING <br/>OUR EMPLOYEES.</h1>
          
          <div className="about-mission flex items-center justify-between p-10 m-10">
           <div className="mission-left flex flex-col align-middle justify-center gap-6">
           <h2 className=' relative text-[--yellow] text-[2.5rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-[0%] after:bottom-[-15%] after:absolute'>Our Mission</h2>
           <p className='text-[1rem] text-[--white] w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           <button className='w-[8rem] h-[2.4rem] bg-[--yellow] text-[--black] rounded-[1.2rem]'>Let's talk</button> 
</div>
           
           <div className="mission-right w-[100%]">
            <img src="placeholder.jpg" alt="placeholder" />
           </div>
          </div>

          <div className="vision flex items-center align-middle justify-center p-10">
            <div className="vision-left w-[100%] h-[100%] flex flex-col align-middle justify-center p-15 gap-6">
           <h2 className='relative text-[--yellow] text-[2rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-0 after:bottom-[-15%] after:absolute'>Our Vision</h2>
           <p className='text-[1rem] mb-2 text-[--white] w-[70%]'> 251 Communication is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           </div>

       <div className="vision-right w-[100%] pb-8 h-[100%] flex flex-col align-middle justify-center  p-15 gap-6">
       
     <h2 className='relative text-[--yellow]  text-[2rem] font-bold after:contents:"" after:w-[5%] after:h-[3px] after:bg-[--yellow] after:left-0 after:bottom-[-15%] after:absolute'>Our Core Values</h2>
       
       <div className="right-content mb-2 flex flex-col align-middle justify-center gap-6">
       
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
        
        </div>
    </section>
  )
}

export default Culturehero
