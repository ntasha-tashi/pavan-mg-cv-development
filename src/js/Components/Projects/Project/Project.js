import React from "react";
import "./_project.scss";
import link from "../../../../assets/link.svg";
import code from "../../../../assets/projectcode.svg";

const Project = ({project}) => {
    return (
        <article className="project">
            <img src={project.img} alt="Project"/>
            <div className="project__container">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">Tech stack: {project.stack}</p>
                <div className="project__actions">
                    <a href={project.preview}>
                        <img src={link} alt="Live preview" />
                        Live Preview
                    </a>
                    <a href={project.code}>
                        <img src={code} alt="View Code" />
                        View Code
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Project;