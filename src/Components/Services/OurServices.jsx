import React from 'react';
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-16 lg:mt-20 mt-16 font-custom'>
        <p className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold uppercase'>Our Services</p>
        <div className='mt-14'>
          <div className='mb-4'>
            <p className='text-4xl lg:text-5xl 2xl:font-6xl font-semibold'>Web Development</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='font-normal mt-3 lg:w-[90%] 2xl:text-lg text-gray-500'>
                We specialize in creating advanced websites that are modern, responsive, and custom-fit 
                for your business. Our skilled team uses the latest tech to ensure your online presence 
                is not just visually appealing but also easy to use and highly functional
              </p>
              <Link to='/web-development' onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-[#207ead] hover:scale-110 hover:text-white'>Read more &rarr;</Link>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
          <div className='mb-4 mt-12'>
            <p className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold'>Machine Learning & Analytics</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='2xl:text-lg font-normal mt-3 lg:w-[90%] text-gray-500'>
                Our advanced offerings empower you to harness the full power of data, utilizing 
                cutting-edge technologies to derive meaningful insights and drive informed 
                decision-making for your business.
              </p>
              <p to='/machine-learning' className='text-[#207ead]'>Read more &rarr;</p>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
          <div className='mb-4 mt-12'>
            <p className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold'>Mobile Development</p>
            <div className='flex flex-col lg:flex-row items-end justify-between'>
              <p className='2xl:text-lg font-normal mt-3 lg:w-[90%] text-gray-500'>
                We build mobile apps for different platforms. Our dedicated team focuses on innovation 
                and user-friendliness, using the latest technologies to turn your ideas into functional 
                and appealing applications.
              </p>
              <p to='/mobile-development' className='text-[#207ead]'>Read more &rarr;</p>
            </div>
          </div>
          <hr className='my-4 border-t-2 border-white' />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
