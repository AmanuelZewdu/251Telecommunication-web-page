import React, { useEffect, useState } from 'react';
import { CiDesktop, CiMobile3 } from "react-icons/ci";
import { motion } from 'framer-motion';
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Button } from '@mui/material'; // Material-UI imports
import { ArrowDropDown } from '@mui/icons-material'; // Arrow icon import

import Logo from '../../asset/logo1.png';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(
    typeof document !== 'undefined' ? document.documentElement.clientWidth : 0
  );
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null); // State for the "About" dropdown menu

  useEffect(() => {
    const handleResize = () => setClientWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMenustyle = (menuOpen, clientWidth) => {
    if (clientWidth <= 800) {
      return { visibility: !menuOpen ? "hidden" : "" };
    }
  };

  const containerVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 1.2,
        ease: 'easeInOut'
      }
    }
  };

  const location = useLocation();

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' }, // Will have a dropdown
    { path: '/clients', text: 'Clients' },
    { path: '/news', text: 'News' },
    { path: '/contact', text: 'Contact' },
    { path: '/carer', text: 'Carer' },
  ];

  // Handlers for the About dropdown menu
  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutAnchorEl(null);
  };

  return (
    <section className="header-wrapper overflow-x-hidden p-0 m-0">
      <div className="header-container p-10 md:p-[70px] md:px-[40px] flex items-center justify-between">
        <motion.img
          variants={containerVariants}
          whileHover="hover"
          src={Logo}
          className="w-[6rem] h-[10%] text-[--white] hover:cursor-pointer"
          alt="logo"
        />

        <div
          style={getMenustyle(menuOpen, clientWidth)}
          className="navbar absolute z-50 bg-[--brown] p-10 right-0 md:right-[22%] lg:right-[20%] md:ml-0 md:bg-transparent px-24"
        >
          <ul
            className={`flex flex-col text-[.8rem] gap-6 p-4 m-0 items-center justify-center md:gap-3 lg:gap-8 xl:gap-12 text-[--white1] md:flex-row `}
          >
            {links.map((link) =>
              link.text === 'About' ? (
                <li key={link.path}>
                  
                  <Link to='/about' className={`${location.pathname === '/about' ? 'text-[--yellow]' : ''}`} style={{ color: location.pathname === '/about' ? 'var(--yellow)' : 'inherit' }}>About</Link>
                  <Button
                    aria-controls="about-menu"
                    aria-haspopup="true"
                    onClick={handleAboutClick}
                    
                  ><ArrowDropDown /> {/* Icon added next to "About" */}
                  </Button>
                  <Menu
                    id="about-menu"
                    anchorEl={aboutAnchorEl}
                    open={Boolean(aboutAnchorEl)}
                    onClose={handleAboutClose}
                  >
                    <MenuItem><Link to='/about/expermental'>expermental</Link></MenuItem>
                    <MenuItem ><Link to='/about/creative'>creative</Link></MenuItem>
                    <MenuItem><Link to='/about/digital'>digital</Link></MenuItem>
                    <MenuItem><Link to='/about/pr'>pr</Link></MenuItem>
                    <MenuItem><Link to='/about/production'>production</Link></MenuItem>
                    <MenuItem><Link to='/about/research'>research</Link></MenuItem>
                  </Menu>
                </li>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`hover:cursor-pointer hover:text-[--yellow] ${
                    location.pathname === link.path ? 'text-[--yellow]' : ''
                  }`}
                >
                  <motion.li variants={containerVariants} whileHover="hover">
                    {link.text}
                  </motion.li>
                </NavLink>
              )
            )}
          </ul>
        </div>

        <button className="w-[7.5rem] h-[2.5rem] bg-[--yellow] text-[--black] rounded-[1.4rem]">Contact Us</button>

        <button className="absolute right-2 z-50 flex md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <IoMdClose size={35} /> : <FcMenu size={35} />}
        </button>
      </div>
    </section>
  );
};

export default Header;
