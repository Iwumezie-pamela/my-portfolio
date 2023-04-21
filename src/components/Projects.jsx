import React from 'react';
import { motion } from 'framer-motion';
import comfy from '../images/comfy.jpg';
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
    {
      id: 1,
      img: comfy,
      link: 'https://comfy-sloth-e-commerce-project.netlify.app/',
      github: 'https://github.com/Iwumezie-pamela/Comfy-Sloth-React-Project',
      name: 'Comfy Sloth',
      title:
        'Built with Reactjs,Worked with Auth0 and this serves in adding authentication and authorization to our website.Worked with stripejs Api and it was used to tokenize customer’s information and also collect payment details.API was consumed using axios JavaScript library',
    },
    {
      id: 2,
      img: netflix,
      link: 'https://netflix-clone-mu-flax.vercel.app/',
      github: 'https://github.com/Iwumezie-pamela/Netflix-clone',
      name: 'Netflix Clone',
      title:
        ' Built with React js and Tailwind Css.Worked with Firebase to enable user authentication.Data was gotten from The Movie Database(TMDB) and Api was consumed using axios JavaScript library.',
    },
    {
      id: 3,
      img: space,
      link: 'https://space-tourism-xi-wheat.vercel.app/',
      github: 'https://github.com/Iwumezie-pamela/space-tourism',
      name: 'Space Tourism',
      title: ' Built with React js and Tailwind Css.',
    },
    {
      id: 4,
      img: cocktail,
      link: 'https://react-cocktail-project-two.vercel.app/',
      github: 'https://github.com/Iwumezie-pamela/React-cocktail-project',
      name: 'Cocktail Db',
      title:
        ' Built with React js.Data was gotten from The Cocktail Database and Api was consumed using axios JavaScript library. Filters drink based on search',
    },
    {
      id: 5,
      img: portfolio,
      link: 'https://my-portfolio-rust-one-97.vercel.app/',
      github: 'https://github.com/Iwumezie-pamela/my-portfolio',
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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project) => {
          const { id, img, link, github, name, title } = project;
          return (
            <article
              key={id}
              className='w-screen flex flex-col flex-shrink-0 space-y-5 items-center justify-center px-20 pt-24 md:p-44 md:pt-60 h-screen snap-center'
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
                  <a
                    href={github}
                    className='border border-emerald-300/50 hover:scale-105 px-3 py-2 md:px-7  rounded-full transition duration-300 ease-in-out'
                  >
                    Github Link
                  </a>
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
