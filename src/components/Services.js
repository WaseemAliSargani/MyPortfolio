import React from 'react';

// icons
import { BsArrowUpRight } from 'react-icons/bs'

// motion
import { motion } from 'framer-motion';

// services data
const services = [
  {
    name: 'Front-end Developer',
    description: 'My expertise lies in creating user-friendly, modern websites and applications using the latest technologies',
    link: 'Learn more'
  },
  {
    name: 'Web Designer',
    description: 'over 1 year of hands-on experience building responsive and scalable web applications',
    link: 'Learn more'
  },
];


const Services = () => {
  return <div className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image*/}
        <div
          
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 
          data-aos='fade-right'
          data-aos-delay='400'
          className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 
          data-aos='fade-right'
          data-aos-delay='800'
          className='h3 max-w-[455px] mb-16'>
            I'm a Front-end Developer with over 1 year of experience.
          </h3>
          <button
          data-aos='fade-right'
          data-aos-delay='1400'
          className='btn btn-sm'>See my work</button>
        </div>

        {/* services */}
        <div
        data-aos='fade-left'
          data-aos-delay='1000'
        className='flex-1'>
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex gap-x-4' key={index}>
                  {/* text */}
                  <div className='max-w-[470px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>

                  {/* btn link */}
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex items-center justify-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'> {link} </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Services;
