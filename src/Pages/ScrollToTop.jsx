import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-2 z-50">
      {isVisible && 
        <button 
          onClick={scrollToTop} 
          className="bg-gradient-to-r from-[#207ead] to-[#00ffc3] text-white px-2 py-1 font-extrabold transition duration-300"
        >
          &#8679;
        </button>
      }
    </div>
  );
};

export default ScrollToTop;
