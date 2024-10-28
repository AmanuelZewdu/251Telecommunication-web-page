// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
// import Header from "../../header/Header";
// import Tv from "../../../asset/tv.png";
// import Radio from "../../../asset/radio.png";
// import Print from "../../../asset/printer.png";
// import Ooh from "../../../asset/ooh.png";
// import Digitalads from "../../../asset/digital-ads.png";
// import Events from "../../../asset/events.png";
// import DirectMarketing from "../../../asset/direct-marketing.png";
// import ExpermentalMarketing from "../../../asset/expermental-marketing.png";
// import B2Bsales from "../../../asset/b2bsales.png";
// import GiveAways from "../../../asset/give-aways.png";
// import SamlingCampaign from "../../../asset/samlingcampaign.png";

// const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// const Expermental = () => {
//   const [offsetXATL, setOffsetXATL] = useState(0);
//   const [offsetXBTL, setOffsetXBTL] = useState(0);

//   useEffect(() => {
//     const scrollSpeedATL = 0.1; // Adjust speed for ATL
//     const scrollSpeedBTL = 0.1; // Adjust speed for BTL

//     const animateScrollATL = () => {
//       setOffsetXATL((prevOffsetX) => (prevOffsetX <= -100 ? 0 : prevOffsetX - scrollSpeedATL));
//     };
//     const animateScrollBTL = () => {
//       setOffsetXBTL((prevOffsetX) => (prevOffsetX <= -100 ? 0 : prevOffsetX - scrollSpeedBTL));
//     };

//     const intervalIdATL = setInterval(animateScrollATL, 16); // ~60 FPS for ATL
//     const intervalIdBTL = setInterval(animateScrollBTL, 16); // ~60 FPS for BTL

//     return () => {
//       clearInterval(intervalIdATL);
//       clearInterval(intervalIdBTL);
//     };
//   }, []);

//   // Aurora animation setup
//   const color = useMotionValue(COLORS_TOP[0]);

//   useEffect(() => {
//     animate(color, COLORS_TOP, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror",
//     });
//   }, [color]);

//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

//   return (
//     <motion.section
//       style={{ backgroundImage }}
//       className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200"
//     >
//       {/* Main Header */}
//       {/* <Header /> */}

//       {/* Content Section */}
//       <div className="relative flex-col z-10 p-10">
//      {/* <p>

// We are a full-fledged communications and public relations firm with offices in the  Addis Ababa, Ethiopia and Washington DC, Metropolitan Area. At 251 Communications, we manage our international and local clients’ communications, marketing, research, logistics, media, PR, branding and production needs. We have partnerships with many of the  leading service research and media agencies inside and outside of Ethiopia.
//      </p> */}
//   <p className="text-[--red] text-[1.7rem] font-[300] p-10" style={{

//   marginLeft: '1rem',  
//   marginRight: '1rem', 
//   textAlign: 'justify' ,
//   fontFamily: 'Montserrat, sans-serif' ,
//   color: '#F9AA19',
// }}>
//  We are a full-fledged communications and public relations firm with offices in  Addis Ababa, Ethiopia and Washington DC, Metropolitan Area.At 251 Communications, we manage our international and local clients’ communications, marketing, research, logistics, media, PR, branding and production needs. We have partnerships with many of the  leading service research and media agencies inside and outside of Ethiopia."
// </p>





//         <h1 className="text-[--red] text-[1.7rem] font-[100] p-10"
//         style={{
         
//           marginLeft: '1rem',  // Indent the block from the left
//           marginRight: '1rem', // Indent the block from the right
//           textAlign: 'justify' ,
//           color: '#F9AA19',
//         }} > Through the line Communications Touch Points Designed a 360 Brand Experiance</h1>
//         <div className="flex flex-col items-center gap-10">
//           {/* ATL Section */}
//           <motion.div
//             className="flex items-center gap-12 px-4"
//             style={{
//               display: "flex",
//               transform: `translateX(${offsetXATL}%)`,
//               whiteSpace: "nowrap",
//             }}
//           >
//             <span className="text-[2rem] md:text-[1.2rem] text-[--white]">ATL</span>
//             {[
//               { src: Tv, alt: "tv", label: "Tv" },
//               { src: Radio, alt: "radio", label: "Radio" },
//               { src: Print, alt: "print", label: "Print" },
//               { src: Ooh, alt: "ooh", label: "Ooh" },
//               { src: Digitalads, alt: "digital ads", label: "Digital Ads" },
//               { src: Events, alt: "events", label: "Events" },
//             ].map((item, index) => (
//               <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
//             >
//               <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
//               <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
//             </motion.div>
//             ))}
//           </motion.div>

