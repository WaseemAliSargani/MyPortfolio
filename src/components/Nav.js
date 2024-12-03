import React from 'react';

// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs'

// import Links
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav
    data-aos='zoom-in'
    data-aos-delay='700'
    className='fixed bottom-8 w-full lg:bottom-8 overflow-hidden z-50'>
    <div className="container mx-auto  ">

      {/* nav btns */}
      <div className='w-full max-w-[460px] h-[96px] bg-black/20 backdrop-blur-2xl rounded-full px-5 flex justify-between items-center text-white/50 text-2xl mx-auto'>
        {/* item 1 */}
        <Link
          to="home"
          activeClass='active'
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiHomeAlt />
        </Link>
        {/* item 2 */}
        <Link
          to="about"
          activeClass='active'
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BiUser />
        </Link>
        {/* item 3 */}
        <Link
          to="services"
          activeClass='active'
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsClipboardData />
        </Link>
        {/* item 4 */}
        <Link
          to="work"
          activeClass='active'
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsBriefcase />
        </Link>
        {/* item 5 */}
        <Link
          to="contact"
          activeClass='active'
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
          <BsChatSquareText />
        </Link>
      </div>

    </div>
  </nav>
};

export default Nav;
