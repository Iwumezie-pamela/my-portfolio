import React from 'react';
import { About, Header, Hero, Projects, Skills } from './components';

const App = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
    </div>
  );
};

export default App;
