import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Button } from '@mui/material'; 
import { ArrowDropDown } from '@mui/icons-material'; 

import Logo from '../../asset/logo_main.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(
    typeof document !== 'undefined' ? document.documentElement.clientWidth : 0
  );
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null); // State for the "Service" dropdown menu

  useEffect(() => {
    const handleResize = () => setClientWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();

  const links = [
    { path: '/', text: 'Home' },
 
    { path: '/services', text: 'Service' },

    { path: '/work', text: 'Our Work' },
    { path: '/event', text: 'Event' },
    { path: '/news', text: 'News' },
    { path: '/career', text: 'Career' },
  
  
  
  ];


  const handleServiceClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceAnchorEl(null);
  };

  
  const handleScrollToSection = (id) => {
    navigate('/services');

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: 'smooth',
      });
    }
    setServiceAnchorEl(null); 
  };

  return (
    <section
  className="header-wrapper fixed top-0 left-0 w-full z-10 bg-transparent"
  style={{
    position: 'absolute',                // Center within the parent
    top: '15%',                          // Vertical center
    left: '50%',                         // Horizontal center
    transform: 'translate(-50%, -50%)',  // Offset to center
    color: '#fff',                       // White text color
    zIndex: 10,
    width: '80%',                        // Adjust width as needed
    height: '6rem',                      // Fixed height for reduced header height
    textAlign: 'center',                 // Center-align text within the header
    border: 'none'                       // Remove border completely
  }}
>

  
      <div className="header-container md:px-[20px] flex items-center justify-between">
        <motion.img
          variants={{
            hover: {
              rotate: 360,
              transition: { duration: 1.2, ease: 'easeInOut' },
            },
          }}
          whileHover="hover"
          src={Logo}
          className="w-[6rem] h-[10%] hover:cursor-pointer"
          alt="logo"
        />

        {/* Mobile Menu */}
        {menuOpen && clientWidth <= 800 && (
          <div className="navbar absolute z-50 bg-gradient-to-br from-blue-500 to-black p-10 right-0 top-0 w-full">
            <button className="absolute top-4 right-4 z-50" onClick={() => setMenuOpen(false)}>
              <IoMdClose size={35} />
            </button>

            <ul className="flex flex-col text-[.8rem] gap-6 p-4 m-0 justify-center text-[--white1]">
              {links.map((link) =>
                link.text === 'Service' ? (
                  <li key={link.path} className="flex justify-center items-center w-[100%] ml-8">
                    <div className="flex items-center justify-center">
                      <Link
                        to="/services"
                        className={`${location.pathname === '/services' ? 'text-[--yellow]' : ''} hover:text-[--yellow]`}
                      >
                        Services
                      </Link>
                      <Button
                        aria-controls="service-menu"
                        aria-haspopup="true"
                        onClick={handleServiceClick}
                        className="min-w-0 p-0 m-0"
                        style={{ color: location.pathname === '/services' ? 'var(--yellow)' : 'inherit' }}
                      />
                          <ArrowDropDown />
                    </div>
                    {/* <Menu
                      id="service-menu"
                      anchorEl={serviceAnchorEl}
                      open={Boolean(serviceAnchorEl)}
                      onClose={handleServiceClose}
                    >
                      <MenuItem onClick={() => handleScrollToSection('experential')}>Experiential</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('creative')}>Creative</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('digital')}>Digital</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('pr')}>PR</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('production')}>Production</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('research')}>Research</MenuItem>
                      <MenuItem onClick={() => handleScrollToSection('vas')}>VAS</MenuItem>
                    </Menu> */}
                  </li>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`hover:cursor-pointer w-[100%] flex justify-center items-center hover:text-[--yellow] ${
                      location.pathname === link.path ? 'text-[--yellow]' : ''
                    }`}
                  >
                    <motion.li className="w-full text-center" variants={{ hover: { rotate: 360, transition: { duration: 1.2, ease: 'easeInOut' } } }} whileHover="hover">
                      {link.text}
                    </motion.li>
                  </NavLink>
                )
              )}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-row">
        <ul className="flex text-[1rem] gap-6 items-center  text-black"> {/* Increased the base font size */}
  {links.map((link) =>
    link.text === 'Service' ? (
      <li key={link.path} className="relative" onMouseEnter={handleServiceClick} onMouseLeave={handleServiceClose}>
        <Link
          to="/services"
          className={`font-bold text-[0.8rem] hover:cursor-pointer hover:text-[--yellow] ${location.pathname === link.path ? 'text-[--yellow]' : ''}`} 
        >
          Service
        </Link>

        {/* <Menu
          id="service-menu"
          anchorEl={serviceAnchorEl}
          open={Boolean(serviceAnchorEl)}
          onClose={handleServiceClose}
        >
          <MenuItem onClick={() => handleScrollToSection('experential')}>Experiential</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('creative')}>Creative</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('digital')}>Digital</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('pr')}>PR</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('production')}>Production</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('research')}>Research</MenuItem>
          <MenuItem onClick={() => handleScrollToSection('vas')}>VAS</MenuItem>
        </Menu> */}
      </li>
    ) : (
      <NavLink
        key={link.path}
        to={link.path}
        className={`font-bold text-[0.8rem] hover:cursor-pointer hover:text-[--yellow] ${location.pathname === link.path ? 'text-[--yellow]' : ''}`} // Added font size
      >
        {link.text}
      </NavLink>
    )
  )}
</ul>


        </div>

        <Link to='/contact' className="hidden md:flex  pr-4">
        <button className="w-[7.5rem] h-[2.5rem] bg-[--yellow] text-[--black] rounded-[1.4rem]">Contact Us</button>

        </Link>

        <button className="absolute right-2 z-50 flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen && <FcMenu size={35} />}
        </button>
      </div>
    </section>
  );
};

export default Header;
