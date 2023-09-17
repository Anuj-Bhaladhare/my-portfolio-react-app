import React from "react";
import { projectData } from "../projectData";

const Project = () => {
    return (
        <div>
            <div>
                <h1>PROJECTS</h1>
                <div>line</div>
                <p>Here you will find some of my personal projects that I created</p>
            </div>
            <div className="flex flex-wrap gap-5">
                {projectData.map((project, index) => {
                    return (
                        <div key={index}>
                            <p>{project.name}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt="image" className="h-24"/>
                                <button>{project.name}</button>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Project;