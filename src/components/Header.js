import React from 'react';

// import logo
import Logo from '../assets/logo.svg'


const Header = () => {
  return <header className='py-8' id='home'>
    <div className="container mx-auto">
      {/* logo */}
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* btn */}
        <button className='btn btn-sm'>Work with me</button>
      </div>

    </div>
  </header>;
};

export default Header;
