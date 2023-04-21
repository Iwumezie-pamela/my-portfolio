import React from 'react';
import Pamela from '../images/pamela.jpg';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={Pamela}
        className='-mb-36 mt-3 sm:mt-0 md:mb-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-48 md:h-60 xl:w-[250px] xl:h-[350px]'
      />

      <motion.div className='space-y-10 px-0 md:px-10'>
        <p className='text-sm'>
          I am pamela, a Technically astute front-end developer with an
          experience in managing and configuring ReactJs. A proven track record
          of hands on experience in Html,Css and JavaScript in
          analysing,designing and implementing solutions to drive positive
          changes to optimize business processes. Seeking a challenging role
          where i can deploy my IT skill set to make transformative differences
          whilst nurturing a thriving developer career pathway
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
