import React from 'react';
import { motion } from 'framer-motion';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import firebase from '../images/firebase.png';
import git from '../images/git.png';
import github from '../images/github.png';
import styled from '../images/styled.png';
import tailwind from '../images/tailwind.png';
import typescript from '../images/typescript.png';

const SkillImage = () => {
  const skills1 = [
    { id: 1, img: html },
    { id: 2, img: css },
    { id: 3, img: javascript },
    { id: 4, img: react },
    { id: 5, img: firebase },
    { id: 6, img: git },
  ];

  const skills2 = [
    { id: 7, img: github },
    { id: 8, img: styled },
    { id: 9, img: tailwind },
    { id: 10, img: typescript },
  ];

  return (
    <>
      <div className='grid grid-cols-3 gap-7 cursor-pointer'>
        {skills1.map((skill) => {
          const { id, img } = skill;
          return (
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={img}
              key={id}
              alt=''
              className='w-16 hover:animate-pulse'
            />
          );
        })}

        {skills2.map((skill) => {
          const { id, img } = skill;
          return (
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              s
              src={img}
              key={id}
              alt=''
              className='w-16 hover:animate-pulse'
            />
          );
        })}
      </div>
    </>
  );
};

export default SkillImage;
