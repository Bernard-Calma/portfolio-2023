import { SectionMenu, ProjectCard } from './components';
import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 0,
            name: "WLTS",
            description: "Developed a React front-end with Kanban boards, calendar, and role-based access for team collaboration.",
            image: "/images/projects/WLTS.png",
            tags: ["React", "Redux"],
            link: "https://my-ward-demo-8b90a86588e7.herokuapp.com/"
        },
        {
            id: 1,
            name: "Spentrace",
            description: "A simple budgeting app that tracks daily cash flow, calculates available spending, and projects upcoming financial needs.",
            image: "/images/projects/Spentrace.png",
            tags: ["React", "Redux", "NodeJS", "MongoDB"],
            link: "https://spentrace-react.herokuapp.com/"
        },
        {
            id: 2,
            name: "Autonomous Firefighting Swarm Project",
            description: "Developed robotic designs and programmed autonomous behavior with Arduino and Fusion360.",
            image: "/images/projects/ASUProject.png",
            tags: ["Arduino", "Fusion360", "C#"],
            link: "https://drive.google.com/file/d/1Ux5uFwBRnbHCjY8Jwmoaw-i1W4hFTJXl/view"
        },
        {
            id: 3,
            name: "Streamin",
            description: "A video-sharing platform with posts, likes, and comments, optimized for SEO and accessibility.",
            image: "/images/projects/Streamin.png",
            tags: ["React", "NodeJS", "Redux", "MongoDB"],
            link: "https://streamin-react.herokuapp.com/"

        },
        {
            id: 4,
            name: "HelloTube",
            description: "Created a YouTube clone using React, Redux, SCSS, and the YouTube API.",
            image: "/images/projects/HelloTube.png",
            tags: ["React", "Redux", "youtube"],
            link: "https://hello-tube-1db40b56a45b.herokuapp.com/"

        },
        {
            id: 5,
            name: "NexChapter",
            description: "An app to track and manage your online reading list.",
            image: "/images/projects/NexChapters.png",
            tags: ["React", "css", "Python", "PostgreSQL"],
            link: "https://nexchapters.herokuapp.com/"
        }
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