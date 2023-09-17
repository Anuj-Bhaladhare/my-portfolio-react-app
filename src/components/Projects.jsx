import React from "react";
import { projectData } from "../projectData";

const Project = () => {
    return (
        <div>
            <div className='p-5 mt-8 flex flex-col justify-center items-center'>
                <h1 className='font-bold text-[2rem]'>PROJECTS</h1>  
                <div className='flex justify-center items-center text-center mx-auto h-1 w-20 bg-blue-500'></div>
                <p>Here you will find some of my personal projects that I created</p>
            </div>
            <div className="flex flex-wrap gap-10 rounded-xl justify-center mx-auto items-center">
                {projectData.map((project, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-white p-4 rounded-xl hover:border hover:border-blue-500 text-center font-semibold">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img src={project.image} alt="image" className="h-28 rounded-md"/>
                                    <button className="text-center">{project.name}</button>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;