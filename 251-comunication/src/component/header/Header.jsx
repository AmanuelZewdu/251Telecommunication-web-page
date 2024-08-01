import React from 'react'
import { CiDesktop } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { motion } from 'framer-motion';
import  Logo from '../../asset/logo1.png'
import { Link } from 'react-router-dom';
const Header = () => {
    const containerVariants = {
        hover: {
          rotate: 360,
          transition: {
            duration: 1.2, // 
            ease: 'easeInOut'
          }
        }
      };
  
  
    return (
 <section className="header-wrapper ">
    <div className="header-container p-[70px] px-[40px] flex justify-between items-center ">
       
       <motion.img variants={containerVariants}
      whileHover="hover"  src={Logo} className='w-[6rem] h-[10%] text-[--white] hover:cursor-pointer' alt='logo'/>
       
     <div className='navbar'>
        <ul className='flex items-center justify-center gap-16 text-[--white1]'>
        <Link to='/'>  <motion.li  variants={containerVariants}
      whileHover="hover"
       className='hover:cursor-pointer hover:text-[--yellow]'>Home </motion.li> </Link>
          <Link to='/culture'>  <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'> culture </motion.li> </Link>
            <Link to='/about'> <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'>About</motion.li> </Link>
            <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'>clients</motion.li>
            <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'>News</motion.li>
            <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'>contact</motion.li>
            <motion.li variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'>carer</motion.li>
</ul>
</div>
  <div className="header-icons flex items-center justify-center gap-8 text-[--white1]">
  <motion.div variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]' >
  <CiDesktop   size={45} />
  </motion.div>
 <motion.div variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'> 
  <CiMobile3  size={45}/>
  </motion.div>
  </div>
 <div>

 </div>

     

    </div>
 </section>
)
}

export default Header