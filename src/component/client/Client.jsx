import React from 'react'
import Header from '../header/Header'
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";

import ClientLogo1 from '../../asset/Clients/Clients logo 1-01.png'
import ClientLogo2 from '../../asset/Clients/Clients logo 1-02.png'
import ClientLogo3 from '../../asset/Clients/Clients logo 1-03.png'
import ClientLogo4 from '../../asset/Clients/Clients logo 1-04.png'
import ClientLogo5 from '../../asset/Clients/Clients logo 1-05.png'
import ClientLogo6 from '../../asset/Clients/Clients logo 1-06.png'
import ClientLogo7 from '../../asset/Clients/Clients logo 1-07.png'
import ClientLogo8 from '../../asset/Clients/Clients logo 1-08.png'
import ClientLogo9 from '../../asset/Clients/Clients logo 1-09.png'
import ClientLogo10 from '../../asset/Clients/Clients logo 1-10.png'
import ClientLogo11 from '../../asset/Clients/Clients logo 1-11.png'
import ClientLogo12 from '../../asset/Clients/Clients logo 1-12.png'
import ClientLogo13 from '../../asset/Clients/Clients logo 1-13.png'
import ClientLogo14 from '../../asset/Clients/Clients logo 1-14.png'
import ClientLogo15 from '../../asset/Clients/Clients logo 1-15.png'
import ClientLogo16 from '../../asset/Clients/Clients logo 1-16.png'
import ClientLogo17 from '../../asset/Clients/Clients logo 1-17.png'
import ClientLogo18 from '../../asset/Clients/Clients logo 1-18.png'
import ClientLogo19 from '../../asset/Clients/Clients logo 1-19.png'
import ClientLogo20 from '../../asset/Clients/Clients logo 1-20.png'
import ClientLogo21 from '../../asset/Clients/Clients logo 1-21.png'
import ClientLogo22 from '../../asset/Clients/Clients logo 1-22.png'
import ClientLogo23 from '../../asset/Clients/Clients logo 1-23.png'
import ClientLogo24 from '../../asset/Clients/Clients logo 1-24.png'
import ClientLogo25 from '../../asset/Clients/Clients logo 1-25.png'
import ClientLogo26 from '../../asset/Clients/Clients logo 1-26.png'
import ClientLogo27 from '../../asset/Clients/Clients logo 1-27.png'
import ClientLogo28 from '../../asset/Clients/Clients logo 1-28.png'
import ClientLogo29 from '../../asset/Clients/Clients logo 1-29.png'
import ClientLogo30 from '../../asset/Clients/Clients logo 1-30.png'
import ClientLogo31 from '../../asset/Clients/Clients logo 1-31.png'
import ClientLogo32 from '../../asset/Clients/Clients logo 1-32.png'
import ClientLogo33 from '../../asset/Clients/Clients logo 1-33.png'
import ClientLogo34 from '../../asset/Clients/Clients logo 1-34.png'
import ClientLogo35 from '../../asset/Clients/Clients logo 1-35.png'
import ClientLogo36 from '../../asset/Clients/Clients logo 1-36.png'
import ClientLogo37 from '../../asset/Clients/Clients logo 1-37.png'
import ClientLogo38 from '../../asset/Clients/Clients logo 1-38.png'
import ClientLogo39 from '../../asset/Clients/Clients logo 1-39.png'
import ClientLogo40 from '../../asset/Clients/Clients logo 1-40.png'
import ClientLogo41 from '../../asset/Clients/Clients logo 1-41.png'
import ClientLogo42 from '../../asset/Clients/Clients logo 1-42.png'
import ClientLogo43 from '../../asset/Clients/Clients logo 1-43.png'
import ClientLogo44 from '../../asset/Clients/Clients logo 1-44.png'
import { Canvas } from '@react-three/fiber';
import { Stars } from '@mui/icons-material';
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Client = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200"
    >
     <Header />   
     <div className="client-container">
       <div className='p-20'>
        <h1 className='text-[3rem] text-[--white] font-[500] '>WHO WE ARE...</h1>
        <div className='bg-[--white] p-6  grid grid-cols-8' >
       <motion.img src={ClientLogo1} alt="client" className='w-[80%]' whileHover={{ scale: 1.1 }}transition={{ type: "spring", stiffness: 300 }}/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo2} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo3} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo4} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo5} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo6} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo7} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo8} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo9} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo10} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo11} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo12} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo13} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo14} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo15} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo16} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo17} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo18} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo19} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo11} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo12} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo13} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo14} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo15} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo16} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo17} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo18} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo19} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo20} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo21} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo22} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo23} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo24} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo25} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo26} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo27} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo28} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo29} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo30} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo31} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo32} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo33} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo34} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo35} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo36} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo37} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo38} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo39} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo40} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo41} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo42} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo43} alt="client" className='w-[80%]'/>
        <motion.img whileHover={{ scale:1.1}} transition={{type:"spring", stiffness: 300}} src={ClientLogo44} alt="client" className='w-[80%]'/>
        </div>
        </div>
     </div>

      {/* Aurora Stars Animation */}
      
     </motion.section>
  )
}

export default Client