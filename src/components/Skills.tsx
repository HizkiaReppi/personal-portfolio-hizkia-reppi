import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaBootstrap, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint, SiLaravel, SiNextdotjs, SiPhp } from 'react-icons/si';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const skillsData = [
  { icon: <FaJs className='text-5xl text-yellow-500' />, name: 'JavaScript' },
  { icon: <SiPhp className='text-5xl text-blue-600' />, name: 'PHP' },
  { icon: <FaReact className='text-5xl text-sky-600' />, name: 'ReactJS' },
  { icon: <SiNextdotjs className='text-5xl text-white' />, name: 'Next.JS' },
  { icon: <FaNodeJs className='text-5xl text-lime-600' />, name: 'Node JS' },
  { icon: <SiLaravel className='text-5xl text-red-800' />, name: 'Laravel' },
  { icon: <SiTailwindcss className='text-5xl text-sky-500' />, name: 'TailwindCSS' },
  { icon: <FaBootstrap className='text-5xl text-violet-700' />, name: 'Bootstrap' },
];

const moreSkillsData = [
  { icon: <FaFigma className='text-5xl text-amber-700' />, name: 'Figma' },
  { icon: <SiMicrosoftword className='text-5xl text-sky-500' />, name: 'Microsoft Word' },
  { icon: <SiMicrosoftexcel className='text-5xl text-green-500' />, name: 'Microsoft Excel' },
  { icon: <SiMicrosoftpowerpoint className='text-5xl text-red-600' />, name: 'Microsoft PowerPoint' },
];

const Skills: React.FC = () => {
  return (
    <motion.section variants={staggerContainer(1, 0.2)} initial='hidden' whileInView='show'>
      <Element name='skills' className='w-full mt-10 text-gray-300 py-3 px-[6%] md:py-4 md:px-[11%]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
          <div>
            <motion.h2 variants={textVariant(0.2)} className='text-4xl font-semibold inline border-b-4 border-second'>Skills</motion.h2>
          </div>
          <p className='text-lg font-normal mt-8'>Tech Stack</p>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
            {skillsData.map((skill, index) => (
              <motion.div
                variants={fadeIn('left', 'spring', index * 0.5, 1)}
                key={index}
                className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'
              >
                {skill.icon}
                <p className='my-4'>{skill.name}</p>
              </motion.div>
            ))}
          </div>
          <p className='text-lg font-normal -mt-2'>More Skills</p>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8'>
            {moreSkillsData.map((skill, index) => (
              <motion.div
                variants={fadeIn('right', 'spring', index * 0.5, 1)}
                key={index}
                className='shadow-md shadow-[#040C16] flex flex-col items-center hover:scale-110 duration-500'
              >
                {skill.icon}
                <p className='my-4'>{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>
    </motion.section>
  );
};

export default Skills;
