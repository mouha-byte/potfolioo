import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const EducationCard = ({ education }) => (
    <motion.div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex justify-between items-center">
            <div className="flex-1">
                <h3 className="text-white font-bold text-[24px]">{education.degree}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {education.school}
                </p>
            </div>
            {education.image && (
                <img
                    src={education.image}
                    alt={education.school}
                    className="w-16 h-16 object-contain rounded-full"
                />
            )}
        </div>
        
        <p className="text-white-100 text-[14px] pl-0 mt-2 tracking-wider">
            {education.date}
        </p>
        
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {education.points.map((point, index) => (
                <li
                    key={`education-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Education = () => {
    const educationExperiences = [
        {
            degree: "Bachelor of Computer Science",
            school: "University of Technology",
            date: "September 2018 - June 2022",
            image: "", // Add image path if available
            points: [
                "Graduated with First Class Honors",
                "Specialized in Computer Graphics and Interactive Systems",
                "Completed thesis on 'Advanced Rendering Techniques for Web-Based 3D Applications'",
                "Relevant coursework: 3D Modeling, WebGL, Computer Graphics, UI/UX Design"
            ],
        },
        {
            degree: "Web Development Certification",
            school: "Frontend Masters Academy",
            date: "January 2023 - April 2023",
            image: "", // Add image path if available
            points: [
                "Intensive course on modern frontend frameworks and libraries",
                "Created multiple interactive 3D websites using Three.js",
                "Learned advanced animation techniques with GSAP and Framer Motion",
                "Received outstanding project award for portfolio design"
            ],
        },
        // Add more education entries as needed
    ];

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have learned</p>
                <h2 className={styles.sectionHeadText}>Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {educationExperiences.map((education, index) => (
                    <EducationCard key={`education-${index}`} education={education} />
                ))}
            </div>
        </>
    );
};

