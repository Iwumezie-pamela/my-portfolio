import React from 'react';
import { motion } from 'framer-motion';
import mcniff from '../images/mcniff.png';
import rayvvin from '../images/rayvvin.png';
import netflix from '../images/netflix.jpg';
import space from '../images/space.jpg';
import cocktail from '../images/cocktail.jpg';
import portfolio from '../images/portfolio.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Projects = () => {
  const projects = [
    // {
    //   id: 1,
    //   img: rayvvin,
    //   link: 'https://rayvvin.com/',
    //   name: 'Rayvvin',
    //   title:
    //     'Built with Next.js, Integrated with SCSS, Tailwind CSS, and Axios for Seamless Ecommerce Experience',
    // },
    {
      id: 1,
      img: mcniff,
      link: 'https://mcnifcuisine.co.uk/',
      name: 'Mcniff Website',
      title:
        'Developed with Next.js, Tailwind CSS, and Axios for a Seamless Ecommerce Experience. This project was a collaborative effort by my team and me.',
    },
    {
      id: 2,
      img: portfolio,
      link: 'https://my-portfolio-rust-one-97.vercel.app/',
      //   github: 'https://github.com/Iwumezie-pamela/my-portfolio',
      name: 'Portfolio',
      title:
        ' Built with React js and tailwind css. Animation was also created using framer motion',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col overflow-hidden text-left relative h-screen md:flex-row max-w-full justify-evenly z-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
        Projects
      </h3>

      <div className='relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-emerald-300/80'>
        {projects.map((project) => {
          const { id, img, link, github, name, title } = project;
          return (
            <article
              key={id}
              className='w-screen flex flex-col flex-shrink-0 space-y-5 items-center justify-center px-20 pt-24 md:p-44 md:pt-60 h-screen snap-center '
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={img}
                alt={name}
                className='md:w-[50%] rounded-lg lg:w-[40%]'
              />

              <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                <h4 className='whitespace-nowrap text-xl md:text-4xl font-semibold text-center'>
                  <span className='underline decoration-emerald-300/50'>
                    case study {id} of {projects.length}:
                  </span>{' '}
                  {name}
                </h4>
                <p className='text-center max-w-xl'>{title}</p>

                <div className='flex gap-5 items-center justify-center '>
                  <a
                    href={link}
                    className='border border-emerald-300/50 hover:scale-105 px-5 py-2 md:px-7  rounded-full transition duration-300 ease-in-out'
                  >
                    Live Link
                  </a>
                  {/* <a
                    href={github}
                    className='border border-emerald-300/50 hover:scale-105 px-3 py-2 md:px-7  rounded-full transition duration-300 ease-in-out'
                  >
                    Github Link
                  </a> */}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className='w-full absolute top-[30%] bg-emerald-300/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
};

export default Projects;
