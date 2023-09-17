import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import FrameImage from "../assest/heder-image/important.svg";

const Header = () => {
    return (
        <div className="p-2 flex flex-col sm:flex-row">
            {/* Section 1 */}
            <div className="p-4 sm:p-8 lg:p-16">
                <p className="text-gray-500 text-sm">Hello, It's me</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mt-2">Anuj Bhaladhare</h1>
                <p className="text-gray-600 text-lg mt-2">Full Stack Developer Web Developer</p>
                <p className="text-gray-700 text-lg mt-4">Hello! I'm a MERN Stack Developer, passionate about coding and always eager to dive into new and emerging technologies, embracing innovation and continuous learning.</p>

                <div className="flex justify-center mt-6 space-x-4">
                    <BsGithub className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                    <BsLinkedin className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                    <MdAttachEmail className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                </div>

                <div className="mt-8 space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Download CV</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg">Let's Talk</button>
                </div>
            </div>

            {/* Section 2 */}
            <div className="mt-4 p-2 pt-10 sm:mt-0">
                <img src={FrameImage} alt="FrameImage" className="w-[90%]" />
            </div>
        </div>
    );
}

export default Header;
