import React from 'react';

const Contact = () => {
  return <div className='py-16 mb-14 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>

        {/* text */}
        <div
        data-aos='fade-right'
            data-aos-delay='1000'
        className='flex-1'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> Together!
            </h2>
          </div>
        </div>

        {/* form */}
        <form 
        data-aos='fade-left'
            data-aos-delay='1200'
        className='flex-1 flex flex-col border-2 rounded-xl border-white/50 py-8 px-6'>
          <input type="text" placeholder='Your name' className='bg-transparent focus:border-accent border-b-2 placeholder:text-white/90 transition-all duration-300 resize-none border-white/70 outline-none py-4 px-4 mb-6 text-xl text-white/90' />

          <input type="email" className='bg-transparent focus:border-accent border-b-2 placeholder:text-white/90 transition-all duration-300 resize-none border-white/70 outline-none py-4 px-4 mb-14 text-white/90 text-xl' placeholder='Your email' />

          <textarea className='bg-transparent focus:border-accent border-b-2 placeholder:text-white/90 transition-all duration-300 resize-none border-white/70 outline-none py-6 px-4 mb-12 text-xl' placeholder='Your message'></textarea>
          <div>
            <button className='btn btn-lg lg:mx-0'>Send message</button>
          </div>
        </form>

      </div>
    </div>
  </div>;
};

export default Contact;
