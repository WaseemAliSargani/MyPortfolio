import React from 'react';

// countup
import CountUp from 'react-countup';
// inntersection observer
import { useInView } from 'react-intersection-observer'
// motion
import { motion } from 'framer-motion';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  return <section className='section py-12' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
        {/* img */}
        <div
          data-aos='fade-right'
          data-aos-delay='1000'
          className='flex-1 hidden lg:flex bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top '></div>

        {/* text */}
        <div
          data-aos='fade-left'
          data-aos-delay='1000'
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Front-end Developer with over 1 year of experience.</h3>
          <p className='mb-6'>
            👋 Hi, I’m Waseem Ali
            I’m a passionate Front-End Web Developer with over 1 year of hands-on experience building responsive and scalable web applications. My expertise lies in creating user-friendly, modern websites and applications using the latest technologies.

            🚀 Skills & Technologies
            Programming Languages: HTML, CSS, JavaScript
            Frameworks & Libraries: React.js, Next.js, TailwindCSS
            Back-End & Databases: Express.js, MongoDB
            Tools: Git, GitHub
          </p>

          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            {/* item 1 */}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={1 + "+"} duration={8} />
                    : null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of <br />
                Experience
              </div>
            </div>
            {/* item 2 */}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={40} duration={8} />
                    : null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Real World <br />
                Projects Completed
              </div>
            </div>
            {/* item 3 */}
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={12} duration={8} />
                    : null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Latest & Modern <br />
                Technologies
              </div>
            </div>
          </div>

          {/* btn */}
          <div className='flex gap-x-8 items-center '>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>;
};

export default About;
