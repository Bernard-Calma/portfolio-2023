import { useState } from "react"
import "./styles.css"

const Project = () => {
    const [view,setView] = useState("Streamin")

    const [projects] = useState(
        [{
            name: "Streamin",
            websiteLink: "https://stream-in.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/streamin-frontend",
            backEndRepo: "https://github.com/Bernard-Calma/streamin-backend",
            summary: "Streamin is a React-based social media app that allows users to post videos they find interesting with full CRUD capabilites. Meaning they can create, show, update, and delete the posts they make. All while being able to like the videos posted by themselves and other users, as well as comment on videos and like said comments.",
            skills: ["React", "JavaScript", "NodeJS", "MongoDB", "Express", "HTML", "CSS"],
            screenshot: "images/projects/Streamin.png"
        },
        {
            name: "Spentrace",
            websiteLink: "https://spentrace.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/spentrace-react",
            backEndRepo: "https://github.com/Bernard-Calma/spentrace_backend",
            summary: "This app can be used for simple budgeting tool, you can enter your earnings and expenses or expected cash flow everyday and will give you your how much you owe, your available spending and how much you'll need until the next expense.",
            skills: ["React", "NodeJS", "JavaScript", "MongoDB", "Express", "HTML", "CSS"],
            screenshot: "images/projects/Spentrace.png"
        },
        {
            name: "NexChapters",
            websiteLink: "https://nexchapters.herokuapp.com/",
            frontEndRepo: "https://github.com/Bernard-Calma/nexchapters",
            backEndRepo: "https://github.com/Bernard-Calma/nexchapter-backend",
            summary: "An app that helps you track of your reading list",
            skills: ["React", "Redux", "Python", "Django", "PostgreSQL", "Javascript", "HTML", "CSS"],
            screenshot: "images/projects/NexChapters.png"
        }, 
        {
            name: "Floating Shoe",
            websiteLink: "https://bernard-calma.github.io/project-1/",
            frontEndRepo: "https://github.com/Bernard-Calma/project-1",
            backEndRepo: null,
            summary: "Floating Shoe is a game where you as a player will be a flying shoe and you need to avoid those feet that are trying to get into you as you move forward.",
            skills: ["JavaScript", "HTML Canvas", "HTML", "CSS"],
            screenshot: "images/projects/FloatingShoe.png"
        },
        {
            name: "Tamagotchi",
            websiteLink: "https://bernard-calma.github.io/tamagotchi-project/",
            frontEndRepo: "https://github.com/Bernard-Calma/tamagotchi-project",
            backEndRepo: null,
            summary: "Based on a 90's game called Tamagochi. Take care of your pet, feed, play with it. Fall inlove with it <3",
            skills: ["JavaScript", "HTML", "CSS"],
            screenshot: "images/projects/Tamagotchi.png"
        }
    ])

    const handleChangeView = (e) => {
        setView(e.target.innerText)
    }


    return <section className="sectionProject">
        <div className="project top">
            <h1 className="name">Projects</h1>
        </div>
        <div className="project bottom">
            <div className="project left">
                <ul>
                {
                    projects.map(project => <li
                        className={`title ${view === project.name ? "selected" : ''}`}
                        onClick={handleChangeView}
                    >{project.name}</li>)
                }
                </ul>
            </div>
            <div className="project right">
                <div className="project description">
                    {
                        projects.map(project => project.name === view 
                            ? <>
                                <h1 className="name">{project.name}</h1>
                                <p className="description">- {project.summary}</p>
                                <div className="technologies">
                                    <h2 className="title">Technologies Used</h2>
                                    <ul>
                                        {
                                            project.skills.map(skill => 
                                            <li className="description">
                                                {skill}
                                            </li>)
                                        }
                                    </ul>
                                </div>
                                <div className="project links">
                                    <a 
                                        href={project.websiteLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="linkName">link</p>
                                            <i className="fa-solid fa-link"></i>
                                    </a>
                                    <a 
                                        href={project.frontEndRepo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="linkName">github</p>
                                            <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                            </>
                            : <></>
                            )
                    }
                </div>
                <div className="project imageContainer">
                    {
                        projects.map(project => project.name === view 
                            ? <><img 
                                src={`images/projects/${project.name}.png`} 
                                alt={project.name}
                                className="project image"
                                />
                                </>
                                
                            : <></>
                            )
                    }
                </div>
            </div>
        </div>
    </section>
}

export default Project