import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const SimpleTechIcon = ({ technology, index }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className='flex flex-col items-center justify-center gap-2'
    >
      <div className='w-20 h-20 bg-tertiary rounded-xl p-3 flex items-center justify-center border-2 border-purple-500 border-opacity-30 hover:border-opacity-100 hover:scale-110 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-purple-500/50'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-full h-full object-contain filter drop-shadow-lg'
        />
      </div>
      <p className='text-white text-[10px] text-center font-medium max-w-[80px] leading-tight'>
        {technology.name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='flex flex-row flex-wrap justify-center gap-6 px-4'
      >
        {technologies.map((technology, index) => (
          <SimpleTechIcon 
            key={technology.name} 
            technology={technology} 
            index={index}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
