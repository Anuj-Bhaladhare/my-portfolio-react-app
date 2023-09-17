import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-col justify-center items-center mx-auto text-center pt-10 pb-5">
            <div>
                <h4 className="font-bold text-[2rem]">Anuj Bhaladhare</h4>
            </div>
            <div className="flex flex-row gap-10 mt-7 mb-10">
                <BsGithub className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer" />
                <BsLinkedin className="text-3xl text-blue-600 hover:text-blue-900 cursor-pointer" />
                <MdAttachEmail className="text-4xl text-red-500 hover:text-red-600 cursor-pointer" />
            </div>
            <div>
                <hr className="w-[50rem]"></hr>
                <p className="mt-4">Copyright © Anuj Bhaladhare 2023.</p>
            </div>
        </div>
    );
}

export default Footer;
