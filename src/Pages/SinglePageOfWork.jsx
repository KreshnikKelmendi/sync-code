import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../Components/data/works';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SinglePageOfWork = () => {
  useEffect(() => {
    document.title = 'Sync-Code - Work';
  }, []);

  const { workID } = useParams();
  const work = works?.find((ad) => ad.id == workID);

  // Move hooks to the top level
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  if (!work) {
    return (
      <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>
        WORK NOT FOUND. BAD REQUEST !
      </div>
    );
  }

  const { workName, jobImage1, jobImage2, jobImage3, shortTitle, category, technologies, clientExpectations, partnershipResult } = work;

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-12 lg:mt-16 mt-4 font-custom'>
        <div className='flex'>
          <p className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold uppercase'>{workName}</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-3'>
          <motion.img
            ref={ref1}
            variants={imageVariant}
            initial='hidden'
            animate={inView1 ? 'visible' : 'hidden'}
            className='mt-6 h-80 lg:h-[80vh] w-full object-cover'
            src={jobImage1}
            alt=''
          />
          <motion.img
            ref={ref2}
            variants={imageVariant}
            initial='hidden'
            animate={inView2 ? 'visible' : 'hidden'}
            className='mt-6 h-80 lg:h-[80vh] w-full object-cover'
            src={jobImage2}
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row mt-16 px-4 lg:px-12 font-custom'>
        <div className='w-full grid grid-cols-1 gap-y-5 lg:pr-3 h-auto lg:w-1/2'>
          <p className='text-xl uppercase 2xl:text-3xl'>{shortTitle}</p>
          <p className='text-[#207ead]'>Category: <span className='text-white'>{category}</span></p>
          <p className='text-[#207ead]'>Technologies: <span className='text-white'>{technologies}</span></p>
          <p className='text-[#207ead]'>Client expectations: <span className='text-white'>{clientExpectations}</span></p>
          <p className='text-[#207ead]'>Partnership result: <span className='text-white'>{partnershipResult}</span></p>
        </div>
        <motion.div
          ref={ref3}
          variants={imageVariant}
          initial='hidden'
          animate={inView3 ? 'visible' : 'hidden'}
          className='w-full lg:w-1/2 py-4 lg:py-0'
        >
          <img
            className='h-80 lg:h-[80vh] w-full object-cover secondServiceImage'
            src={jobImage3}
            alt=''
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SinglePageOfWork;
