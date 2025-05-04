import WorkHistory from "./WorkHistory"

const ProfessionalExperience = ({subContent, filterMenuRef}) => {
    // professional-experience / work-history
    if (subContent === "work-history") return <WorkHistory 
        filterMenuRef={filterMenuRef} // pass the filter menu ref to the work history component
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