import React, { useEffect, useState } from 'react'
import { works } from '../data/works'
import worldWide from "../Assets/external-link.png"
import youtube from "../Assets/youtube.png"
import { Link } from 'react-router-dom'
import smoothscroll from 'smoothscroll-polyfill';

const Latest = () => {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='grid lg:grid-cols-2 gap-12 gap-y-16 mt-8'>
          {works.slice(0, 4).map((work, index) => (
            <div key={index} > 
                <div className='relative overflow-hidden group'>
              <Link to={`/works/${work.id}`} onClick={handleClick}>
                <img src={work.image} alt={work.workName} className='w-full h-64 lg:h-96 2xl:h-[55vh] object-cover rounded-md group-hover:opacity-75 transition-opacity duration-300' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-white text-lg font-semibold text-center'>
                    See More
                  </p>
                </div>
              </Link>
              </div>
              <div className='mt-5 text-white'>
                <p className='text-2xl font-semibold w-fit'>{work.workName}</p>
                <p className='text-[#207ead] mt-1'><span className='text-[11px]'>Technologies:</span> {work.technologies}</p>
                <p className='text-base mt-2 text-white'>{work.description}</p>
                <div className='flex gap-8 mt-2'>
                {work.liveLink && (
                  <div className='flex gap-x-1 hover:text-white hover:scale-110'>
                    <img src={worldWide} alt="" className='w-4 h-4 mt-3' />
                    <a
                      href={work.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#207ead] mt-2 inline-block hover:text-white'
                    >
                      Visit Live &rarr;
                    </a>
                  </div>
                )}
                {work.tutorialLink && (
                  <div className='flex gap-x-1 hover:text-white hover:scale-110'>
                    <img src={youtube} alt='' className='w-5 h-5 mt-2'/>
                    <a href={work.tutorialLink} target='_blank' rel='noopener noreferrer' className='text-[#207ead] mt-2 hover:text-white hover:scale-110 inline-block' title='See the tutorial on YouTube'>Tutorial &rarr;</a>
                </div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Latest
