const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, tags, link } = project;
    
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => {
                        switch (tag) {
                            case "react":
                                return  (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/react-native.png" alt="react" title="React" />
                                );
                                break;
                            case "css":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/css3.png" alt="CSS" title="CSS" />
                                );
                                break;
                            case "javascript":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/javascript.png" alt="JavaScript" title="JavaScript" />
                                );
                                break;
                            case "nodejs":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/nodejs.png" alt="Node.js" title="Node.js" />
                                );
                                break;
                            case "mongodb":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/mongodb.png" alt="MongoDB" title="MongoDB" />
                                );
                                break;
                            case "postgresql":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/postgreesql.png" alt="PostgreSQL" title="PostgreSQL" />
                                );
                                break;
                            case "flask":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/flask.png" alt="Flask" title="Flask" />
                                );
                                break;
                            case "django":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/django.png" alt="Django" title="Django" />
                                );
                                break;
                            case "expo":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/external-flat-juicy-fish/256/external-expo-mobile-app-development-flat-flat-juicy-fish.png" alt="Expo" title="Expo" />
                                );
                                break;
                            case "redux":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/redux.png" alt="Redux" title="Redux" />
                                );
                                break;
                            default:
                                break;
                        }
                    }
                        
                    )}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">view-project</a>
            </div>
        </div>
    );
}

export default ProjectCard;