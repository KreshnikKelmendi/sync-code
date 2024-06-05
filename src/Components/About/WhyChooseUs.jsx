import React from 'react';

const WhyChooseUs = () => {
  const data = [
    {
      number: '01',
      title: 'Comprehensive Software Solutions',
      description: 'We offer a wide range of software solutions, from custom application development to system integration, ensuring all your technological needs are met under one roof.'
    },
    {
      number: '02',
      title: 'Experienced Team',
      description: 'Our team of enthusiastic programmers brings extensive knowledge and expertise to each project, ensuring top-quality results tailored to your business needs.'
    },
    {
      number: '03',
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies and tools to deliver innovative and effective software solutions, keeping your business at the forefront of the digital landscape.'
    },
    {
      number: '04',
      title: 'Measurable Results',
      description: 'We are dedicated to delivering measurable results that drive your business forward. Our approach is data-driven, ensuring that every solution we implement meets your strategic goals.'
    },
    {
      number: '05',
      title: 'Strategic Thinking',
      description: 'Our team adopts a strategic approach to software development, ensuring that every solution is aligned with your business objectives and long-term vision for sustainable success.'
    },
    {
      number: '06',
      title: 'Collaboration and Partnership',
      description: 'At Sync Code, we view our clients as partners and work closely with them to achieve their goals. From initial planning to execution, we are committed to collaborating with our clients to ensure that their needs are met and that their vision is brought to life.'
    }
  ];

  return (
    <div className="bg-black lg:py-16 font-custom">
      <div className="px-6 lg:px-12">
        <div className="mx-auto flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl text-4xl font-bold tracking-tight text-gray-900 text-center">WHY
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#207ead] to-[#00ffc3]"> CHOOSE US</span>
          </h1>
          {/* <p className="mt-6 text-lg text-white text-center lg:w-[70%] 2xl:w-1/2">
            At Sync Code, we deliver innovative software solutions that enhance efficiency and promote growth. With cutting-edge technology and a commitment to excellence,
            we keep your business ahead in the digital world. Choose Sync Code for expertise, seamless integration, and dedicated support tailored to your needs.
          </p> */}
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {data.map(item => (
              <div key={item.number} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-[#207ead]">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#207ead] to-[#00ffc3]">
                    <p className='text-white'>{item.number}</p>
                  </div>{item.title}
                </dt>
                <dd className="mt-2 text-lg leading-7 text-white 2xl:w-3/4">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
