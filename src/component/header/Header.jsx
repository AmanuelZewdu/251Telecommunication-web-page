import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FcMenu } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Button } from '@mui/material'; 
import { ArrowDropDown } from '@mui/icons-material'; 

import Logo from '../../asset/logo1.png';
import { Link, NavLink, useLocation } from 'react-router-dom';

// const Header = () => {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [clientWidth, setClientWidth] = useState(
//     typeof document !== 'undefined' ? document.documentElement.clientWidth : 0
//   );
//   const [aboutAnchorEl, setAboutAnchorEl] = useState(null); 

//   useEffect(() => {
//     const handleResize = () => setClientWidth(document.documentElement.clientWidth);
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const location = useLocation();

//   const links = [
//     { path: '/', text: 'Home' },
//     { path: '/about', text: 'About' }, 
//     { path: '/clients', text: 'Clients' },
//     { path: '/news', text: 'News' },
//     { path: '/work', text: 'Works' },
//     { path: '/carer', text: 'Career' },
//     { path: '/services', text: 'Service' },
//   ];

  
//   const handleAboutClick = (event) => {
//     setAboutAnchorEl(event.currentTarget);
//   };

//   const handleAboutClose = () => {
//     setAboutAnchorEl(null);
//   };

//   return (
//     <section className="header-wrapper overflow-x-hidden p-0 m-0">
//       <div className="header-container p-10 md:p-[70px] md:px-[40px] flex items-center justify-between">
//         <motion.img
//           variants={{
//             hover: {
//               rotate: 360,
//               transition: { duration: 1.2, ease: 'easeInOut' },
//             },
//           }}
//           whileHover="hover"
//           src={Logo}
//           className="w-[6rem] h-[10%] text-[--white] hover:cursor-pointer"
//           alt="logo"
//         />

      
//         {menuOpen && clientWidth <= 800 && (
//   <div className="navbar absolute z-50 bg-gradient-to-br from-blue-500 to-black p-10 right-0 top-0 w-full">
 
//     <button 
//       className="absolute top-4 right-4 z-50" 
//       onClick={() => setMenuOpen(false)}
//     >
//       <IoMdClose size={35} />
//     </button>

//     <ul className="flex flex-col text-[.8rem]  gap-6 p-4 m-0  justify-center text-[--white1]">
//       {links.map((link) =>
//         link.text === 'About' ? (
//           <li key={link.path} className="flex justify-center items-center w-[100%] ml-8">
//             <div className="flex items-center justify-center ">
//               <Link to='/about' className={`${location.pathname === '/about' ? 'text-[--yellow]' : ''} hover:text-[--yellow]`}>
//                 About
//               </Link>
//               <Button
//                 aria-controls="about-menu"
//                 aria-haspopup="true"
//                 onClick={handleAboutClick}
//                 className="min-w-0 p-0 m-0"
//                 style={{ color: location.pathname === '/about' ? 'var(--yellow)' : 'inherit' }}
//               >
//                 {/* <ArrowDropDown /> */}
//               </Button>
//             </div>
//             <Menu
//               id="about-menu"
//               anchorEl={aboutAnchorEl}
//               open={Boolean(aboutAnchorEl)}
//               onClose={handleAboutClose}
//               className="p-8"
//             >
//               {/* <MenuItem><Link to='/about/expermental'>Experimental</Link></MenuItem>
//               <MenuItem><Link to='/about/creative'>Creative</Link></MenuItem>
//               <MenuItem><Link to='/about/digital'>Digital</Link></MenuItem>
//               <MenuItem><Link to='/about/pr'>PR</Link></MenuItem>
//               <MenuItem><Link to='/about/production'>Production</Link></MenuItem>
//               <MenuItem><Link to='/about/research'>Research</Link></MenuItem> */}
//             </Menu>
//           </li>
//         ) : (
//           <NavLink
//             key={link.path}
//             to={link.path}
//             className={`hover:cursor-pointer w-[100%] flex justify-center items-center hover:text-[--yellow] ${location.pathname === link.path ? 'text-[--yellow]' : ''}`}
//           >
//             <motion.li className="w-full text-center" variants={{ hover: { rotate: 360, transition: { duration: 1.2, ease: 'easeInOut' } } }} whileHover="hover">
//               {link.text}
//             </motion.li>
//           </NavLink>
//         )
//       )}
//     </ul>
//   </div>
// )}
       
