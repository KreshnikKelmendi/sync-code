import React, { useState } from 'react';
import { works } from '../data/works';
import worldWide from "../Assets/external-link.png";
import youtube from "../Assets/youtube.png";
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

const Card = () => {
  const [showMore, setShowMore] = useState(false);

  const initialWorksCount = 6;
  const displayedWorks = showMore ? works : works.slice(0, initialWorksCount);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const handleClick = () => {
    smoothscroll.polyfill();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className='grid lg:grid-cols-2 gap-12 gap-y-16 mt-8'>
        {displayedWorks?.map((work, index) => (
          <div key={index}>
            <div className='relative overflow-hidden group'>
              <Link to={`/works/${work.id}`} onClick={handleClick}>
                <img
                  src={work.image}
                  alt={work.workName}
                  className='w-full h-64 lg:h-96 2xl:h-[62vh] object-cover rounded-md group-hover:opacity-75 transition-opacity duration-300'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-white text-lg font-semibold text-center'>
                    See more
                  </p>
                </div>
              </Link>
            </div>
            <div className='mt-5 text-white'>
              <p className='text-2xl font-semibold w-fit'>{work.workName}</p>
              <p className='text-[#207ead] mt-1'><span className='text-[11px]'>Category:</span> {work.category}</p>
              <p className='text-base uppercase mt-2 text-white'>{work.shortTitle}</p>
              <div className='flex gap-x-1'>
                <Link
                  className='mt-3 flex text-[#207ead] underline rounded-md font-custom hover:text-white font-bold'
                  to={`/works/${work.id}`}
                  onClick={handleClick}
                >
                  See more
                  <img src={worldWide} alt="" className='w-4 h-4 mt-1 ml-1' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-16 text-center'>
        {!showMore ? (
          <button
            onClick={handleShowMore}
            className='px-12 py-2 bg-gradient-to-r from-[#207ead] to-[#00ffc3] text-white rounded-md hover:bg-[#105a73] transition-colors duration-300'
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className='px-12 py-2 bg-gradient-to-r from-[#207ead] to-[#00ffc3] text-white rounded-md hover:bg-[#105a73] transition-colors duration-300'
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
