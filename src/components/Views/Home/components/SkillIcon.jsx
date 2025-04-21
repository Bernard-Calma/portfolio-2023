import { ToolTip } from "../../../common";

const SkillIcon = (props) => {
    return (
        <div className="skillIconContainer">
            <img 
            className="skillIcon" 
            src={props.skill.imageLink} 
            alt={props.skill.skill}
            />
            <ToolTip 
                description = {props.skill.skill}
            />
        </div>
    )
}

export default SkillIcon;