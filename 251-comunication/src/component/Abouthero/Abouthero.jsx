import React from 'react'
import './About.css'
const Abouthero = () => {
  return (
    <section className="about-wrapper">
        <div className="about-container">
         <div className="header-sub-menu hover:cursor-pointer  grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-8  align-middle justify-center px-5 md:px-20  p-10">
          <div className='border-[1px] text-[--white1]  border-solid border-[--white1] px-6 text-center'>
            <p>Experimental</p>
          </div>
          <div className='border-[1px]  text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>Creative</p>
          </div>
          <div className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>Digital</p>
          </div>
          <div className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>PR</p>
          </div>
          <div className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>Media</p>
          </div>
          <div className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>Production</p>
          </div>
          <div className='border-[1px] text-[--white1] border-solid border-[--white1] px-6 text-center w-[100%]'>
            <p>Reasearch</p>
          </div>
          <div className='border-[1px] text-[--white1]  border-solid border-[--white1] px-6 text-center w-[100%]'> 
            <p>comuniction</p>
          </div>
        </div>

        <div className="about-us flex items-center justify-between">
          <div className="about-left w-[100%]">
           <img src="placeholder.jpg"  alt="placeholder" />
          </div>
          <div className="about-right w-[100%] flex flex-col justify-center align-middle p-10 gap-8">
           <h2 className='text-[--yellow] text-[2.5rem] font-bold'>About Us</h2>
           <p className='text-[1rem] text-[--white] w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           <button className='w-[8rem] h-[2.4rem] bg-[--yellow] text-[--black] rounded-[1.2rem]'>Let's talk</button> 
          </div>
</div>
        
        <div className="about-mission flex items-center justify-between p-10 m-10">
           <div className="mission-left flex flex-col align-middle justify-center gap-6">
           <h2 className='text-[--yellow] text-[2.5rem] font-bold'>Our Mission</h2>
           <p className='text-[1rem] text-[--white] w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           <button className='w-[8rem] h-[2.4rem] bg-[--yellow] text-[--black] rounded-[1.2rem]'>Let's talk</button> 
</div>
           
           <div className="mission-right w-[100%]">
            <img src="placeholder.jpg" alt="placeholder" />
           </div>
          </div>

          <div className="vision flex items-end justify-between p-10 m-10">
            <div className="vision-left flex flex-col align-middle justify-center gap-6">
           <h2 className='relative text-[--yellow] text-[2rem] font-bold after:contents:"" after:w-[10%] after:h-[2px] after:bg-[--yellow] after:left-0 after:bottom-[10%] after:absolute'>Our Vision</h2>
           <p className='text-[1rem] text-[--white] w-[70%]'> 251 Communicatin is a dynamic agency dedicated to bridging the gap between brands and their audiences. With a passion for storytelling and a deep understanding of digital landscapes, we deliver innovative communication strategies that drive results. At 251 Communicatin, we believe in the power of clear, authentic communication. Our mission is to help businesses build strong relationships with their customers through strategic messaging and engaging content.</p>
           </div>


          </div>
        </div>
    </section>

  )
}

export default Abouthero