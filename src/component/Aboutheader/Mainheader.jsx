import React from 'react'
import { CiDesktop } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { motion } from 'framer-motion';
import  Logo from '../../asset/logo.png'
import { NavLink , useLocation} from 'react-router-dom';
const Mainheader = () => {
    const containerVariants = {
        hover: {
          rotate: 360,
          transition: {
            duration: 1.2, // 
            ease: 'easeInOut'
          }
        }
      };
    const location = useLocation()
    const links = [
      { path: '/', text: 'Home' },
      { path: '/culture', text: 'Culture' },
      { path: '/about', text: 'About' },
      { path: '/clients', text: 'Clients' },
      { path: '/news', text: 'News' },
      { path: '/contact', text: 'Contact' },
      { path: '/carer', text: 'Carer' },
    ];
 
    return (
    <section className="header-wrapper bg-[--white] ">
    <div className="header-container p-[70px] px-[40px] flex justify-between items-center ">
       
       <motion.img variants={containerVariants}
      whileHover="hover"  src={Logo} className='w-[7rem] h-[25%]  hover:cursor-pointer' alt='logo'/>
       
     <div className='navbar'>
     <ul className='flex items-center justify-center gap-16 text-[--black]'>
      {links.map((link) => (
        <NavLink
          key={link.path} 
          to={link.path}
          className={`
            hover:cursor-pointer hover:text-[--yellow]
            ${location.pathname === link.path ? 'text-[--yellow]' : ''}
          `}
        >
          <motion.li variants={containerVariants} whileHover="hover">
            {link.text}
          </motion.li>
        </NavLink>
      ))}
    </ul>
</div>
  <div className="header-icons flex items-center justify-center gap-8 text-[--black]">
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

export default Mainheader