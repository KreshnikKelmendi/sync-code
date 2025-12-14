import React, { useEffect, useState } from 'react';
import { works } from '../data/works';
import worldWide from "../Assets/external-link.png";
import { Link } from 'react-router-dom';
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
    window.scrollTo({ top: 0, behavior: 'smoth' });
  };

  const renderMedia = (mediaUrl) => {
    return mediaUrl?.endsWith('.mp4') ? (
      <video className="w-full h-44 lg:h-64 2xl:h-[40vh] object-cover rounded-[18px]" autoPlay playsInline loop muted>
        <source src={mediaUrl} type="video/mp4" />
      </video>
    ) : (
      <img
        className="w-full h-44 lg:h-64 2xl:h-[40vh] object-cover rounded-[18px]"
        src={mediaUrl}
        alt=""
      />
    );
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 mt-8">
      {works.slice(0, 4).map((work, index) => (
        <div key={index}>
          <div className="relative overflow-hidden group">
            <Link to={`/works/${work.id}`} onClick={handleClick}>
              {renderMedia(work.image)}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center">See more</p>
              </div>
            </Link>
          </div>
          <div className="mt-5 text-white">
            <p className="lg:text-2xl font-semibold w-fit">{work.workName}</p>
            <p className="text-[#207ead] text-[12px] lg:text-sm mt-1"><span className="text-[9px] lg:text-[11px]">Category:</span> {work.category}</p>
            <p className="text-[12px] lg:text-base uppercase mt-2 text-white">{work.shortTitle}</p>
            <div className="flex gap-x-1">
              <Link
                className="mt-3 flex text-[#207ead] text-sm lg:text-base underline rounded-md font-custom hover:text-white font-bold"
                to={`/works/${work.id}`}
                onClick={handleClick}
              >
                <p>See more</p>
                <img src={worldWide} alt="" className="w-4 h-4 mt-1 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Latest;
