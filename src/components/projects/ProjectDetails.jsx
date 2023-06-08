const ProjectDetails = (props) => {
    return(
        <div>
            <h1 className="name">{props.project.name}</h1>
            <p className="description">- {props.project.summary}</p>
            <div className="technologies">
                <h2 className="title">Technologies Used</h2>
                <ul>
                    {props.project.skills.map(skill =>
                        <li className="description">
                            {skill}
                        </li>
                    )}
                </ul>
            </div>
            <div className="project links">
                <a 
                    href={props.project.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="linkName">link</p>
                    <i className="fa-solid fa-link" />
                </a>
                <a 
                    href={props.project.frontEndRepo}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="linkName">github</p>
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
        </div>
    ) 
}

export default ProjectDetails;