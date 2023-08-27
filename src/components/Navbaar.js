import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
            <Link to="/">
                Logo
            </Link></div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white hover:text-blue-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/page" className="text-white hover:text-blue-300">
                Page
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-300">
                Contact
              </Link>
            </li>
          </ul>
        <div className="md:hidden">
          <button className="text-white">
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
    </nav>
  );
};

export default Navbar;
