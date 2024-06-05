import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import Latest from './Latest';
import smoothscroll from 'smoothscroll-polyfill';

const OurWorks = () => {

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-12 lg:mt-16 mt-16 2xl:mt-28 font-custom'>
        <div className='flex justify-between'>
          <p className='text-4xl 2xl:text-5xl font-semibold uppercase'>Our Work</p>
          <Link to='/works' 
                onClick={handleClick}
                className='text-[#207ead] 2xl:text-lg mt-1 hover:scale-110 hover:text-white'>See all &rarr;
          </Link>
        </div>
           <p className='mt-6 text-white 2xl:text-xl'>Here are some of the public projects we have done lately. Feel free to check them out.</p>
        <Latest />
      </div>
    </div>
  );
};

export default OurWorks;
