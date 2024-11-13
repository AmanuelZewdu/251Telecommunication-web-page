import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Logo from '../../asset/logo_main.png';
import twitter_logo from "../../asset/twitter_logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import './footer.css';

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
    <footer className="footer-container">
      {/* Logo Section */}
      <div className="footer-section">
        <motion.img
          src={Logo}
          alt="logo"
          className="logo"
          variants={{
            hover: { rotate: 360, transition: { duration: 1.2, ease: 'easeInOut' } },
          }}
          whileHover="hover"
        />
        <div className="contact-info">
          <p>Aster Plaza, 3rd Floor, Meskel Flower, Bole</p>
          <p>+251 116 630 182</p>
          <p>Info@251communications.com</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h4>Quick Links</h4>
        {links.map((link, index) => (
          <Link key={index} to={link.path} onClick={() => window.scrollTo(0, 0)} className="footer-link">
            {link.text}
          </Link>
        ))}
      </div>

      {/* Services */}
      <div className="footer-section">
        <h4>Our Services</h4>
        {serviceLinks.map((service, index) => (
          <HashLink key={index} smooth to={service.path} className="footer-link">
            {service.text}
          </HashLink>
        ))}
      </div>

      {/* Stay Connected */}
      <div className="footer-section contact-section">
        <Link to="/contact">
          <button className="contact-button">Contact Us</button>
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="footer-section social-links">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
