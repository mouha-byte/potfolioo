import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({
  index,
  title,
  school_name,
  icon,
  iconBg,
  date,
  points,
}) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[320px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-start flex-col'
      >
        <div className='flex items-center gap-4 mb-4'>
          <div
            className='w-16 h-16 rounded-full flex justify-center items-center'
            style={{ backgroundColor: iconBg }}
          >
            <img
              src={icon}
              alt={school_name}
              className='w-10 h-10 object-contain'
            />
          </div>
          <div>
            <h3 className='text-white text-[20px] font-bold leading-tight'>
              {title}
            </h3>
            <p className='text-secondary text-[14px] font-semibold'>
              {school_name}
            </p>
            <p className='text-[#915EFF] text-[12px] font-medium'>{date}</p>
          </div>
        </div>

        <ul className='list-disc ml-5 space-y-2'>
          {points.map((point, pointIndex) => (
            <li
              key={`education-point-${pointIndex}`}
              className='text-white-100 text-[12px] pl-1 tracking-wider leading-relaxed'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </Tilt>
);

const MobileEducationCard = ({ education, onClick }) => {
  return (
    <div 
      className='bg-tertiary rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#1d1836] transition-colors border-2 border-purple-500 border-opacity-30'
      onClick={onClick}
    >
      <div className='flex items-center gap-4'>
        <div 
          className='w-12 h-12 rounded-full flex justify-center items-center flex-shrink-0'
          style={{ backgroundColor: education.iconBg }}
        >
          <img
            src={education.icon}
            alt={education.school_name}
            className='w-8 h-8 object-contain'
          />
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='text-white text-[16px] font-bold truncate'>{education.title}</h3>
          <p className='text-secondary text-[12px] truncate'>{education.school_name}</p>
          <p className='text-[#915EFF] text-[10px]'>{education.date}</p>
        </div>
        <button className='bg-purple-600 px-3 py-1 rounded-full text-white text-[12px] font-semibold flex-shrink-0'>
          Details
        </button>
      </div>
    </div>
  );
};

const EducationModal = ({ education, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div 
        className='bg-[#1d1836] rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border-2 border-purple-500'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center gap-4 mb-4'>
          <div 
            className='w-16 h-16 rounded-full flex justify-center items-center flex-shrink-0'
            style={{ backgroundColor: education.iconBg }}
          >
            <img
              src={education.icon}
              alt={education.school_name}
              className='w-10 h-10 object-contain'
            />
          </div>
          <div className='flex-1 min-w-0'>
            <h3 className='text-white text-[20px] font-bold'>{education.title}</h3>
            <p className='text-secondary text-[14px]'>{education.school_name}</p>
            <p className='text-[#915EFF] text-[12px]'>{education.date}</p>
          </div>
        </div>

        <ul className='mt-4 list-disc ml-5 space-y-2'>
          {education.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className='text-white-100 text-[13px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className='mt-6 w-full bg-purple-600 py-3 rounded-lg text-white font-semibold hover:bg-purple-700 transition-colors'
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleCardClick = (edu) => {
    setSelectedEducation(edu);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        My educational background gave me a solid foundation in computer science, software engineering, and embedded systems.
        I gained hands-on experience in real-world projects, combining theory with practice in mobile development, IoT, and backend systems.
        Here are the key milestones of my learning journey:
      </motion.p>

      <div className='mt-20'>
        {isMobile ? (
          <div className='w-full'>
            {education.map((edu, index) => (
              <MobileEducationCard
                key={`education-${index}`}
                education={edu}
                onClick={() => handleCardClick(edu)}
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-wrap gap-10 justify-center'>
            {education.map((education, index) => (
              <EducationCard
                key={`education-${index}`}
                index={index}
                {...education}
              />
            ))}
          </div>
        )}
      </div>

      <EducationModal
        education={selectedEducation}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SectionWrapper(Education, "education");
