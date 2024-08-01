import React from 'react'
import Heroimg from '../../asset/hero-img.png'
import { motion } from 'framer-motion'
const Homehero = () => {
  return (
   <section hero-wrapper>
    <div className="hero-container w-[70%] justify-center m-auto p-[20] overflow-x-hidden">
      <motion.img    initial={{x: "7rem", opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
        duration: 4,
        type: "spring"  }} src={Heroimg} alt="hero"  />
    </div>
   </section>
  )
}

export default Homehero