import { useState } from "react";

const EducationHistory = ({filters}) => {
    const [educationHistory, setEducationHistory] = useState([
        {
            id: 1,
            name: "Arizona State University",
            degree: "Bachelor of Science in Software Engineering",
            startDate: "2022",
            endDate: "Current",
            description: "Pursuing a degree in software engineering with a focus on web development."
        },
        {
            id: 2,
            name: "General Assembly",
            degree: "Software Engineering Immersive",
            startDate: "May 2022",
            endDate: "November 2022",
            description: "Completed a full-stack software engineering bootcamp with a focus on JavaScript, React, and Node.js."
        },
        {
            id: 3,
            name: "STI College Bacoor",
            degree: "Associate in Computer Technology",
            startDate: "2011",
            endDate: "2014",
            description: "Studied computer technology with a focus on programming and software development."
        }
    ]);

    return (
        <div className="page-view work-history">
            <div className="page-mainview">
                <p className="page-title">{`professional-experience > education-history ${filters.length === 1 ? `> ${filters[0]}` : ""}`}</p>
                <table className="section-view">
                    <tbody>
                        {
                            educationHistory.map((education, index) => (
                                <tr key={index}>
                                    <td valign="top">
                                        <h3><strong>{education.name}</strong></h3>
                                        <p>{education.degree}</p>
                                        <p>{education.startDate} - {education.endDate}</p>
                                        <p>{education.description}</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="page-subview">
                <p className="page-title">{`// <company-name>`}</p>
                <div className="section-view">
                </div>
            </div>
        </div>
    );
}

export default EducationHistory;