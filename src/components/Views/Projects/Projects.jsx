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
            tags: ["TypeScript", "React", "Redux", "youtube"],
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

    const [projectsFilters, setProjectsFilters] = useState([])
    const [filterList, setFilterList] = useState([
        {label: "React", icon: "https://img.icons8.com/color/256/react-native.png"},
        {label: "NodeJS", icon: "https://img.icons8.com/color/256/nodejs.png"},
        {label: "Redux", icon: "https://img.icons8.com/color/256/redux.png"},
        {label: "MongoDB", icon: "https://img.icons8.com/color/256/mongodb.png"},
        {label: "PostgreSQL", icon: "https://img.icons8.com/color/256/postgreesql.png"},
        {label: "Arduino", icon: "https://img.icons8.com/color/256/arduino.png"},
        {label: "C#", icon: "https://img.icons8.com/color/256/c-sharp-logo.png"},
        {label: "Python", icon: "https://img.icons8.com/color/256/python.png"},
        {label: "Fusion360", icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fdivlview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4"},
    ]) 

    const handleProjectsFilters = (e, filter) => {
        e.preventDefault() // prevent the default behavior of the event
        // check if the filter is already in the array
        if (projectsFilters.includes(filter)) {
            // if it is, remove it from the array
            setProjectsFilters(projectsFilters.filter(item => item !== filter))
        } else {
            // if it is not, add it to the array
            setProjectsFilters([...projectsFilters, filter])
        }
    }

    return (
        <main id="projects">
            <SectionMenu 
                filterList={filterList}
                projectsFilters={projectsFilters}
                handleProjectsFilters={handleProjectsFilters}
            />
            <div className={`page-view projects`}>
                <p className="page-title">{ projectsFilters.length !== 0 ? projectsFilters.map(filter => `${filter};   `) : "all;" }</p>
                <div className="page-mainview">
                    <div className="projects-list">
                        {projects.filter((project) => {
                            if (projectsFilters.length === 0) return true; // if no filters are selected, show all projects
                            return project.tags.some(tag => projectsFilters.includes(tag)); // check if any of the project's tags match the selected filters
                        }).map((project, index) => (
                            <div key={index} className="project-container">
                                <p>Project {`${index + 1} `}<span className="project-name">{`// _${project.name}`}</span></p>
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