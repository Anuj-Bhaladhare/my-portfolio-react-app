import React from "react";
import AnujPhoto from "../assest/anuj photo.jpg";
import About from "./About";
import Contact from "./Contact";
import Page from "./Page";
import Projects from "./Projects";

const Home = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-around bg-red-500 sm:flex-row">
                <div className="text-center sm:text-left">
                    <h1>Hello, I'm</h1>
                    <h1>ANUJ BHALADHARE</h1>
                    <h1>FULL-STACK WEB DEVELOPER</h1>
                </div>
                <div className="mt-4 sm:mt-0">
                    <img src={AnujPhoto} alt="Anuj Bhaladhare" />
                </div>
            </div>

            <div>
                <About />
            </div>
            <div>
               <Projects />
            </div>
            <div>
               <Contact />
            </div>
            <div>
                <Page />
            </div>
        </div>
    )
}

export default Home;