//           {/* Horizontal Divider Line */}
//           <hr className="w-full border-t border-[--white] m-0" />

//           {/* BTL Section */}
//           <motion.div
//             className="flex items-center gap-12 px-4"
//             style={{
//               display: "flex",
//               transform: `translateX(${offsetXBTL}%)`,
//               whiteSpace: "nowrap",
//             }}
//           >
//             <span className="text-[2rem] md:text-[1.2rem] text-[--white]">BTL</span>
//             {[
//               { src: DirectMarketing, alt: "direct marketing", label: "Direct Marketing" },
//               { src: ExpermentalMarketing, alt: "expermental marketing", label: "Expermental Marketing" },
//               { src: B2Bsales, alt: "b2b sales", label: "B2B Sales" },
//               { src: GiveAways, alt: "giveaways", label: "Give Aways" },
//               { src: SamlingCampaign, alt: "sampling campaign", label: "Sampling Campaign" },
//             ].map((item, index) => (
//               <motion.div
//               key={index}
//               className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
//             >
//               <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
//               <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
//             </motion.div>
//             ))}
//           </motion.div>
//         </div>


//         <div className="flex flex-col items-center gap-10">
//   {/* ATL Section */}
//   <motion.div
//     className="flex items-center gap-12 px-4"
//     style={{
//       display: "flex",
//       transform: `translateX(${offsetXATL}%)`,
//       whiteSpace: "nowrap",
//     }}
//   >
//     <span className="text-[2rem] md:text-[1.2rem] text-[--white]">ATL</span>
//     {[
//       { src: Tv, alt: "tv", label: "Tv" },
//       { src: Radio, alt: "radio", label: "Radio" },
//       { src: Print, alt: "print", label: "Print" },
//       { src: Ooh, alt: "ooh", label: "Ooh" },
//       { src: Digitalads, alt: "digital ads", label: "Digital Ads" },
//       { src: Events, alt: "events", label: "Events" },
//     ].map((item, index) => (
//       <motion.div
//         key={index}
//         className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
//       >
//         <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
//         <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
//       </motion.div>
//     ))}
//   </motion.div>

//   {/* Horizontal Divider Line */}
//   <hr className="w-full border-t border-[--white] m-0" />

//   {/* BTL Section */}
//   <motion.div
//     className="flex items-center gap-12 px-4"
//     style={{
//       display: "flex",
//       transform: `translateX(${offsetXBTL}%)`,
//       whiteSpace: "nowrap",
//     }}
//   >
//     <span className="text-[2rem] md:text-[1.2rem] text-[--white]">BTL</span>
//     {[
//       { src: DirectMarketing, alt: "direct marketing", label: "Direct Marketing" },
//       { src: ExpermentalMarketing, alt: "expermental marketing", label: "Expermental Marketing" },
//       { src: B2Bsales, alt: "b2b sales", label: "B2B Sales" },
//       { src: GiveAways, alt: "giveaways", label: "Give Aways" },
//       { src: SamlingCampaign, alt: "sampling campaign", label: "Sampling Campaign" },
//     ].map((item, index) => (
//       <motion.div
//         key={index}
//         className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
//       >
//         <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
//         <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
//       </motion.div>
//     ))}
//   </motion.div>
// </div>


//         <div className="flex flex-col gap-4 justify-start mt-[6rem]">
//           <h1 className="text-[1.8rem] text-[--white]">Communication TouchPoints</h1>
//           <span className="text-[1.3rem] text-[--white]">ATL - Wide reach, legitimacy</span>
//           <span className="text-[1.3rem] text-[--white]">
//             BTL - Interactive, entertaining with immediate feedback
//           </span>
//         </div>
//       </div>

//       {/* Aurora Stars Animation */}
//       <div className="absolute inset-0 z-0">
//         <Canvas>
//           <Stars radius={50} count={2500} factor={4} fade speed={2} />
//         </Canvas>
//       </div>
//     </motion.section>
//   );
// };

