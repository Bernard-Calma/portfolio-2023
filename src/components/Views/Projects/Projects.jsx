import { SectionMenu } from './components';

const Projects = () => {
    return (
        <main className="projects">
            <SectionMenu />
            <div className="projects-content">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-list">
                    <div className="project-item">
                        <img src="/images/projects/project1.png" alt="Project 1" />
                        <h2>Project 1</h2>
                        <p>Description of Project 1</p>
                    </div>
                    <div className="project-item">
                        <img src="/images/projects/project2.png" alt="Project 2" />
                        <h2>Project 2</h2>
                        <p>Description of Project 2</p>
                    </div>
                </div>
                </div>
        </main>
    )
}

export default Projects;