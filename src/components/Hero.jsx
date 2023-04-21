import React, { useRef } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Pam from '../images/pam.jpg';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi There, I'm Pamela",
      'Girl-who-loves-cutePuppies.jsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-8  text-center overflow-hidden'>
      {/* background circles */}
      <BackgroundCircles />
      <img
        src={Pam}
        alt='pam image'
        className='relative rounded-full flex-shrink-0 h-32 w-32 object-cover mx-auto'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[7px] md:tracking-[15px]'>
          Frontend Developer
        </h2>
        <h1 className='text-2xl md:text-3xl lg:text-4xl px-10 font-semibold'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#63c45e' />
        </h1>

        <div ref={myRef} className='pt-5'>
          <a href='#about' onClick={handleClick} className='hero-button'>
            About
          </a>
          <a href='#skills' onClick={handleClick} className='hero-button'>
            Skills
          </a>
          <a href='#projects' onClick={handleClick} className='hero-button'>
            Projects
          </a>
          <a href='#contact' onClick={handleClick} className='hero-button'>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
