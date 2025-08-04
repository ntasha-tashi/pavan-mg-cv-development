import React, {useState, useEffect} from "react";
import "./_projects.scss";
import Project from "./Project/Project";
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const api = process.env.API_ENDPOINT;
    const apiKey = process.env.API_KEY;
    console.log(apiKey);
    const getProjects = async () => {
       await fetch(api,
            {
                headers: {
                    "X-SILO-KEY" : apiKey,
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
                <div className="col-3" key={i} >
                    <Project project={project} />
                </div>
            ))}
        </div>
    )
}

export default Projects;