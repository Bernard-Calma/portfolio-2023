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
            ],
            technologies: [
                "Cat6/Fiber cabling",
                "Register/Terminal/PC/Laptop",
                "Wireless Access Point",
                "Modem/Switches/Server",
                "Prtiner/Scanner/POS",
                "Lenovo, NCR, Dell, Glory, UTC Retail",
                "Lexmark, Zebra, Datalogic",
                "Aruba, Cisco",
                "Vertiv, Cyberex",
                "Wren, LiveView",
                "Dell EMC",
                "Verifone, Ingenico",
                "Windows, MacOS, Linux",
                "DHCP, SSH, WinSCP, RDP, VNC, SecureCRT, Putty",
                "Servicenow, Remedy, JIRA"
            ]
        },
        {
            id: 1,
            companyName: "Robert Half Technologies",
            companyLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAkFBMVEWnCSX///+mACGhAACmASKwMUK1RlO1SFWvLD/06eqtJDixOEemAB7gu7+1S1flxcmiAAasHDOlABujABGjAAz68/TAaXP++vvMipGjABDy4uTaq7CkABbRlZzTnKKyPUzCcHm7V2Pw3N7gub2qFi7pz9LHfIS8X2nWo6jIg4rcsLXlxMjpzdDBbXe5VGDRmJ6v9CWqAAAE7UlEQVR4nO3d63aaQBiFYWDQqCFKAOMhGIwxqdG0vf+7q/YQtweYb3AIlrXfv1jW8CwdkMHGeWjXVKvr6mp97YienXbk1ZPSY6gvHVDQcW48p54kGF86IJ8Y+4gBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAH9rxi+FwSe5/tWB1Q1hh/FoVJhMkmUOh55OYwg3e4wXXay7LbjpGq78ziyZFIpRpAo/+HpbjEcbY9rNFoejdkcw9sefH+83eHnC0bd15enh+WWx8JRGGH4ug5enKpsNcUjuxQjVffj1/OvGw7GPRVf+gYxwrjXtR+Nn0zGx8fqXILhT9TbovC105mjgq/C8HrasQf/DjeOV6dbL8GIk9lI+2p30L+Iwy7G35ksUONzW8tjRGosoNi16Kvyk0cVGKp9/ihLY6gf+ld+NnDi68Hw1VPO1pIYnnqUU+x6OzmJ14URxDkTflmMaDnVvuyowaTczGEbI+0Mc7eWwogz4WyBde+jK8CYtAu2lsFIvhkYQFlaO4bqF20tg1HSwnXbJTTsYmSFW0tgtMQHf/pPzT8pdjGKP94lMPInIP1YPOMLDrsYxZXAuKSF8c2QBmO4K1ONJmO4fcNpo9EYXcO3RqMx3FlCjH2B0beUhmM8hsTYZ3T/vOkYTxNifDYyOaE0HcN9MLjWaDzGwOCt0XgM1+B80nyMufzGRvMxNvLPSfMxhsSAbsW3yv8rjO5mNX6fv8/WuasR53oXTxoVY4wWg83Len23+Vh0y6zCQ9NxT6kk3RYnKvwu97gTn08qxBiuvy93z5KESRiqXcc7NMFYPB8+gRGpVvGa/L6peNKoDOPjhwqj4j0bYLypkwvJnNXtM9WNMW2fjr48xrB19iaNdFElk86g1WCsRI9JSDGGXg6scLltLv16UgnGXPbGFGKMnFzZ3AX/g35Kv8ZXgSG0kGLcFJwalWSFfi29E1oBxk/phCXDKFz9iG4Ee/iQDsg+hnwhS4ShuZpWgusN8bnVPkZPfPUrwngvfigpEsyh4m8n1jFe5N+LJBja23ZK/yyL+NafdYx7+dq3BONRN/mFL/qdSK/HbWOIJytHhtHWfejSuX4n0sf/bGOIL3Ac2fMZWlvJqI6/LudlG8PkzrwAQ3A7VzBp9IRHaBnj1TLGTP8OF1x33daDYbSAJcAQrHoIrjRuhGd7yxgmSzYSDMEtO7XR7qVfD4b00/nnMPQYnn7qC++uFcPoURk7P9i7Wgyz54YajmH2tGHDMUyuPxuPYbCU5xDjoIZjmDwMQYyDiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAGo5h+IM9/d+okGDU8otnx8luNXWM/s9zr6XbXyYYmt/R7mUpHJARhqfL8K9UafcnGplvZS+/91Tjnyi9uogBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGBAxIGJAxICIAREDIgZEDIgYEDEgYkDEgIgBEQMiBkQMiBgQMSBiQMSAiAERAyIGRAyIGNAOI/DZ77yO89xpsT+1fwF11JpI1Qx18wAAAABJRU5ErkJggg==",
            position: "Network Technician",
            startDate: "February 2025",
            endDate: "Present",
            description: "Handled network migration from Ubiquiti to Cisco, including configuration and testing of network devices.",
            category: "information-technology",
            detailedDescriptions: [
                "Configured and tested network devices for migration from Ubiquiti to Cisco.",
                "Ran new copper and fiber lines to new locations.",
                "Used scissor and all-terrain to access high elevations and outside equipment.",
                "Collaborated with cross-functional teams to ensure seamless network transition.",
                "Provided technical support and troubleshooting during the migration process.",
                "Documented network configurations and changes for future reference.",
            ],
            technologies: [
                "Cisco switches and routers",
                "Ubiquiti network devices",
                "Fiber optic cabling",
                "Copper cabling",
                "Network testing tools",
                "Scissor lift and all-terrain vehicles"
            ]
        },
        {
            id: 2,
            companyName: "Your Voice Solutions, LLC",
            companyLogo: "/images/education/YourVoiceSolutions.webp",
            position: "Frontend Developer",
            startDate: "August 2024",
            endDate: "February 2025",
            description: "Developed and maintained web applications using React and Node.js.",
            category: "developer",
            detailedDescriptions: [
                "Designed and developed required features for web applications using React, Redux, and CSS",
                "Implemented responsive design principles to ensure compatibility across devices.",
                "Optimized web applications for maximum speed and scalability.",
                "Collaborated with backend developers to integrate RESTful APIs.",
            ],
            technologies: [
                "React",
                "Redux",
                "Node.js",
                "CSS",
                "RESTful APIs",
                "JavaScript",
                "HTML"
            ]
        },
        {
            id: 3,
            companyName: "Atomic Dev Inc.",
            companyLogo: "/images/education/AtomicDev.webp",
            position: "React Javascript Developer",
            startDate: "July 2023",
            endDate: "January 2024",
            description: "Enhanced search functionality by implementing autocomplete with sorted results using Redux.",
            category: "developer",
            detailedDescriptions: [
                "Integrated Redux for state management to enhance performance.",
                "Improved search functionality by adding autocomplete feature with sorted results.",
                
            ],
            technologies: [
                "React",
                "Redux",
                "JavaScript",
                "HTML",
                "CSS",
                "RESTful APIs"
            ]
        },
        {
            id: 4,
            companyName: "Turner Techtronics, Inc.",
            companyLogo: "/images/education/TurnerTech.png",
            position: "Domain Migration Technician",
            startDate: "November 2020",
            endDate: "February 2021",
            description: "Remotely migrated client devices to a new domain, handling setup, scripting, and issue resolution across macOS and Windows.",
            category: "information-technology",
            detailedDescriptions: [
                "Handled the migration of all client’s company owned equipment to their new domain.",
                "Reached out to employees to set up a remote appointment to schedule the migration of their machine/s.",
                "Remote into client’s mac/windows to install required applications and files to run scripts that moves the machine/s and user’s profile to the new domain.",
                "Troubleshoot and fix any pre and post migration issue to make sure that all files and applications that the client uses are all working and error free.",
            ],
            technologies: [
                "macOS",
                "Windows",
                "Remote desktop tools",
                "Scripting languages",
                "Active Directory",
                "JAMF"
            ]
        },
        {
            id: 5,
            companyName: "Sutherland Global Services",
            companyLogo: "/images/education/Sutherland.png",
            position: "Subject Matter Expert",
            startDate: "March 2014",
            endDate: "February 2028",
            description: "Led multiple teams in a tech support setting, driving performance improvements, coaching staff, and collaborating with management to exceed client expectations and resolve technical issues.",
            category: "information-technology",
            detailedDescriptions: [
                "Provided support and managed to multiple teams and projects to improve service level for different account.",
                "Supervised meetings/huddles with different teams to provide action plans and coaching to improve team member’s stats.",
                "Collaborate with upper management and other departments to analyze data and process quality to make sure it meets the client’s requirements and exceeds expectations.",
                "Trained new employees on company policies and procedures.",
                "Handles customer’s issues and concerns regarding their Internet, Analog/Digital Phone and TV and provides troubleshooting steps to resolve any issue.",
            ],
            technologies: [
                "Internet, Analog/Digital Phone, ipTV/Satellite",
                "NID, DSLAM, ONT, CO, VHO",
                "Copper/Fiber cabling",
                "Outside plant/Inside plant cabling",
                "Internet Line Testing",
                "Network Testing",
                "Network Troubleshooting",
                "CRM, Order Management",
                "Provisioning and Activation",
                "Six Sigma",
            ]
        },
        {
            id: 6,
            companyName: "Sutherland Global Services",
            companyLogo: "/images/education/Sutherland.png",
            position: "Application Developer",
            startDate: "March 2017",
            endDate: "June 2017",
            description: "Created an application that streamlined troubleshooting, improved support processes, and boosted consultant performance and service levels by 5%.",
            category: "developer",
            detailedDescriptions: [
                "Developed an application that improved consultant's metrics, support and leads on handling issue/s by half and improved the account’s service level more than 5%.",
                "Assembled contact drivers to determine the best resolution and information needed to be displayed that provide faster troubleshooting and resolution for the customer.",
                "Facilitated training and user tests to monitor and discover issues and improvements for better and accurate results."
            ],
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "AutoIT",
                "Visual Basic",
                "Project Management",
            ]
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
                        <p className="position">{workPreview.position}</p>
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
                        <h4>Technologies Used:</h4>
                        <ul className="technologies-list">
                            {workPreview.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkHistory;