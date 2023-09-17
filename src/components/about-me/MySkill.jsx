import React from 'react';

import Bootstrap from "../../assest/skills-img/bootstrap.png";
import Cprogramming from "../../assest/skills-img/c-programming.png";
import CPPprogramming from "../../assest/skills-img/c++.png";
import CSS from "../../assest/skills-img/css-3.png";
import ExpressJs from "../../assest/skills-img/express.png";
import GitIcon from "../../assest/skills-img/git-icon.png";
import GitHub from "../../assest/skills-img/github.png";
import HTML from "../../assest/skills-img/html.png";
import JavaScript from "../../assest/skills-img/js.png";
import MongoDB from "../../assest/skills-img/mongodb.png";
import NodeJs from "../../assest/skills-img/nodejs.png";
import Postman from "../../assest/skills-img/postman.png";
import ReactIcon from "../../assest/skills-img/react.png";
import TailwindCSS from "../../assest/skills-img/tailwind-css.svg";

const webDevlopment = [
    {
        id: 1,
        icon: HTML,
        name: "HTML",
    },
    {
        id: 2,
        icon: CSS,
        name: "CSS",
    },
    {
        id: 3,
        icon: JavaScript,
        name: "JS",
    },
    {
        id: 4,
        icon: Bootstrap,
        name: "Bootstrap",
    },
    {
        id: 5,
        icon: TailwindCSS,
        name: "TailwindCSS",
    },
    {
        id: 6,
        icon: ReactIcon,
        name: "React.js",
    },
    {
        id: 7,
        icon: ExpressJs,
        name: "Express.js",
    },
    {
        id: 8,
        icon: NodeJs,
        name: "Node.js",
    },
    {
        id: 9,
        icon: MongoDB,
        name: "MongooDB",
    },
];

const languageSkill = [
    {
        id: 1,
        icon: Cprogramming,
        name: "C",
    },
    {
        id: 1,
        icon: CPPprogramming,
        name: "C++",
    },
];

const ToolsSkills = [
    {
        id: 1,
        icon: GitIcon,
        name: "Git",
    },
    {
        id: 1,
        icon: GitHub,
        name: "GitHub",
    },
    {
        id: 1,
        icon: Postman,
        name: "Postman",
    },
];

const MySkill = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col gap-20 justify-center'>
                <div className='flex flex-row'>
                    <div className="flex flex-row border-r-4 border-blue-500 items-center justify-center mx-auto pr-5 font-bold">
                       <div><p>W</p><p>E</p><p>B</p></div>
                       <p>-</p>
                       <div><p>D</p><p>E</p><p>V</p></div>
                    </div>

                    <div className='flex flex-wrap justify-center items-center text-center'>
                        {
                            webDevlopment.map((image, index) => (
                                <div key={index} className='bg-white flex flex-row m-3 p-2 rounded-md cursor-pointer hover:border hover:border-sky-500'>
                                    <a href={image.link}>
                                        <img className='h-10 m-8' src={image.icon} alt={`Skill ${index}`} />
                                        <p>{image.name}</p>         
                                    </a>
                                </div>
                            ))
                        }
                    </div>  
                </div>

                <div className='flex flex-row gap-16'>
                    <div className='flex flex-row ml-5'>
                        <div className="flex flex-col border-r-4 border-blue-500 items-center justify-center mx-auto pr-5 font-bold">
                           <p>L</p><p>A</p><p>N</p><p>G</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center text-center'>
                            {
                                languageSkill.map((image, index) => (
                                    <div key={index} className='bg-white flex flex-row m-3 p-2 rounded-md cursor-pointer hover:border hover:border-sky-500'>
                                        <a href={image.link}>
                                            <img className='h-10 m-8' src={image.icon} alt={`Skill ${index}`} />
                                            <p>{image.name}</p>
                                        </a>
                                    </div>
                                ))
                            }  
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className="flex flex-col border-r-4 border-blue-500 items-center justify-center mx-auto pr-5 font-bold">
                            <p>T</p><p>O</p><p>O</p><p>L</p><p>S</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center text-center'>
                            {
                                ToolsSkills.map((image, index) => (
                                    <div key={index} className='bg-white flex flex-row m-3 p-2 rounded-md cursor-pointer hover:border hover:border-sky-500'>
                                        <a href={image.link}>
                                            <img className='h-10 m-8' src={image.icon} alt={`Skill ${index}`} />
                                            <p>{image.name}</p>
                                        </a>
                                    </div>
                                ))
                            } 
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySkill;
