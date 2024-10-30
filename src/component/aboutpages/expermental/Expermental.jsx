import React, { useEffect, useState } from "react";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";
import '../../styles/Home.css'


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
<section className="home-top p-0 m-0">
{/* <Header /> */}

 {/* <div className="digital-content flex-col md:flex-row gap-16 md:gap-0 flex justify-between items-center p-16">

 </div> */}
</section>
  );
};

export default Expermental;

