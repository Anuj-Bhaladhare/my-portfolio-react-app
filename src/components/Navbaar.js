import React from "react";
import { Link } from "react-router-dom";

const Navbaar = () => {
    return (
        <nav>

            <div>
                <Link>
                   <h2>LOGO</h2>
                </Link>
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="/page">Page</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Navbaar;
