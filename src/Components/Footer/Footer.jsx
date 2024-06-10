import React from 'react';
import logo from "../Assets/synccode_2024.png";
import envelope from "../Assets/envelope.png";
import phone from "../Assets/phone.png";
import placeholder from "../Assets/location.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
     
    <div className='border-t-4 rounded-xl lg:rounded-[4%] mt-16 mx-4 2xl:mt-24 text-white p-6 lg:py-16 2xl:py-28 flex flex-col lg:flex-row justify-between items-center font-custom'>
    <div className='flex justify-start lg:justify-end items-center mb-4 lg:mb-0'>
        <img
          src={logo}
          alt='Logo'
          className='block lg:hidden object-cover justify-center lg:justify-end w-56 lg:w-56 h-16'
        />
      </div>
    <div className='lg:text-center font-custom grid grid-cols-2 lg:flex lg:flex-row lg:gap-x-5 text-center justify-center items-center gap-x-3 gap-y-3 lg:gap-y-6 mb-4 lg:mb-0 uppercase lg:mt-12 font-bold'>
        <Link to="/"onClick={() => window.scrollTo({ top: 0, left: 0 })} className='hover:text-white border text-sm lg:text-base px-4 2xl:px-16 lg:px-6 py-4 2xl:py-6 rounded-md border-gray-500 hover:bg-gradient-to-r from-[#207ead] to-[#00ffc3]'>Home</Link>
        <Link to="/about" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='hover:text-white border text-sm lg:text-base px-4 2xl:px-16 lg:px-6 py-4 2xl:py-6 rounded-md border-gray-500 hover:bg-gradient-to-r from-[#207ead] to-[#00ffc3]'>About</Link>
        <Link to="/services" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='hover:text-white border text-sm lg:text-base px-4 2xl:px-16 lg:px-6 py-4 2xl:py-6 rounded-md border-gray-500 hover:bg-gradient-to-r from-[#207ead] to-[#00ffc3]'>Services</Link>
        <Link to="/works" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='hover:text-white border text-sm lg:text-base px-4 2xl:px-16 lg:px-6 py-4 2xl:py-6 rounded-md border-gray-500 hover:bg-gradient-to-r from-[#207ead] to-[#00ffc3]'>Work</Link>
        <Link to="/articles" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='hover:text-white border text-sm lg:text-base px-4 2xl:px-16 lg:px-6 py-4 2xl:py-6 rounded-md border-gray-500 hover:bg-gradient-to-r from-[#207ead] to-[#00ffc3]'>Company News</Link>

      </div>
      
      <div className='lg:text-right mt-6 lg:mt-0'>
  <div className='mb-2'>
    <div className='flex justify-start lg:justify-end items-center mb-4 lg:mb-0'>
      <img
        src={logo}
        alt='Logo'
        className='hidden lg:block pl-5 object-cover lg:justify-end lg:w-56 h-16'
      />
    </div>
    <p>Listening to you, answering with <b>SOFTWARE</b></p>
    <p className='text-2xl text-[#207ead]'>+383 (45) 490 985</p>
    <p>info@sync-code.com</p>
    <p>Pristina, Kosovo</p>
    <div className='flex justify-start lg:justify-end items-center mt-1'>
      <a
        href='https://www.linkedin.com/company/sync-code'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#207ead] hover:text-[#1b5f8b]'
        aria-label='LinkedIn'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='w-6 h-6'
          viewBox='0 0 24 24'
        >
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-3.368-4-3.115-4 0v5.5h-3v-10h3v1.538c1.396-2.586 7-2.777 7 2.476v5.986z'/>
        </svg>
      </a>
    </div>
  </div>
</div>


    </div>
    <div className='bg-gradient-to-r from-[#207ead] to-[#00ffc3] h-12 2xl:h-16 flex justify-center items-center'>
      <p className="font-custom text-white text-center">&copy; {currentYear} Sync Code. All rights reserved.</p>
    </div>
    </>
  );
}

export default Footer;
