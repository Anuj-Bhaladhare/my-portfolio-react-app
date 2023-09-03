import React from "react";
import frameImage from "../assest/frame-image.png";
// import About from "./About";
// import Contact from "./Contact";
// import Page from "./Page";
// import Projects from "./Projects";

const Home = () => {
    return(
        <div>
            <div className="flex items-center justify-around">
                <div className="text-center sm:text-left font-bold text-[3rem]">
                    <h1 className="text-[#2BB4D4] ">Hello, I'm</h1>
                    <h1 className="text-[#2E2E2E]">ANUJ BHALADHARE</h1>
                    <h1 className="text-[#004AAD]">FULL-STACK WEB DEVELOPER</h1>
                </div>
                <div className="mt-4 sm:mt-0 container mx-auto p-4">
                    <img src={frameImage} className="max-w-full h-auto" alt="Anuj Bhaladhare" />
                </div>
            </div>
        </div>
    )
}

export default Home;