import React from 'react'
import Heroimg from '../../asset/hero-img.png'
import Herotext from '../../asset/home-text.png'
import Herotext1 from '../../asset/home-text2.png'
import { motion } from 'framer-motion'
import Herovideo from '../../asset/hero-video.mp4'; 
const Homehero = () => {
  return (
   <section className='hero-wrapper '>
    <div className="hero-container flex  relative  justify-center  md:p-20 p-10 md:mb-20 mb-5 overflow-hidden">
      
      <div className=' w-[100%]  md:mr-0'>
      <img src={Herotext} alt='text' className='  h-[75%] z-10 w-[15%] md:mr-[-35%] absolute'  />
      </div>
            
        
      {/* <motion.img  className='md:w-[70%]  h-[150%] w-[100%]'   initial={{x: "7rem", opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
        duration: 4,
        type: "spring"  }} src={Heroimg} alt="hero"  /> */}
              <motion.video
          className='md:w-[70%] h-[150%] w-[100%]'
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: "spring",
          }}
          src={Herovideo}
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className='mt-[25%] z-10 w-[100%]'>
        <img src={Herotext1} alt='text' className='w-[25%]   absolute ml-[-10%]'  />
        </div>
    </div>
   </section>
  )
}

export default Homehero