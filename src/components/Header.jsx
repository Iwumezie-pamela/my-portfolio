import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='sticky top-0 p-4 items-start flex justify-between max-w-6xl m-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://twitter.com/pame_llar'
          className='cursor-pointer'
        />
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://www.linkedin.com/in/iwumezie-pamela-b090ba225/'
          className='cursor-pointer'
        />
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://github.com/Iwumezie-pamela'
          className='cursor-pointer'
        />
        <SocialIcon
          fgColor='gray'
          bgColor='transparent'
          url='https://web.facebook.com/chinwendu.pamela.10'
          className='cursor-pointer'
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row text-gray-300 items-center cursor-pointer'
      >
        <a href='#contact'>
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='hidden md:inline-flex uppercase text-sm text-gray-400'>
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
