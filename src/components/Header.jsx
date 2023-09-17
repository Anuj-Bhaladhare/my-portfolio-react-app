import React from 'react';
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { MdAttachEmail } from "react-icons/md";
import FrameImage from "../assest/heder-image/important.svg";

const Header = () => {
    return (
        <div className="p-2 flex flex-col justify-between sm:flex-row w-[100%] pt-10 pb-10 header-gradiant">
            {/* Section 1 */}
            <div className="p-4 sm:p-8 lg:p-16 w-[45%]">
                <p className="text-black font-bold text-[1.5rem]">Hello, It's me</p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mt-2">Anuj Bhaladhare</h1>
                <p className="text-[#212121] font-bold text-lg mt-2">Full Stack Developer Web Developer</p>
                <p className="text-blue-900 text-lg mt-4">Hello! I'm a MERN Stack Developer, passionate about coding and always eager to dive into new and emerging technologies, embracing innovation and continuous learning.</p>

                {/* <div className="flex flex-row gap-10 mt-7">
                    <BsGithub className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                    <BsLinkedin className="text-3xl text-blue-600 hover:text-blue-900 cursor-pointer" />
                    <MdAttachEmail className="text-4xl text-red-500 hover:text-red-600 cursor-pointer" />
                </div> */}

                <div className="mt-8 space-x-4">
                    <button className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 border border-blue-500 rounded-md">Let's Talk</button>
                    <button className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 border border-blue-500 rounded-md">Download CV</button>
                </div>
            </div>

            {/* Section 2 */}
            <div className="mt-4 p-2 pt-10 lg:pr-[-7%] sm:mt-0 w-[50%]">
                <img src={FrameImage} alt="FrameImage" className="w-[90%]" />
            </div>
        </div>
    );
}

export default Header;
