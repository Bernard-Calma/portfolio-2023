import { SectionMenu } from './components';
import './Projects.css';

const Projects = () => {
    return (
        <main id="projects">
            <SectionMenu />
            <div className={`page-view projects`}>
                <p className="page-title">{`all;`}</p>
                <div className="page-mainview"></div>
            </div>
        </main>
    )
}

export default Projects;