import React from 'react';

import Navbar from './components/Navbaar';
import Header from './components/Header';
import About from './components/about-me/index';
import Projects from './components/Projects';
import Contact from './components/contact-me/index';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
  return(
    <div className='bg-[#f2f2fe] overflow-x-hidden'>
      <Navbar /> 
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;