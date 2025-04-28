import Bio from "./Bio";
import TechnicalSkills from "./TechnicalSkills";

const ProfessionalInfo = ({subContent}) => {
    // professional-info / bio
    if (subContent === "bio") return <Bio />
    // professional-info / technicial-skills
    if (subContent === "technical-skills") return <TechnicalSkills />
    return(
        <div>
            Test
        </div>
    )
    

}

export default ProfessionalInfo;