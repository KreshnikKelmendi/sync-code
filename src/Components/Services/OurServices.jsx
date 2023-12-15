import React from 'react';

const OurServices = () => {
  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-16 lg:mt-20 mt-16 font-custom'>
        <p className='text-3xl font-semibold uppercase'>Our Services</p>
        <div className='mt-14'>
          <div className='mb-4'>
            <p className='text-4xl lg:text-5xl font-semibold'>Web Development</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='text-lg font-normal mt-3 lg:w-[90%] text-gray-300'>
                We specialize in creating advanced websites that are modern, responsive, and custom-fit 
                for your business. Our skilled team uses the latest tech to ensure your online presence 
                is not just visually appealing but also easy to use and highly functional
              </p>
              <p to='/web-development' className='text-blue-500'>Learn more &rarr;</p>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
          <div className='mb-4 mt-12'>
            <p className='text-4xl lg:text-5xl font-semibold'>Machine Learning & Analytics</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='text-lg font-normal mt-3 lg:w-[90%] text-gray-300'>
                Our advanced offerings empower you to harness the full power of data, utilizing 
                cutting-edge technologies to derive meaningful insights and drive informed 
                decision-making for your business.
              </p>
              <p to='/machine-learning' className='text-blue-500'>Learn more &rarr;</p>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
          <div className='mb-4 mt-12'>
            <p className='text-4xl lg:text-5xl font-semibold'>Mobile Development</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='text-lg font-normal mt-3 lg:w-[90%] text-gray-300'>
                We build mobile apps for different platforms. Our dedicated team focuses on innovation 
                and user-friendliness, using the latest technologies to turn your ideas into functional 
                and appealing applications.
              </p>
              <p to='/mobile-development' className='text-blue-500'>Learn more &rarr;</p>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
