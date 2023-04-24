import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm } from 'react-hook-form';

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  // to send data to their mail
  const onSubmit = (formData) => {
    window.location.href = `mailto:iwumeziep@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-[85px]  uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-xl max-w-[18rem] mx-auto md:mx-0 md:max-w-none md:text-4xl font-semibold text-center mt-10'>
          I have got just what you need.{' '}
          <span className='underline decoration-emerald-300/50'>
            Lets Talk.
          </span>
        </h4>
        {/* hero icon */}
        <div className='space-y-6'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-emerald-300 h-6 w-6 animate-pulse' />
            <p>+2349056614548</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-emerald-300 h-6 w-6 animate-pulse' />
            <p>iwumeziep@gmail.com</p>
          </div>
        </div>
        {/* react hooks form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              type='text'
              className='input'
              placeholder='Name'
              {...register('name')}
            />
            <input
              type='email'
              className='input'
              placeholder='Email'
              {...register('email')}
            />
          </div>
          <input
            type='text'
            className='input'
            placeholder='Subject'
            {...register('subject')}
          />

          <textarea
            className='input'
            placeholder='Message'
            {...register('message')}
          />
          <button
            type='submit'
            className='cursor-pointer bg-emerald-300 py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
