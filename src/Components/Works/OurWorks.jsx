import React from 'react';
import { works } from '../data/works';

const OurWorks = () => {
  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-16 lg:mt-20 mt-16 font-custom'>
        <p className='text-3xl font-semibold uppercase'>Our Works</p>
        <p className='mt-6'>Here are some of the public projects we have done lately. Feel free to check them out.</p>
        <div className='grid lg:grid-cols-2 gap-12 gap-y-16 mt-8'>
          {works?.map((work, index) => (
            <div key={index}>
                <div className='relative overflow-hidden group'>
              <a href={work.liveLink} target='_blank' rel='noopener noreferrer'>
                <img src={work.image} alt={work.workName} className='w-full h-64 lg:h-80 object-cover group-hover:opacity-75 transition-opacity duration-300' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-white text-lg font-semibold text-center'>
                    See More
                  </p>
                </div>
              </a>
              </div>
              <div className='mt-5 text-white'>
                <p className='text-2xl font-semibold'>{work.workName}</p>
                <p className='text-base mt-2'>{work.description}</p>
                {work.liveLink && (
                  <a href={work.liveLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 mt-2  hover:text-white hover:scale-110 inline-block'>Visit Live &rarr;</a>
                )}
                {work.tutorialLink && (
                  <a href={work.tutorialLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 mt-2 ml-16 hover:text-white hover:scale-110 inline-block' title='See the tutorial on YouTube'>Tutorial &rarr;</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
