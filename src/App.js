import React, { useEffect } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
