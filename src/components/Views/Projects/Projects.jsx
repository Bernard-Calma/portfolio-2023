import { SectionMenu, ProjectCard } from './components';
import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 0,
            name: "Spentrace",
            description: "A simple budgeting app that tracks daily cash flow, calculates available spending, and projects upcoming financial needs.",
            image: "/images/projects/Spentrace.png",
            tags: ["react", "css", "nodejs", "mongodb"],
            link: "https://spentrace-react.herokuapp.com/"
        },
        // Add more projects as needed
    ]);

    return (
        <main id="projects">
            <SectionMenu />
            <div className={`page-view projects`}>
                <p className="page-title">{`all;`}</p>
                <div className="page-mainview">
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <div key={index} className="project-container">
                                <p>Project {`${project.id + 1} `}<span className="project-name">{`// _${project.name}`}</span></p>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;