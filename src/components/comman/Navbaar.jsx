import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assest/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 lg:relative">
      <div className="container mx-auto flex justify-between lg:fixed lg:left-[7%] items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">
            <img className="h-12" src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              About
            </Link>
          </li>
          <li>
            <Link to="/page" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Page
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#004AAD]">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="bg-[#dff9ff] bg-blur-50 rounded-md text-right pr-10 text-white mt-2 space-y-2">
          <li>
            <Link to="/" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              About
            </Link>
          </li>
          <li>
            <Link to="/page" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Page
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-[#004AAD] font-bold hover:text-[#2BB4D4]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
