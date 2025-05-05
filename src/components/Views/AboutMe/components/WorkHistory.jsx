import { useState } from "react";

const WorkHistory = ({filters}) => {
    const [workHistory, setWorkHistory] = useState([
        {
            id: 0,
            companyName: "CompuCom",
            companyLogo: "/images/education/compucom.png",
            position: "Information Technology Field Technician II",
            startDate: "May 2021",
            endDate: "Present",
            description: "Maintain and troubleshouts store systems across multiple locations, optimized travel routes, and supported training and emergency response.",
            category: "information-technology",
            detailedDescriptions: [
                "Manages preventive maintenance and incidents with little to no supervision for multiple stores.",
                "Provides technical support for store systems, including POS, network, and hardware.",
                "Optimizes travel routes to minimize downtime and improve efficiency.",
                "Assist the regional lead on training the new technicians and provide emergency services to store with critical issue/s.",
            ]
        },
        {
            id: 1,
            companyName: "Robert Half Technologies",
            position: "Network Technician",
            startDate: "February 2025",
            endDate: "Present",
            description: "Handled network migration from Ubiquiti to Cisco, including configuration and testing of network devices.",
            category: "information-technology",
        },
        {
            id: 2,
            companyName: "Your Voice Solutions, LLC",
            position: "Frontend Developer",
            startDate: "August 2024",
            endDate: "February 2025",
            description: "Developed and maintained web applications using React and Node.js.",
            category: "developer",
        },
        {
            id: 3,
            companyName: "Atomic Dev Inc.",
            position: "React Javascript Developer",
            startDate: "July 2023",
            endDate: "January 2024",
            description: "Enhanced search functionality by implementing autocomplete with sorted results using Redux.",
            category: "developer",
        },
        {
            id: 4,
            companyName: "Turner Techtronics, Inc.",
            position: "Domain Migration Technician",
            startDate: "November 2020",
            endDate: "February 2021",
            description: "Remotely migrated client devices to a new domain, handling setup, scripting, and issue resolution across macOS and Windows.",
            category: "information-technology",
        },
        {
            id: 5,
            companyName: "Sutherland Global Services",
            position: "Subject Matter Expert",
            startDate: "March 2014",
            endDate: "February 2028",
            description: "Led multiple teams in a tech support setting, driving performance improvements, coaching staff, and collaborating with management to exceed client expectations and resolve technical issues.",
            category: "information-technology",
        },
        {
            id: 6,
            companyName: "Sutherland Global Services",
            position: "Application Developer",
            startDate: "March 2017",
            endDate: "June 2017",
            description: "Created an application that streamlined troubleshooting, improved support processes, and boosted consultant performance and service levels by 5%.",
            category: "developer"
        },
        

    ]);

    const [workPreview, setWorkPreview] = useState(workHistory[0]); // default to the first work history item

    const handleWorkPreview = (id) => {
        setWorkPreview(workHistory[id]); // set the work preview to the selected work history item
    }

    return (
        <>
            <div className="page-mainview work-history">
                <p className="page-title">{`professional-experience > work-history ${filters.length === 1 ? `> ${filters[0]}` : ""}`}</p>
                <table className="section-view">
                    <tbody>
                        {
                            workHistory.filter((work, index) => {
                                if (filters.length === 0) return true; // no filters applied, show all work history
                                return filters.includes(work.category); // filter work history based on selected filters
                            }
                            ).map((work, index) => (
                                <tr key={index}>
                                    <td valign="top">
                                        <h3 onClick={()=>handleWorkPreview(work.id)}><strong>{work.companyName}</strong></h3>
                                        <p>{work.position}</p>
                                        <p>{work.startDate} - {work.endDate}</p>
                                        <p>{work.description}</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="page-subview">
                <p className="page-title">{`// ${workPreview.companyName}`}</p>
                <div className="section-view">
                    <img src={workPreview.companyLogo} alt={`${workPreview.companyName} logo`} />
                    <div className="work-preview">
                        <h3><strong>{workPreview.companyName}</strong></h3>
                        <p>{workPreview.position}</p>
                        <p>{workPreview.startDate} - {workPreview.endDate}</p>
                        {
                            workPreview.detailedDescriptions && workPreview.detailedDescriptions.length > 0 ? (
                                <ul>
                                    {workPreview.detailedDescriptions.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{workPreview.description}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkHistory;