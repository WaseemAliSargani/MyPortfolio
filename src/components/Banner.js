import React from 'react';

// image
import Image from '../assets/mypic.png'
// import icons
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12 gap-y-8'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <div>
            <h1
              data-aos='fade-down'
              data-aos-delay='700'
              className='text-[55px] font-bold mb-6 leading-[0.8] xl:text-[110px] lg:text-[80px]'>Waseem <span>Ali</span></h1>
            <div
              data-aos='fade-down'
              data-aos-delay='900'
              className='text-[36px] lg:text-[45px] xl:text-[60px] mb-6 font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am </span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  3000,
                  'Designer',
                  3000,
                ]}
                speed={38}
                wrapper='span'
                repeat={Infinity}
                className='text-accent'
              />
            </div>
            <p
              data-aos='fade-down'
              data-aos-delay='1100'
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid debitis vitae.
            </p>
            <div
              data-aos='fade-down'
              data-aos-delay='1300'
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a
                data-aos='fade-down'
                data-aos-delay='700'
                href="#">
                <FaGithub />
              </a>
              <a
                data-aos='fade-down'
                data-aos-delay='800'
                href="#">
                <FaLinkedin />
              </a>
              <a
                data-aos='fade-down'
                data-aos-delay='900'
                href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* image */}
        <div
          data-aos='fade-up'
          data-aos-delay='1100'
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <div className='flex-1 hidden lg:flex bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top rounded-b-full'></div>
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