// export default Expermental;

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Tv from "../../../asset/tv.png";
import Radio from "../../../asset/radio.png";
import Print from "../../../asset/printer.png";
import Ooh from "../../../asset/ooh.png";
import Digitalads from "../../../asset/digital-ads.png";
import Events from "../../../asset/events.png";
import DirectMarketing from "../../../asset/direct-marketing.png";
import ExpermentalMarketing from "../../../asset/expermental-marketing.png";
import B2Bsales from "../../../asset/b2bsales.png";
import GiveAways from "../../../asset/give-aways.png";
import SamlingCampaign from "../../../asset/samlingcampaign.png";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Expermental = () => {
  const [offsetXATL, setOffsetXATL] = useState(0);
  const [offsetXBTL, setOffsetXBTL] = useState(0);

  useEffect(() => {
    const scrollSpeedATL = 0.05; // Speed for ATL
    const scrollSpeedBTL = 0.05; // Speed for BTL

    const animateScrollATL = () => {
      setOffsetXATL((prevOffsetX) => (prevOffsetX <= -100 ? 0 : prevOffsetX - scrollSpeedATL));
    };
    const animateScrollBTL = () => {
      setOffsetXBTL((prevOffsetX) => (prevOffsetX >= 100 ? 0 : prevOffsetX + scrollSpeedBTL)); // Increase for right movement
    };

    const intervalIdATL = setInterval(animateScrollATL, 16); // ~60 FPS for ATL
    const intervalIdBTL = setInterval(animateScrollBTL, 16); // ~60 FPS for BTL

    return () => {
      clearInterval(intervalIdATL);
      clearInterval(intervalIdBTL);
    };
  }, []);

  // Aurora animation setup
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200"
    >
      {/* Main Content */}
      <div className="relative flex-col z-10 p-10">
        <p className="text-[1.7rem] font-[300] p-10" style={{
          marginLeft: '1rem',
          marginRight: '1rem',
          textAlign: 'justify',
          color: '#F9AA19',
        }}>
        We are a full-fledged communications and public relations firm with offices in Addis Ababa, Ethiopia and Washington DC, Metropolitan Area. At 251 Communications, we manage our international and local clients’ communications, marketing, research, logistics, media, PR, branding and production needs. We have partnerships with many of the leading service research and media agencies inside and outside of Ethiopia.
        </p>
{/* 
        <h1 className="text-[1.7rem] font-[100] p-10" style={{
          marginLeft: '1rem',
          marginRight: '1rem',
          textAlign: 'justify',
          color: '#F9AA19',
        }}>
          Through the line Communications Touch Points Designed a 360 Brand Experience
        </h1> */}

        <div className="flex flex-col items-center gap-10">
          {/* ATL Section (Moves Left) */}
          <motion.div
            className="flex items-center gap-12 px-4"
            style={{
              transform: `translateX(${offsetXATL}%)`,
              whiteSpace: "nowrap",
            }}
          >
            <span className="text-[2rem] md:text-[1.2rem] text-[--white]">ATL</span>
            {[
              { src: Tv, alt: "tv", label: "Tv" },
              { src: Radio, alt: "radio", label: "Radio" },
              { src: Print, alt: "print", label: "Print" },
              { src: Ooh, alt: "ooh", label: "Out of Home" },
              { src: Digitalads, alt: "digital ads", label: "Digital Ads" },
             
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
              >
                <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
                <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <hr className="w-full border-t border-[--white] m-0" />

          {/* BTL Section (Moves Right) */}
          <motion.div
            className="flex items-center gap-12 px-4"
            style={{
              transform: `translateX(${offsetXBTL}%)`,
              whiteSpace: "nowrap",
            }}
          >
            <span className="text-[2rem] md:text-[1.2rem] text-[--white]">BTL</span>
            {[
              { src: DirectMarketing, alt: "direct marketing", label: "Direct Marketing" },
              { src: ExpermentalMarketing, alt: "expermental marketing", label: "Expermental Marketing" },
              { src: B2Bsales, alt: "b2b sales", label: "B2B Sales" },
              { src: GiveAways, alt: "giveaways", label: "Give Aways" },
              { src: SamlingCampaign, alt: "sampling campaign", label: "Sampling Campaign" },
              { src: Events, alt: "events", label: "Events" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-2 w-[100%] md:w-auto"
              >
                <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
                <span className="text-[--white] text-[1.2rem] md:text-[.8rem] mt-2">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Aurora Stars Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Expermental;

