import React from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import About from "./components/core/About";
import Contact from "./components/core/Contact";
import Home from "./components/pages/Home";
import Project from "./components/core/Projects";
import Footer from "./components/comman/Footer";
import Navbar from "./components/comman/Navbaar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
