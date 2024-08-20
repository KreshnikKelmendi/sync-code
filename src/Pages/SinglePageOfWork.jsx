import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { works } from '../Components/data/works';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import youtube from "../Components/Assets/youtube.png";

const SinglePageOfWork = () => {
  useEffect(() => {
    document.title = 'Sync Code - Work';
  }, []);

  const { workID } = useParams();
  const work = works?.find((ad) => ad.id === workID);

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });

  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  if (!work) {
    return (
      <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>
        WORK NOT FOUND. BAD REQUEST !
      </div>
    );
  }

  const {
    workName,
    jobImage1,
    jobImage2,
    jobImage3,
    jobImage4,
    jobImage5,
    shortTitle,
    category,
    technologies,
    clientExpectations,
    partnershipResult,
    liveLink,
    description,
    fullDescription2,
    tutorialLink,
    specificDescription,
    sections,
    practicalTitleExample,
    practicalTitleDescription,
    practicalTitleDescription2,
    specialSections,
    conclusion,
    conclusion2,
    conclusion3,
    writeEmail
  } = work;

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-12 lg:mt-6 mt-4 font-custom'>
        <div className='flex'>
          <p className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold uppercase'>{workName}</p>
        </div>
        {specificDescription && (
          <p className='font-custom mt-4'>{specificDescription}</p>
        )}
        <div className='grid lg:grid-cols-2 gap-3'>
          {jobImage1 && (
            <motion.img
              ref={ref1}
              variants={imageVariant}
              initial='hidden'
              animate={inView1 ? 'visible' : 'hidden'}
              className='mt-6 h-80 lg:h-[80vh] w-full object-cover rounded-md'
              src={jobImage1}
              alt=''
            />
          )}

          {jobImage2 && (
            <motion.img
              ref={ref2}
              variants={imageVariant}
              initial='hidden'
              animate={inView2 ? 'visible' : 'hidden'}
              className='mt-6 h-80 lg:h-[80vh] w-full object-cover rounded-md'
              src={jobImage2}
              alt=''
            />
          )}
        </div>

      </div>

       <div className='px-4 lg:px-12 mt-6 font-custom'>
      {fullDescription2 && (
          <p className='font-custom mb-8 rounded-md text-lg bg-gradient-to-r from-[#207ead] to-[#00ffc3] p-4'>{fullDescription2}</p>
        )}
        {sections?.map((section, index) => (
          <div key={index} className='mb-8 border-b border-[#207ead] pb-2'>
            <div 
              className='flex items-center justify-between cursor-pointer'
              onClick={() => handleToggle(index)}
            >
              <p className='text-lg uppercase'>{section.title}</p>
              <span className='text-base py-1 px-2'>
                {openSection === index ? '↑' : '↓'}
              </span>
            </div>
            <AnimatePresence>
              {openSection === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='overflow-hidden mt-2 font-custom'
                >
                  <p className='font-custom text-base lg:w-1/2'>{section.descriptionTitle}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>


      <div className='flex flex-col lg:flex-row mt-16 px-4 lg:px-12 font-custom'>
        <div className='w-full flex flex-col justify-center gap-y-5 lg:pr-3 h-auto lg:w-1/2'>
          <p className='text-xl uppercase 2xl:text-3xl'>{shortTitle}</p>
          {category && (
            <p className='text-[#207ead]'>
              Category: <span className='text-white'>{category}</span>
            </p>
          )}

          {practicalTitleExample && (
            <p className='text-[#207ead] lg:py-4'>
              <span className='text-white'>{practicalTitleExample}</span>
            </p>
          )}

          {practicalTitleDescription && (
            <p className='text-[#207ead]'>
              <span className='text-white'>{practicalTitleDescription}</span>
            </p>
          )}
           {practicalTitleDescription2 && (
            <p className='text-[#207ead] lg:py-4'>
              <span className='text-white'>{practicalTitleDescription2}</span>
            </p>
          )}
          {technologies && (
            <p className='text-[#207ead]'>
              Technologies: <span className='text-white'>{technologies}</span>
            </p>
          )}
          {description && (
            <p className='text-[#207ead]'>
              Description: <span className='text-white'>{description}</span>
            </p>
          )}
          {clientExpectations && (
            <p className='text-[#207ead]'>
              Client expectations: <span className='text-white'>{clientExpectations}</span>
            </p>
          )}
          {partnershipResult && (
            <p className='text-[#207ead]'>
              Partnership result: <span className='text-white'>{partnershipResult}</span>
            </p>
          )}
        </div>
          {jobImage3 && (
            <motion.div
              ref={ref3}
              variants={imageVariant}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              className="w-full lg:w-1/2 py-4 lg:py-0"
            >
              <img
                className="h-80 lg:h-[100vh] w-full object-cover rounded-md"
                src={jobImage3}
                alt=""
              />
            </motion.div>
          )}
      </div>

      <div>
        {specialSections && specialSections.length > 0 && (
          <div className='px-4 lg:px-12 font-custom grid lg:grid-cols-3 gap-4 mt-6'>
            {specialSections.map((section, index) => (
              <div key={index} className='bg-white text-black rounded-md p-6 shadow-lg'>
                <h2 className='text-2xl lg:text-3xl font-bold mb-4'>{section.titleS}</h2>
                <p className='text-lg mb-4'>{section.description}</p>
                <img src={section.imageS} alt={section.titleS} className='w-full h-auto rounded-md object-cover' />
              </div>
            ))}
          </div>
        )}
      </div>

    <div className='px-4 lg:px-12 mt-6 font-custom'>
        {conclusion && (
          <p className='text-white text-3xl uppercase lg:text-6xl'>{conclusion}</p>
        )}
        <div className='flex flex-col lg:flex-row mt-6'>
          <div>
            {conclusion2 && (
              <p className='text-white text-lg'>{conclusion2}</p>
            )}
            {conclusion3 && (
              <p className='text-white text-lg mt-6'>{conclusion3}</p>
            )}
          </div>
       </div>
    </div>
     

      <div className='px-4 lg:px-12 mt-6 lg:mt-16 flex flex-col'>
        <p className='lg:w-[80%] text-[#207ead] text-4xl leading-[55px] lg:leading-[80px] lg:mt-7 lg:text-6xl 2xl:text-[100px] 2xl:leading-[120px] uppercase font-custom'>
          {shortTitle}
        </p>
        {liveLink && (
          <a className='bg-gradient-to-r from-[#207ead] to-[#00ffc3] text-white hover:text-black font-bold font-custom rounded-md p-3 w-1/2 lg:w-1/5 text-center mt-6' href={liveLink} target='_blank' rel='noreferrer'>
            Check it out
          </a>
        )}
        {tutorialLink && (
          <div className='flex gap-x-1 mt-3 hover:text-white w-fit'>
            <img src={youtube} alt='' className='w-7 h-7 mt-2'/>
            <a href={tutorialLink} target='_blank' rel='noopener noreferrer' className='text-[#207ead] font-custom mt-3 hover:text-white inline-block' title='See the tutorial on YouTube'>See Tutorial &rarr;</a>
          </div>
        )}
      </div>

      <div className='px-4 lg:px-12 mt-6'>
        {writeEmail && (
            <p className='text-white italic text-xl lg:w-1/2'>{writeEmail}</p>
          )}
      </div>

      <div className='px-4 lg:px-12 gap-3 mt-6 grid lg:grid-cols-2'>
        {jobImage4 && (
          <motion.img
            ref={ref4}
            variants={imageVariant}
            initial='hidden'
            animate={inView4 ? 'visible' : 'hidden'}
            className='mt-6 h-80 lg:h-[85vh] w-full object-cover rounded-md'
            src={jobImage4}
            alt=''
          />
        )}
        {jobImage5 && (
          <motion.img
            ref={ref5}
            variants={imageVariant}
            initial='hidden'
            animate={inView5 ? 'visible' : 'hidden'}
            className='mt-6 h-80 lg:h-[85vh] w-full object-cover rounded-md'
            src={jobImage5}
            alt=''
          />
        )}
      </div>
      
    </div>
  );
};

export default SinglePageOfWork;
