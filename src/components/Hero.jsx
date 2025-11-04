import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifier si c'est un appareil mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Définir la valeur initiale
    setIsMobile(mediaQuery.matches);

    // Fonction de callback pour gérer les changements
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Ajouter l'écouteur d'événement
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Nettoyer l'écouteur
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mouhanned</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software engineer & freelancer crafting apps,<br className='sm:block hidden' />
            and engineering IoT and embedded solutions
          </p>
        </div>
      </div>

      {/* Afficher le canvas 3D seulement sur desktop */}
      {!isMobile && <ComputersCanvas />}

      {/* Image de remplacement pour mobile */}
      {isMobile && (
        <div className='absolute inset-0 flex items-end justify-center pb-32 md:pb-40'>
          <div className='relative w-full max-w-xs mx-auto px-6'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse'></div>
              <img 
                src='/logo.svg' 
                alt='Developer' 
                className='relative w-full h-auto object-contain animate-float'
              />
            </div>
          </div>
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
