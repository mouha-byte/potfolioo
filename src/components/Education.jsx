import React from "react";
import Tilt from "react-tilt";
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
  <Tilt className='xs:w-[320px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full violet-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
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

const Education = () => {
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
        My educational background has provided me with a strong foundation in
        computer science principles and practical development skills. Here are the
        key milestones in my learning journey.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {education.map((education, index) => (
          <EducationCard
            key={`education-${index}`}
            index={index}
            {...education}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
