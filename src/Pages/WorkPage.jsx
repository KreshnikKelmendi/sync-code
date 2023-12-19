import React from 'react'
import Card from '../Components/Works/Card'

const WorkPage = () => {
  return (
    <div className='w-full text-white py-4'>
        <div
        className='px-4 lg:px-16 mt-4 lg:mt-10 font-custom'
        >
        <p className='text-2xl lg:text-4xl font-semibold uppercase 2xl:text-5xl'>OUR WORKS</p>
        <p className='py-6 text-gray-500 lg:w-[50%]'>
            At Sync-Code we take pride in our ability to deliver high-quality software services to a 
            diverse clientele. Having collaborated with a wide range of clients, from small businesses 
            to major global brands, our team possesses the skills and experience to meet the unique needs
            of each project.
        </p>
        <Card />
        </div>
    </div>
  )
}

export default WorkPage