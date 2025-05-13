import { useState } from "react";

const EducationHistory = ({filters}) => {
    const [educationHistory, setEducationHistory] = useState([
        {
            id: 0,
            name: "Arizona State University",
            schoolLogo: "/images/education/ASU.png",
            degree: "Bachelor of Science in Software Engineering",
            startDate: "2022",
            endDate: "Current",
            description: "Pursuing a degree in software engineering with a focus on web development.",
            technologies: [
                "Java",
                "Matlab",
                "Fusion 360",
                "Eclipse",
                "Arduino",
            ],
            detailedDescriptions: [
                "Gained hands-on experience in Java development, focusing on Programming Principles, Object-Oriented Programming, and Data Structures.",
                "Applied System Design to develop an autonomous firefighter robot using Autodesk Fusion 360 (3D modeling), TinkerCAD (circuit design), Arduino (control logic), and MATLAB (simulation)."
            ]
        },
        {
            id: 1,
            name: "General Assembly",
            degree: "Software Engineering Immersive",
            schoolLogo: "/images/education/GA.png",
            startDate: "May 2022",
            endDate: "November 2022",
            description: "Completed a full-stack software engineering bootcamp with a focus on JavaScript, React, and Node.js.",
            technologies: [
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "HTML",
                "CSS",
                "Git",
                "GitHub"
            ],
            detailedDescriptions: [
                "Completed 450+ hours of practical training in product development fundamentals, including OOP, MVC frameworks, data modeling, and team collaboration strategies.",
                "Developed a full-stack web application using React, Node.js, and PostgreSQL, implementing RESTful APIs and integrating third-party services.",
                "Collaborated with a team of developers to design and implement a budgeting tool, focusing on user experience and responsive design."
            ]
        },
        {
            id: 2,
            name: "STI College Bacoor",
            degree: "Associate in Computer Technology",
            schoolLogo: "/images/education/STI.png",
            startDate: "2011",
            endDate: "2014",
            description: "Studied computer technology with a focus on programming and software development.",
            technologies: [
                "C++",
                "Java",
                "Visual Basic",
                "VB.Net",
                "HTML",
                "CSS",
                "JavaScript",
                "MS Access",
            ],
            detailedDescriptions: [
                "Gained foundational knowledge in programming languages such as C++, Java, and Visual Basic.",
                "Developed a strong understanding of database management systems, including MS Access and SQL.",
                "Gained foundational knowledge in programming methodologies, computer networks, computation, and data processing.",
                "Built a Java-based social media app and a full-stack hotel reservation system using Visual Basic and MS Access.",
                "Participated in a 200-hour on-the-job training program, gaining practical experience in software development and IT support."
            ]
        }
    ]);

    const [schoolPreview, setSchoolPreview] = useState(educationHistory[0]);

    const handleSchoolPreview = (index) => {
        setSchoolPreview(educationHistory[index]);
    }

    return (
        <>
            <div className="page-mainview education-history">
                <p className="page-title">{`professional-experience > education-history ${filters.length === 1 ? `> ${filters[0]}` : ""}`}</p>
                <table className="section-view">
                    <tbody>
                        {
                            educationHistory.map((education, index) => (
                                <tr key={index}>
                                    <td valign="top">
                                        <h3 onClick={()=>handleSchoolPreview(education.id)}><strong>{education.name}</strong></h3>
                                        <p className="education-degree">{education.degree}</p>
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
                <p className="page-title">{`// ${schoolPreview.name}`}</p>
                <div className="section-view">
                    <div className="school-preview">
                        <img src={schoolPreview.schoolLogo} alt={schoolPreview.name} className="school-logo" />
                        <h3>{schoolPreview.name}</h3>
                        <p className="degree">{schoolPreview.degree}</p>
                        <p>{schoolPreview.startDate} - {schoolPreview.endDate}</p>
                        {
                            schoolPreview.detailedDescriptions && schoolPreview.detailedDescriptions.length > 0 ? (
                                <ul>
                                    {schoolPreview.detailedDescriptions.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{schoolPreview.description}</p>
                            )
                        }
                        <ul className="technologies-list">
                            {schoolPreview.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationHistory;