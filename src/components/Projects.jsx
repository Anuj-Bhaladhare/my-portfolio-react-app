import React from "react";
import { projectData } from "../projectData";

const Project = () => {
    return (
        <div>
            {projectData.map((project, index) => {
                return (
                    <div key={index}>
                        <p>{project.name}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <button>{project.name}</button>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Project;