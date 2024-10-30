import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Herovideo from '../../asset/hero-video.mp4';
import Abouthero from '../Abouthero/Abouthero';
import Client from '../client/Client';
import Logo from '../../asset/logo_main.png';
import Footer from '../footer/Footer';



const Homehero = () => {
  return (
    <section style={{ width: '100%', padding: '0', margin: '0' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <motion.video
          style={{
            width: '100%',
            height: 'auto',
            position: 'relative',
          }}
          initial={{ x: '7rem', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 4,
            type: 'spring',
          }}
          src={Herovideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Render About Hero and Client sections */}
      <Abouthero />
      <Client />

      {/* Footer */}
      <Footer/>
  
    </section>
  );
};

export default Homehero;
