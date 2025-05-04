import { useState } from "react";

const WorkHistory = () => {
    const [workHistory, setWorkHistory] = useState([
        {
            companyName: "CompuCom",
            position: "Information Technology Field Technician II",
            startDate: "May 2021",
            endDate: "Present",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "information-technology",
        },
        {
            companyName: "Robert Half Technologies",
            position: "Network Technician",
            startDate: "February 2025",
            endDate: "Present",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "information-technology",
        },
        {
            companyName: "Your Voice Solutions, LLC",
            position: "Frontend Developer",
            startDate: "August 2024",
            endDate: "February 2025",
            description: "Developed and maintained web applications using React and Node.js.",
            category: "developer",
        },
        {
            companyName: "Atomic Dev Inc.",
            position: "React Javascript Developer",
            startDate: "July 2023",
            endDate: "January 2024",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "developer",
        },
        {
            companyName: "Turner Techtronics, Inc.",
            position: "Domain Migration Technician",
            startDate: "November 2020",
            endDate: "February 2021",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "information-technology",
        },
        {
            companyName: "Sutherland Global Services",
            position: "Subject Matter Expert",
            startDate: "March 2014",
            endDate: "February 2028",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "information-technology",
        },
        {
            companyName: "Sutherland Global Services",
            position: "Application Developer",
            startDate: "March 2017",
            endDate: "June 2017",
            description: "Worked on UI/UX design and implementation for various projects.",
            category: "developer"
        },
        

    ]);

    return (
        <div className="page-view work-history">
            <div className="page-mainview">
                <p className="page-title">{`professional-experience > work-history`}</p>
                <table className="section-view">
                    <tbody>
                        {workHistory.map((job, index) => (
                            <tr key={index}>
                                <td valign="top">
                                    <h3><strong>{job.companyName}</strong></h3>
                                    <p>{job.position}</p>
                                    <p>{`${job.startDate} - ${job.endDate}`}</p>
                                    <p>{job.description}</p>
                                </td>
                            </tr>
                        ))}
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

export default WorkHistory;