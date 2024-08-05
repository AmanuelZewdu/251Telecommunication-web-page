import React from 'react'
import Heroimg from '../../asset/hero-img.png'
import Herotext from '../../asset/home-text.png'
import Herotext1 from '../../asset/home-text2.png'
import { motion } from 'framer-motion'
const Homehero = () => {
  return (
   <section hero-wrapper>
    <div className="hero-container flex  relative  justify-center m-auto p-20 mb-20 overflow-hidden">
      
      <div className=' w-[100%]  '>
      <img src={Herotext} alt='text' className='  h-[71%] w-[10%] mr-[-35%] absolute'  />
      </div>
            
        
      <motion.img  className='w-[70%]'   initial={{x: "7rem", opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
        duration: 4,
        type: "spring"  }} src={Heroimg} alt="hero"  />
        
        <div className='mt-[25%] z-10 w-[100%]'>
        <img src={Herotext1} alt='text' className='w-[25%] absolute ml-[-10%]'  />
        </div>
    </div>
   </section>
  )
}

export default Homehero