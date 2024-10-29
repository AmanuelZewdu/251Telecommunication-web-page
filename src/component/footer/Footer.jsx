import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Logo from '../../asset/logo_main.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing icons

const links = [
  { path: '/', text: 'Home' },
  { path: '/services', text: 'Services' },
  { path: '/work', text: 'Our Work' },
  { path: '/news', text: 'News' },
  { path: '/career', text: 'Career' },
];

const serviceLinks = [
  { path: '#experential', text: 'Experiential' },
  { path: '#creative', text: 'Creative' },
  { path: '#digital', text: 'Digital' },
  { path: '#pr', text: 'PR' },
  { path: '#production', text: 'Production' },
  { path: '#research', text: 'Research' },
  { path: '#vas', text: 'VAS' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/share/PvXZUCLbnHdwYJ2i/?mibextid=qi2Omg', icon: <FaFacebookF />, label: 'Facebook' },
  { href: 'https://x.com/251Comms?t=9RKQBGw9DXV_D9sho9UbjQ&s=09', icon: <FaTwitter />, label: 'Twitter' },
  { href: 'https://www.linkedin.com/company/251-communications-&-marketing-plc/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/251comms?igsh=MTN4aGlyNTRhZTQ4NA==', icon: <FaInstagram />, label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1b1b2f',
        color: '#eee',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderTop: '3px solid rgba(68, 68, 68, 0.5)',
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
        <div style={{ textAlign: 'center', color: '#ccc', fontSize: '0.9rem', marginTop: '15px' }}>
          <p style={{ margin: '0' }}>Aster Plaza, 3rd Floor, Meskel Flower, Bole</p>
          <p style={{ margin: '0' }}>+251 116 630 182</p>
          <p style={{ margin: '0' }}>Info@251communications.com</p>
          <p style={{ margin: '0' }}>Addis Ababa, Ethiopia</p>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 style={{ color: '#eee', marginBottom: '15px' }}>Quick Links</h4>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={{
              color: '#bbb',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '6px 0',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = '#bbb')}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Services */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 style={{ color: '#eee', marginBottom: '15px' }}>Our Services</h4>
        {serviceLinks.map((service, index) => (
          <HashLink
            key={index}
            smooth
            to={service.path}
            style={{
              color: '#bbb',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '6px 0',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = '#bbb')}
          >
            {service.text}
          </HashLink>
        ))}
      </div>

      {/* Stay Connected / Newsletter */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h4 style={{ color: '#eee', marginBottom: '15px' }}>Stay Connected</h4>
     

<Link to='/contact' className="hidden md:flex  pr-4">
<button className="w-[7.5rem] h-[2.5rem] bg-[--yellow] text-[--black] rounded-[1.4rem]">Contact Us</button>
        </Link>
     
      </div>

      {/* Social Media Links */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <h4 style={{ color: '#eee', marginBottom: '15px' }}>Follow Us</h4>
        <div style={{ display: 'flex', gap: '15px' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#bbb',
                textDecoration: 'none',
                fontSize: '1.5rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = '#bbb')}
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
