import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { works } from '../Components/data/works';

const SinglePageOfWork = () => {

  useEffect(() => {
    document.title = 'Sync-Code - Work';
  }, []);
  
    const { workID } = useParams();
    const work = works?.find((ad) => ad.id == workID);

    const { workName, jobImage1, jobImage2, shortTitle, category, technologies, clientExpectations, partnershipResult} = work;

  
    if (!work) {
      return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
    }
  return (
    <div className='text-white py-4'>
      <div className='px-4 lg:px-16 lg:mt-16 mt-4 font-custom'>
        <div className='flex'>
          <p className='text-3xl lg:text-4xl 2xl:text-5xl font-semibold uppercase'>{workName}</p>
        </div>
          <img className='mt-6 object-cover' src={jobImage1} alt='' />
      </div>
      <div className="flex flex-col lg:flex-row mt-16 px-4 lg:px-16 font-custom">
          <div className="w-full grid grid-cols-1 gap-y-5 lg:px-3 h-auto lg:w-1/2">
            <p className='text-xl uppercase 2xl:text-3xl'>{shortTitle}</p>
            <p className='text-blue-500'>Category: <span className='text-gray-500'> {category}</span></p>
            <p className='text-blue-500'>Technologies: <span className='text-gray-500'> {technologies}</span></p>
            <p className='text-blue-500'>Client expectations: <span className='text-gray-500'> {clientExpectations}</span></p>
            <p className='text-blue-500'>Partnership result: <span className='text-gray-500'> {partnershipResult}</span></p>
          </div>

          <div className="w-full lg:w-1/2 py-4 lg:py-0">
            <img className='h-auto object-cover' src={jobImage2} alt='' />
          </div>
        </div>
    </div>
  )
}

export default SinglePageOfWork