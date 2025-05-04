import WorkHistory from "./WorkHistory"

const ProfessionalExperience = ({subContent, filters}) => {
    // professional-experience / work-history
    if (subContent === "work-history") return <WorkHistory 
        filters={filters}
    />
    // professional-experience / education-history
    if (subContent === "education-history") return <></>
    return(
        <div>
            Test
        </div>
    )
    

}

export default ProfessionalExperience;