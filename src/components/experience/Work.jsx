const Work = (props) => {
    return (
        <div className="divWork">
            <img className="companyLogo" src={props.work.companyLogo} alt={props.work.name} />
            <div className="workInfo">
                <h2 className="companyName name">{props.work.name}</h2>
                {props.work.positions.map((position, index) =>
                    <div 
                        className="containerPosition" 
                        key={index}
                    >
                        <p className="position title">
                            {position.name} 
                            ({position.monthStarted} {position.yearStarted} - {position.monthEnded}{position.yearEnded
                                // Add space if not the current job.
                                ? ` ${position.yearEnded}`
                                : ``
                            })
                        </p>
                        <ul>
                            {position.jobDescriptions.map((description, index) => 
                                <li 
                                    className = "jobDescription description" 
                                    key={index}
                                >
                                    {description}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Work;