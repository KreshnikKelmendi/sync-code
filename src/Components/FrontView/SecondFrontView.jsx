import React from 'react';

const SecondFrontView = () => {
  return (
    <div className='text-white px-4 lg:px-16 mt-4 lg:mt-10 font-custom'>
      <p className='text-3xl'>
        Benefit from our reliable development process{' '}
        <b className='text-green-400'>
          <br />for a successful project.
        </b>
      </p>
      <p className='mt-6'>
        We recognize that the most complex projects demand that our development team pay
        attention to every detail in the process of creating solutions. At Sync-Code, we know
        what it takes to execute a seamless and optimized development process.
      </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 font-custom'>
        {/* Idea Step */}
        <div className='text-center'>
          <div className='text-5xl text-blue-500 mb-2'>01</div>
          <p className='font-extrabold border'>Consult your idea</p>
          <p className='mt-5'>Setting the direction with our web development consultants</p>
        </div>
        {/* Choose a Technology Step */}
        <div className='text-center'>
          <div className='text-5xl text-blue-500 mb-2'>02</div>
          <p className='font-extrabold border'>Choose a Technology</p>
          <p className='mt-5'>Explore and select the most suitable technologies that align with your project goals.</p>
        </div>
        {/* Design Step */}
        <div className='text-center'>
          <div className='text-5xl text-blue-500 mb-2'>03</div>
          <p className='font-extrabold border'>Design</p>
          <p className='mt-5'>Craft a visually appealing and user-friendly design that enhances the user experience.</p>
        </div>
        {/* Develop Step */}
        <div className='text-center'>
          <div className='text-5xl text-blue-500 mb-2'>04</div>
          <p className='font-extrabold border'>Develop</p>
          <p className='mt-5'>Bring your project to life with skilled coding, ensuring functionality and performance.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondFrontView;
