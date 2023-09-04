import React from "react";
import "./App.css";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/comman/Footer";
import Navbar from "./components/comman/Navbaar";
import Introduction from "./components/pages/Introduction";
import Contact from "./components/pages/Contact";

function App() {
  return (
      <div>
        <Navbar />
        <Introduction />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
