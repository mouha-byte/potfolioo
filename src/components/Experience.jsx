import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const MobileExperienceCard = ({ experience, onClick }) => {
  return (
    <div
      className='bg-tertiary rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#1d1836] transition-colors'
      onClick={onClick}
    >
      <div className='flex items-center gap-4'>
        <div
          className='w-12 h-12 rounded-full flex justify-center items-center'
          style={{ backgroundColor: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-8 h-8 object-contain'
          />
        </div>
        <div className='flex-1'>
          <h3 className='text-white text-[16px] font-bold'>{experience.title}</h3>
          <p className='text-secondary text-[12px]'>{experience.company_name}</p>
          <p className='text-[#915EFF] text-[10px]'>{experience.date}</p>
        </div>
        <button className='bg-[#915EFF] px-3 py-1 rounded-full text-white text-[12px] font-semibold'>
          Details
        </button>
      </div>
    </div>
  );
};

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-[#1d1836] rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center gap-4 mb-4'>
          <div
            className='w-16 h-16 rounded-full flex justify-center items-center'
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-10 h-10 object-contain'
            />
          </div>
          <div className='flex-1'>
            <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
            <p className='text-secondary text-[14px]'>{experience.company_name}</p>
            <p className='text-[#915EFF] text-[12px]'>{experience.date}</p>
          </div>
        </div>

        <ul className='mt-4 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[13px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className='mt-6 w-full bg-[#915EFF] py-3 rounded-lg text-white font-semibold'
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Experience = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
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

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {isMobile ? (
          <div className='w-full'>
            {experiences.map((experience, index) => (
              <MobileExperienceCard
                key={`experience-${index}`}
                experience={experience}
                onClick={() => handleCardClick(experience)}
              />
            ))}
          </div>
        ) : (
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        )}
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SectionWrapper(Experience, "work");
