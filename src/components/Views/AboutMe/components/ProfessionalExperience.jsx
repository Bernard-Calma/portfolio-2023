import WorkHistory from "./WorkHistory"

const ProfessionalExperience = ({subContent}) => {
    // professional-experience / work-history
    if (subContent === "work-history") return <WorkHistory />
    // professional-experience / education-history
    if (subContent === "education-history") return <></>
    return(
        <div>
            Test
        </div>
    )
    

}

export default ProfessionalExperience;