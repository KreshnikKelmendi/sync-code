import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BannerContact = () => {
  const location = useLocation();

  // Scroll to top when navigating to a new route
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  // Don't show the banner if we're on the 'get-in-touch' path
  if (location.pathname === '/get-in-touch') {
    return null;
  }

  return (
    <div className='px-4 lg:px-12 font-custom'>
      <div className="bg-gradient-to-r from-[#207ead] to-[#00ffc3] my-16 text-white py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between rounded-md">
        {/* Left Text Section */}
        <div className="mb-6 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Let's get in touch!</h1>
          <p className="text-lg lg:text-xl">
            We're here to help you with all your project needs. Reach out today and start the conversation.
          </p>
        </div>

        {/* Right Button Section */}
        <div className='w-full lg:w-fit'>
          <Link to="/get-in-touch">
            <button
              className=" text-[#207ead] w-full border-none font-semibold text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
