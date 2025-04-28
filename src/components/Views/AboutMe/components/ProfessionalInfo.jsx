import Bio from "./Bio";

const ProfessionalInfo = ({subContent}) => {
    // professional-info / bio
    if (subContent === "bio") return <Bio />
    return(
        <div>
            Test
        </div>
    )
    

}

export default ProfessionalInfo;