import React from 'react';
import logo from "../Assets/synccode_2024.png";
import envelope from "../Assets/envelope.png";
import phone from "../Assets/phone.png";
import placeholder from "../Assets/location.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
     
    <div className='bg-black border-t-4 rounded-xl lg:rounded-[4%] mt-16 mx-4 2xl:mt-24 text-white p-6 lg:py-16 2xl:py-28 flex flex-col lg:flex-row justify-between items-center font-custom'>
    <div className='flex justify-start lg:justify-end items-center mb-4 lg:mb-0'>
        <img
          src={logo}
          alt='Logo'
          className='block lg:hidden object-cover justify-center lg:justify-end w-56 lg:w-56 h-16'
        />
      </div>
    <div className='lg:text-center grid grid-cols-2 lg:flex lg:flex-row lg:gap-x-7 gap-x-3 gap-y-3 lg:gap-y-6 mb-4 lg:mb-0 uppercase lg:mt-12 font-bold'>
        <a href='#' className='hover:text-white border text-xl px-10 2xl:px-16 lg:px-6 py-2 rounded-md border-gray-500 hover:bg-[#207ead]'><p className='text-sm 2xl:text-xl text-gray-700 text-left'>01</p>Home</a>
        <a href='#' className='hover:text-white border text-xl px-10 2xl:px-16 lg:px-6 py-2 rounded-md border-gray-500 hover:bg-[#207ead]'><p className='text-sm 2xl:text-xl text-gray-700 text-left'>02</p>About</a>
        <a href='#' className='hover:text-white border text-xl px-10 2xl:px-16 lg:px-6 py-2 rounded-md border-gray-500 hover:bg-[#207ead]'><p className='text-sm 2xl:text-xl text-gray-700 text-left'>03</p>Services</a>
        <a href='#' className='hover:text-white border text-xl px-10 2xl:px-16 lg:px-6 py-2 rounded-md border-gray-500 hover:bg-[#207ead]'><p className='text-sm 2xl:text-xl text-gray-700 text-left'>04</p>Works</a>
        <a href='#' className='hover:text-white border text-xl px-10 2xl:px-16 lg:px-6 py-2 rounded-md border-gray-500 hover:bg-[#207ead]'><p className='text-sm 2xl:text-xl text-gray-700 text-left'>05</p>Contact</a>
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
        </div>
       
      </div>

    </div>
    <div className='bg-gradient-to-r from-[#207ead] to-[#00ffc3] h-12 2xl:h-20 flex justify-center items-center'>
      <p className="font-custom text-white text-center">&copy; {currentYear} Sync Code. All rights reserved.</p>
    </div>
    </>
  );
}

export default Footer;
