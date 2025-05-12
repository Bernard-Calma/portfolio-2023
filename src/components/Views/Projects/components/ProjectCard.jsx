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
                            case "React":
                                return  (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/react-native.png" alt="react" title="React" />
                                );
                                break;
                            case "CSS":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/css3.png" alt="CSS" title="CSS" />
                                );
                                break;
                            case "Javascript":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/javascript.png" alt="JavaScript" title="JavaScript" />
                                );
                                break;
                            case "NodeJS":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/nodejs.png" alt="Node.js" title="Node.js" />
                                );
                                break;
                            case "MongoDB":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/mongodb.png" alt="MongoDB" title="MongoDB" />
                                );
                                break;
                            case "PostgreSQL":
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
                            case "Redux":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/redux.png" alt="Redux" title="Redux" />
                                );
                                break;
                            case "Arduino":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/arduino.png" alt="Arduino" title="Arduino" />
                                );
                                break;
                            case "C#":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/c-sharp-logo.png" alt="C#" title="C#" />
                                );
                                break;
                            case "Fusion360":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fdivlview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4" alt="Fusion 360" title="Fusion 360" />
                                );
                                break;
                            case "python":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/python.png" alt="Python" title="Python" />
                                );
                                break;
                            case "youtube":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/youtube-play.png" alt="YouTube" title="YouTube" />
                                );
                                break;
                            case "Python":
                                return (
                                    <img key={index} className="project-tag_icon" src="https://img.icons8.com/color/256/python.png" alt="Python" title="Python" />
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