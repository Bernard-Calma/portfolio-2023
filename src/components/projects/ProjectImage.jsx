const ProjectImage = (props) => <img 
    src={`images/projects/${props.project.name}.png`} 
    alt={props.project.name}
    className="project image"
/>

export default ProjectImage;