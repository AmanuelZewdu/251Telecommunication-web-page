import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Header from "../../header/Header";
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

  // Animation variants for individual item slide-in and slide-out
  const itemVariants = {
    hidden: { x: 100, opacity: 0 }, // Slide in from the right
    visible: { x: 0, opacity: 1 },  // Slide to center
    exit: { x: -100, opacity: 0 },  // Slide out to the left
  };

  // Transition settings with stagger effect
  const groupTransition = {
    staggerChildren: 0.3, // Delay between each child's animation
    duration: 0.6,
    ease: "easeOut",
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1.5,
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200"
    >
      {/* Main Header */}
      <Header />

      {/* Content Section */}
      <div className="relative flex-col z-10 p-10">
        <h1 className="text-[--red] text-[1.7rem] font-[700] p-10">
          THROUGH THE LINE <br /> COMMUNICATIONS <br /> TOUCH POINTS <br /> DESIGNED TO DELIVER A
          360 <br />
          BRAND <br /> EXPERIENCE.
        </h1>
        <div className="flex flex-col items-center gap-10">
          {/* ATL Section */}
          <motion.div
        
         className="flex flex-col md:flex-row  items-center gap-12 px-4"
         initial="hidden"
         animate="visible"
         exit="exit"
         variants={{ visible: { transition: groupTransition } }}
       >
         <span className="text-[2rem] md:text-[1.2rem] text-[--white]">ATL</span>
         {[
           { src: Tv, alt: "tv", label: "Tv" },
           { src: Radio, alt: "radio", label: "Radio" },
           { src: Print, alt: "print", label: "Print" },
           { src: Ooh, alt: "ooh", label: "Ooh" },
           { src: Digitalads, alt: "digital ads", label: "Digital Ads" },
           { src: Events, alt: "events", label: "Events" },
         ].map((item, index) => (
           <motion.div
             key={index}
             className="flex items-center justify-center gap-4 w-[100%] md:w-auto" // Full width on small screens, auto on medium screens
             variants={itemVariants}
           >
             <img src={item.src} alt={item.alt} className="w-[50%] md:w-[80%]" />
             <span className="text-[--white] text-[1.2rem] md:text-[.8rem]">{item.label}</span>
           </motion.div>
         ))}
       </motion.div>

          {/* Horizontal Divider Line */}
          <hr className="w-full border-t border-[--white] m-0" />

          {/* BTL Section */}
          <motion.div
            className="flex flex-col md:flex-row  items-center gap-12 px-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: groupTransition } }}
          >
            <span className=" text-[2rem] md:text-[1.2rem] text-[--white]">BTL</span>
            {[
              { src: DirectMarketing, alt: "direct marketing", label: "Direct Marketing" },
              { src: ExpermentalMarketing, alt: "expermental marketing", label: "Expermental Marketing" },
              { src: B2Bsales, alt: "b2b sales", label: "B2B Sales" },
              { src: GiveAways, alt: "giveaways", label: "Give Aways" },
              { src: SamlingCampaign, alt: "sampling campaign", label: "Sampling Campaign" },
              { src: SamlingCampaign, alt: "sampling campaign", label: "Sampling Campaign" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-4 w-[100%] md:w-auto"
                variants={itemVariants}
              >
                <img src={item.src} alt={item.alt} className=" w-[50%] md:w-[80%]" />
                <span className="text-[--white] text-[1.2rem] md:text-[.8rem]">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          

        </div>
        <div className="flex flex-col gap-4 justify-start mt-[6rem]">
            <h1 className="text-[1.8rem] text-[--white]">Communication TouchPoints</h1>
            <span className="text-[1.3rem] text-[--white]">ATL - Wide reach, legitimacy</span>
            <span className="text-[1.3rem] text-[--white]">
              BTL - Interactive, entertaining with immediate feedback
            </span>
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