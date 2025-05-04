const ProfessionalExperience = ({subContent}) => {
    // professional-experience / work-history
    if (subContent === "work-history") return <div>Work</div>
    // professional-experience / education-history
    if (subContent === "education-history") return <></>
    return(
        <div>
            Test
        </div>
    )
    

}

export default ProfessionalExperience;