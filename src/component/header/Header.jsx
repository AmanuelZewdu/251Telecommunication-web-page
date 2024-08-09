import React, { useEffect, useState } from 'react'
import { CiDesktop } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { motion } from 'framer-motion';
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

import  Logo from '../../asset/logo1.png'
import { NavLink , useLocation} from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [clientWidth, setClientWidth] = useState(typeof document !== 'undefined' ? document.documentElement.clientWidth : 0)
    useEffect(() => {
      const handleResize = () => setClientWidth(document.documentElement.clientWidth);
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const getMenustyle = (menuOpen, clientWidth) => {
       if(clientWidth <= 800 ) {
        return{ visibility: !menuOpen ? "hidden" : ""}
       }
      
    }
  
  
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
 <section className="header-wrapper overflow-x-hidden p-0 m-0 ">
    <div className="header-container p-10 md:p-[70px] md:px-[40px] flex justify-between">
       
       <motion.img variants={containerVariants}
      whileHover="hover"  src={Logo} className='w-[6rem] h-[10%] text-[--white] hover:cursor-pointer' alt='logo'/>
       
     <div style={getMenustyle(menuOpen, clientWidth)} className='navbar absolute   bg-[--brown] z-10 p-10 right-0 md:right-[22%] lg:right-[20%] md:ml-0 md:bg-transparent  px-24'>
     <ul className='flex flex-col gap-6 p-4 m-0   items-center justify-center md:gap-3 lg:gap-8 xl:gap-16 text-[--white1] md:flex-row'>
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
  <div className="header-icons hidden  md:flex items-center justify-center gap-8 text-[--white1]">
  <motion.div variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]' >
  <CiDesktop   size={45} />
  </motion.div>
 <motion.div variants={containerVariants}
      whileHover="hover" className='hover:cursor-pointer hover:text-[--yellow]'> 
  <CiMobile3  size={45}/>
  </motion.div>
  </div>

  <button className=' absolute right-2  z-50  flex md:hidden  ' onClick={() => setMenuOpen((prev) => !prev) }>
 {menuOpen ? <IoMdClose size={35} /> :  <FcMenu size={35} /> 
} 
  </button>


     

    </div>
 </section>
)
}

export default Header