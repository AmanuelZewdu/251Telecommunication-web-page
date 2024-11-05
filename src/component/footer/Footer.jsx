import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Logo from '../../asset/logo_main.png';
import twitter_logo from "../../asset/twitter_logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';



const links = [
  { path: '/', text: 'Home' },
  { path: '/services', text: 'Services' },
  { path: '/work', text: 'Our Work' },
  { path: '/news', text: 'News' },
  { path: '/carer', text: 'Career' },
];

const serviceLinks = [
  { path: '/services#experential', text: 'Experiential' },
  { path: '/services#creative', text: 'Creative' },
  { path: '/services#digital', text: 'Digital' },
  { path: '/services#pr', text: 'PR' },
  { path: '/services#production', text: 'Production' },
  { path: '/services#research', text: 'Research' },
  { path: '/services#vas', text: 'VAS' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/share/PvXZUCLbnHdwYJ2i/?mibextid=qi2Omg', icon: <FaFacebookF />, label: 'Facebook' },
  { 
    href: 'https://x.com/251Comms?t=9RKQBGw9DXV_D9sho9UbjQ&s=09', 
    icon: <img src={twitter_logo} alt="Twitter" style={{ width: '1em', height: '1em' }} />, 
    label: 'Twitter' 
  },
  { href: 'https://www.linkedin.com/company/251-communications-&-marketing-plc/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/251comms?igsh=MTN4aGlyNTRhZTQ4NA==', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.tiktok.com/@251comms?_t=8kgy96HUmF3&_r=1', icon: <FaTiktok />, label: 'TikTok' },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#fff',
        color: '#000',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderTop: '3px solid rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap',
      }}
    >
      {/* Logo Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.img
          src={Logo}
          alt="logo"
          style={{ maxHeight: '80px', cursor: 'pointer', marginBottom: '15px' }}
          variants={{
            hover: { rotate: 360, transition: { duration: 1.2, ease: 'easeInOut' } },
          }}
          whileHover="hover"
        />
        <div style={{ textAlign: 'center', color: '#333', fontSize: '0.9rem', marginTop: '15px' }}>
          <p style={{ margin: '0' }}>Aster Plaza, 3rd Floor, Meskel Flower, Bole</p>
          <p style={{ margin: '0' }}>+251 116 630 182</p>
          <p style={{ margin: '0' }}>Info@251communications.com</p>
          <p style={{ margin: '0' }}>Addis Ababa, Ethiopia</p>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 style={{ color: '#000', marginBottom: '15px' }}>Quick Links</h4>
        {links.map((link, index) => (
     <Link
     key={index}
     to={link.path}
     onClick={() => window.scrollTo(0, 0)}
     style={{
       color: '#555',
       textDecoration: 'none',
       fontSize: '0.9rem',
       padding: '6px 0',
       transition: 'color 0.3s',
     }}
     onMouseEnter={(e) => (e.target.style.color = '#000')}
     onMouseLeave={(e) => (e.target.style.color = '#555')}
   >
     {link.text}
   </Link>
   
        ))}
      </div>

      {/* Services */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 style={{ color: '#000', marginBottom: '15px' }}>Our Services</h4>
        {serviceLinks.map((service, index) => (
          <HashLink
            key={index}
            smooth
            to={service.path}
            style={{
              color: '#555',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '6px 0',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#000')}
            onMouseLeave={(e) => (e.target.style.color = '#555')}
          >
            {service.text}
          </HashLink>
        ))}
      </div>

      {/* Stay Connected / Contact Button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',paddingTop:"90px",marginTop: '20px' }}>
      
        <Link to='/contact' className="hidden md:flex pr-4">
          <button className="w-[7.5rem] h-[2.5rem] bg-[--yellow] text-[--black] rounded-[1.4rem]">Contact Us</button>
        </Link>
      </div>

      {/* Social Media Links */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
       
        <div style={{ display: 'flex', gap: '15px' ,justifyContent: 'center',paddingTop:"100px"}}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#555',
                textDecoration: 'none',
                fontSize: '1.5rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#000')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
