import React from 'react';
import NavBaar from './components/Navbaar';
import Header from './components/Header';
import About from './components/about-me/index';
import Projects from './components/Projects';
import Contact from './components/contact-me/index';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBaar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
