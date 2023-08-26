import React from "react";
import { Link } from "react-router-dom";

const Navbaar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <div>
                <Link to="/">
                    <h2 className="text-xl font-bold">LOGO</h2>
                </Link>
            </div>

            <ul className="flex space-x-6">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/page">Page</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbaar;
