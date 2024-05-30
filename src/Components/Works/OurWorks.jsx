import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const OurWorks = () => {
  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-12 lg:mt-20 mt-16 2xl:mt-28 font-custom'>
        <div className='flex justify-between'>
          <p className='text-4xl 2xl:text-5xl font-semibold uppercase'>Our Works</p>
          <Link to='/works' 
                onClick={() => window.scrollTo({ top: 0, left: 0 })} 
                className='text-[#207ead] 2xl:text-lg mt-1 hover:scale-110 hover:text-white'>See all &rarr;
          </Link>
        </div>
           <p className='mt-6 text-white 2xl:text-xl'>Here are some of the public projects we have done lately. Feel free to check them out.</p>
        <Card />
      </div>
    </div>
  );
};

export default OurWorks;
