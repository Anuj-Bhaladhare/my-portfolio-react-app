import React from "react";
import Navbaar from './components/Navbaar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Home from "./components/Home.js";
import Page from "./components/Page.js";
import Project from "./components/Projects.js";
import './App.css';

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;