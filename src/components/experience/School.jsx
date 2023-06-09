const School = (props) => {
    return(
        <div className="divSchool">
            <img className="schoolLogo" src={props.school.image} alt={props.school.name} />
            <div className="schoolInfo">
                <h2 className="schoolName name">{props.school.name}</h2>
                <p className="course title">{`${props.school.course}(${props.school.degree})`}</p>
                <p className = "yearGraduated title">{props.school.yearGraduate}</p>
                <ul>
                    {props.school.descriptions.map((description, index) => 
                        <li 
                            className = "jobDescription description" 
                            key={index}
                        >
                            {description}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                {props.school.projects.map((project, index) => 
                    <p className="schoolProject name" key={index}>
                        {project}
                    </p>
                )}
            </div>
        </div>
    )
}

export default School;