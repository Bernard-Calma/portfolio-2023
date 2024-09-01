import { ToolTip } from "../common";

const ProjectDetails = (props) => {
    return(
        <>
            <h1 className="name">{props.project.name}</h1>
            <p className="description">- {props.project.summary}</p>
            <div className="technologies">
                <h2 className="title">Technologies Used</h2>
                <ul>
                    {props.project.skills.map((skill, index) =>
                        <li className="description" key = {`projectSkills_${index}`}>
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
                    <ToolTip 
                        description={"Link"}
                    />
                        <i className="fa-solid fa-link" />
                    </a>
                <a 
                    href={props.project.frontEndRepo}
                    target="_blank"
                    rel="noreferrer"
                >
                    <ToolTip 
                        description={"Github"}
                    />
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
        </>
    ) 
}

export default ProjectDetails;