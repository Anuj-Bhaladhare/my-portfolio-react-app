import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Logo</div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                    <Link to="/project" className="text-white hover:text-blue-300">Projects</Link>
                    <Link to="/about" className="text-white hover:text-blue-300">About</Link>
                    <Link to="/page" className="text-white hover:text-blue-300">Page</Link>
                    <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
