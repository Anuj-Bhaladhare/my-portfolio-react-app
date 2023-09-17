import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Logo from '../assest/heder-image/logo.png'; // Corrected asset path
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="p-4 header-gradiant">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="#home" smooth className="flex items-center">
            <img src={Logo} className="h-14" alt="satyam" />
          </Link>
          <button
            className="lg:hidden navbar-toggler focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="hidden lg:flex lg:items-center" id="navbarTogglerDemo02">
            <ul className="lg:flex lg:ml-auto lg:space-x-6">
              <li>
                <Link to="#home" smooth className="text-lg hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about" smooth className="text-lg hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="#projects" smooth className="text-lg hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#contact" smooth className="text-lg hover:text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
