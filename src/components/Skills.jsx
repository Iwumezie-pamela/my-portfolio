import React from 'react';
import { motion } from 'framer-motion';
import SkillImage from './SkillImage';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-[2000px] lg:px-10 justify-center lg:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div>
        <SkillImage />
      </div>
    </motion.div>
  );
};

export default Skills;
