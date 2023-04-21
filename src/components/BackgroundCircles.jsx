import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.01, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] mt-80 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full  h-[250px] w-[250px] md:h-[300px] md:w-[300px] mt-80' />
      <div className='absolute border border-[#333333] rounded-full  h-[350px] w-[350px] md:h-[400px] md:w-[400px] mt-80 ' />

      <div className='rounded-full border border-emerald-300 opacity-20  h-[450px] w-[450px] md:h-[500px] md:w-[500px]  absolute mt-80 animate-pulse' />
      <div className='absolute border border-[#333333] rounded-full  h-[550px] w-[550px] md:h-[700px] md:w-[700px] mt-80' />
    </motion.div>
  );
};

export default BackgroundCircles;
