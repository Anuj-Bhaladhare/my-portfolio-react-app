import React from "react";
import Introduction from './components/Introduction.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Page from "./components/Page.js";
import Project from "./components/Projects.js";
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <Router>
      <Introduction />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
