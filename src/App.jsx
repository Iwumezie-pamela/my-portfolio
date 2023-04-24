import React from 'react';
import { About, ContactMe, Header, Hero, Projects, Skills } from './components';
import logo from './images/pam.jpg';

const App = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-emerald-300/80'>
      {/* Header */}

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      {/* projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      {/* contact */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <footer className='sticky bottom-4 w-full cursor-pointer'>
        <a href='#hero' className='flex items-center justify-center'>
          <img
            src={logo}
            alt=''
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          />
        </a>
      </footer>
    </div>
  );
};

export default App;
