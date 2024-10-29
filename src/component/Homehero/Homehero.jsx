// import React from 'react'
// import Heroimg from '../../asset/hero-img.png'
// import Herotext from '../../asset/home-text.png'
// import Herotext1 from '../../asset/home-text2.png'
// import { motion } from 'framer-motion'
// import Herovideo from '../../asset/hero-video.mp4'; 
// import Abouthero from '../Abouthero/Abouthero';
// import Client from '../client/Client'

// const Homehero = () => {
//   return (
//    <section className='hero-wrapper '>
//     <div className=" w-full h-full hero-container flex relative justify-center ">
      

//               <motion.video
//           className=''
//           initial={{ x: "7rem", opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{
//             duration: 4,
//             type: "spring",
//           }}
//           src={Herovideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
// {/*         
//         <div className='mt-[25%] z-10 w-[100%]'>
//         <img src={Herotext1} alt='text' className='w-[15%]   absolute ml-[-10%]'  />
//         </div> */}
//     </div>
//     <Abouthero />
//     <Client/>
//    </section>
//   )
// }

// export default Homehero
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
