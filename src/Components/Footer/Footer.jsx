import React from 'react';
import logo from "../Assets/logo.png";
import envelope from "../Assets/envelope.png";
import phone from "../Assets/phone.png";
import placeholder from "../Assets/location.png";

const Footer = () => {
  return (
    <div className='bg-black border-t mt-16 mx-4 lg:mx-16 text-white p-6 lg:p-12 flex flex-col lg:flex-row justify-between items-center font-custom font-normal'>
      {/* Logo */}
      <div className='flex items-center space-x-4 mb-4 lg:mb-0'>
        <img
          src={logo}
          alt='Logo'
          className='object-cover lg:w-56 h-16'
        />
      </div>

      {/* Menu */}
      <div className='flex flex-col lg:flex-row gap-x-8 gap-y-6 text-center mb-4 lg:mb-0'>
        <a href='#' className='hover:text-gray-400'>Home</a>
        <a href='#' className='hover:text-gray-400'>About</a>
        <a href='#' className='hover:text-gray-400'>Services</a>
        <a href='#' className='hover:text-gray-400'>Works</a>
        <a href='#' className='hover:text-gray-400'>Contact</a>
      </div>

      {/* Contact Information */}
      <div className='text-left mt-6 lg:mt-0'>
        <div className='flex items-center space-x-2 mb-2'>
          <img src={envelope} alt="" className='w-8 h-auto object-cover' />
          <p>info@sync-code.com</p>
        </div>

        <div className='flex items-center space-x-2 mb-2'>
          <img src={phone} alt="" className='w-8 h-auto object-cover' />
          <p>+38345490985</p>
        </div>

        <div className='flex items-center space-x-2'>
          <img src={placeholder} alt="" className='w-8 h-auto object-cover' />
          <p>Pristina, Kosovo</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
