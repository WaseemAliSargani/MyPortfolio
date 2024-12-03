import React from 'react';

// import image
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return <div className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>

        {/* item 1 */}
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2
              data-aos='fade-down'
              data-aos-delay='500'
              className='h2 leading-tight text-accent'>
              My Latest <br />
              Work.
            </h2>
            <p
              data-aos='fade-down'
              data-aos-delay='700'
              className='max-w-sm mb-16'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea minima vitae consequuntur alias harum cum mollitia, velit voluptatum eaque!
            </p>
            <a
              data-aos='fade-down'
              data-aos-delay='900'
              href="https://github.com/WaseemAliSargani" target='_blank'>
              <button
                data-aos='fade-down'
                data-aos-delay='900'
                className='btn btn-sm' >View all Projects</button>
            </a>
          </div>

          {/* image */}
          <div
            data-aos='zoom-in'
            data-aos-delay='1200'
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300 cursor-pointer'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20'>
              <span className='text-gradient'>Front-end Developer</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20'>
              <span className='text-3xl text-white'>Project title</span>
            </div>

          </div>
        </div>

        {/* item 2 */}
        <div className='flex-1 flex flex-col gap-y-10'>

          {/* image  2 */}
          <div
            data-aos='zoom-in'
            data-aos-delay='1400'
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300 cursor-pointer'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20'>
              <span className='text-gradient'>Front-end Developer</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20'>
              <span className='text-3xl text-white'>VR Platform</span>
            </div>

          </div>

          {/* image 3 */}
          <div
            data-aos='zoom-in'
            data-aos-delay='1400'
            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300 cursor-pointer'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20'>
              <span className='text-gradient'>Front-end Developer</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20'>
              <span className='text-3xl text-white'>Music site</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Work;
