import React from 'react';

// import logo
import Logo from '../assets/logo.svg'


const Header = () => {
  return <header className='py-8' id='home'>
    <div className="container mx-auto">
      {/* logo */}
      <div className='flex justify-between items-center'>
        <a
          data-aos='fade-down'
          data-aos-delay='900'
          href="#">
          <img src={Logo} alt="" />
        </a>
        {/* btn */}
        <button
          data-aos='fade-down'
          data-aos-delay='1200'
          className='btn btn-sm'>Work with me</button>
      </div>

    </div>
  </header>;
};

export default Header;