//         <div className="hidden md:flex md:flex-row">
//           <ul className="flex text-[.8rem] gap-6 items-center text-[--white1]">
//             {links.map((link) =>
//               link.text === 'About' ? (
//                 <li key={link.path} className="relative">
//                   <Link to='/about' className={`${location.pathname === '/about' ? 'text-[--yellow]' : ''}`}>About</Link>
//                   <Button
//                     aria-controls="about-menu"
//                     aria-haspopup="true"
//                     onClick={handleAboutClick}
//                   ><ArrowDropDown /></Button>
//                   <Menu
//                     id="about-menu"
//                     anchorEl={aboutAnchorEl}
//                     open={Boolean(aboutAnchorEl)}
//                     onClose={handleAboutClose}
//                     className="p-8"
//                   >
//                     <MenuItem><Link to='/about/expermental'>Experimental</Link></MenuItem>
//                     <MenuItem><Link to='/about/creative'>Creative</Link></MenuItem>
//                     <MenuItem><Link to='/about/digital'>Digital</Link></MenuItem>
//                     <MenuItem><Link to='/about/pr'>PR</Link></MenuItem>
//                     <MenuItem><Link to='/about/production'>Production</Link></MenuItem>
//                     <MenuItem><Link to='/about/research'>Research</Link></MenuItem>
//                   </Menu>
//                 </li>
//               ) : (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   className={`hover:cursor-pointer hover:text-[--yellow] ${location.pathname === link.path ? 'text-[--yellow]' : ''}`}
//                 >
//                   {link.text}
//                 </NavLink>
//               )
//             )}
//           </ul>
//         </div>

      
//         <Link to='/contact' className="hidden md:flex">
//           <button className="w-[7.5rem] h-[2.5rem] bg-[--yellow] text-[--black] rounded-[1.4rem]">Contact Us</button>
//         </Link>

//         <button className="absolute right-2 z-50 flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {!menuOpen && <FcMenu size={35} />}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Header;



const Header = () => {
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
    { path: '/about', text: 'About' }, 
    { path: '/clients', text: 'Clients' },
    { path: '/news', text: 'News' },
    { path: '/work', text: 'Works' },
    { path: '/carer', text: 'Career' },
    { path: '/services', text: 'Service' }, // This will have a dropdown
  ];

  // Handlers for the Service dropdown menu
  const handleServiceClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceAnchorEl(null);
  };

  // Function to scroll to specific section on the Services page
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust offset for fixed header
        behavior: 'smooth',
      });
    }
    setServiceAnchorEl(null); // Close the dropdown after selection
  };

  return (
    <section className="header-wrapper overflow-x-hidden p-0 m-0">
      <div className="header-container p-10 md:p-[70px] md:px-[40px] flex items-center justify-between">
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
                    <Menu
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
                      <MenuItem onClick={() => handleScrollToSection('vas')}>Vas</MenuItem>
                    </Menu>
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
          <ul className="flex text-[.8rem] gap-6 items-center text-[--white1]">
            {links.map((link) =>
              link.text === 'Service' ? (
                <li key={link.path} className="relative">
                  <Link
                    to="/services"
                    className={`${location.pathname === '/services' ? 'text-[--yellow]' : ''}`}
                  >
                    Service
                  </Link>
                  <Button
                    aria-controls="service-menu"
                    aria-haspopup="true"
                    onClick={handleServiceClick}
                  />
                  <Menu
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
                    <MenuItem onClick={() => handleScrollToSection('vas')}>Vas</MenuItem>
                  </Menu>
                </li>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`hover:cursor-pointer hover:text-[--yellow] ${location.pathname === link.path ? 'text-[--yellow]' : ''}`}
                >
                  {link.text}
                </NavLink>
              )
            )}
          </ul>
        </div>

        <Link to='/contact' className="hidden md:flex">
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
