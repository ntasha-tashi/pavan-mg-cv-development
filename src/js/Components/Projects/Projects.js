import React, {userState, useEffect, useState} from "react";
import "./_projects.scss";
import img from "../../../assets/project.png";
import Project from "./Project/Project";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const api = process.env.API_ENDPOINT;
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    const getProjects = async () => {
    const getProjects = () => {
        fetch("https://api.jsonsilo.com/1d064789-25a6-4224-9262-bc48ad906d70",
            {
                headers: {
                    "X-SILO-KEY": "HG3AwOh8oY6FLWdUcebDrYE0H9XalST9b0zI00MivB"
                },
            })
            .then((response) => response.json())
            .then((result) => setProjects(result.projects))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        getProjects();

    }, []);
    return (
        <div className="projects row">
            {projects.map((project, i) => (
                <div className="col-3">
                    <Project project={project} key={i} />
                </div>
            ))}
        </div>
    )
}
}
export default Projects;