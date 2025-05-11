import { useState } from "react";
import "./AboutMe.css"
import { ProfessionalExperience, ProfessionalInfo, SectionMenu } from "./components";
import { MenuOption } from "../../../components/common";

const AboutMe = ({pageMenuRef}) => {
    const [content, setContent] = useState("professional-info")
    const [subContent, setSubContent] = useState("bio")

    const [workHistoryFilters, setWorkHistoryFilters] = useState([]) // state to store the filter menu for work history
    
    const handleWorkHistoryFilters = (e, filter) => {
        e.preventDefault() // prevent the default behavior of the event
        // console.log("Work History Filter: ", workHistoryFilters)
        // console.log("Filter: ", filter)
        // check if the filter is already in the array
        if (workHistoryFilters.includes(filter)) {
            // if it is, remove it from the array
            setWorkHistoryFilters(workHistoryFilters.filter(item => item !== filter))
        } else {
            // if it is not, add it to the array
            setWorkHistoryFilters([...workHistoryFilters, filter])
        }
    }
    return(
        <main className="about-me">
            <div className="page-menu" ref={pageMenuRef}>
                <div className="section-content">
                    <SectionMenu 
                        label="professional-info"
                        openContent = {content} // pass the current content to the section menu
                        openSubContent = {subContent} // pass the current subContent to the section menu
                        onClick={() => {
                            setContent("professional-info") // set the content to professional-info when clicked
                            setSubContent("bio") // set the subContent to bio when clicked
                        }} // set the content to professional-info when clicked
                        // pass the subContents to the section menu
                        subContents = {
                            [
                                {
                                    label: "bio",
                                    onClick: () => setSubContent("bio") // set the subContent to bio when clicked
                                },
                                {
                                    label: "technical-skills",
                                    onClick: () => setSubContent("technical-skills") // set the subContent to technical-skills when clicked
                                }
                            ]
                        }
                    />
                    <SectionMenu 
                        label="professional-experience"
                        openContent = {content} // pass the current content to the section menu
                        openSubContent = {subContent} // pass the current subContent to the section menu
                        onClick={() => {
                            setContent("professional-experience") // set the content to professional-experience when clicked
                            setSubContent("work-history") // set the subContent to work-history when clicked
                        }} // set the content to work-experience when clicked
                        subContents={
                            [
                                {
                                    label: "work-history",
                                    onClick: () => setSubContent("work-history"), // set the subContent to work-experience when clicked
                                    filterMenu: [
                                        {
                                            label: "developer",
                                            filters: workHistoryFilters, // pass the workHistoryFilter state to the filter menu
                                            addFilter: handleWorkHistoryFilters // add the filter to the workHistoryFilter state
                                        },
                                        {
                                            label: "information-technology",
                                            filters: workHistoryFilters, // pass the workHistoryFilter state to the filter menu
                                            addFilter:handleWorkHistoryFilters // add the filter to the workHistoryFilter state  
                                        }
                                    ],
                                },
                                {
                                    label: "education-history",
                                    onClick: () => setSubContent("education-history") // set the subContent to projects when clicked
                                }
                            ]
                        }
                    />
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="contacts"
                        open = {true}
                    />
                    <div className="contacts">
                        <MenuOption
                            icon="/images/icons/email.svg"
                            label=" nard.calma@gmail.com"
                        />
                        <MenuOption
                            icon="/images/icons/phone.svg"
                            label=" +1(123)-456-789"
                        />
                    </div>
                </div>
            </div>
            <div className={`page-view ${content}`}>
                {
                    content === "professional-info" ?
                    <ProfessionalInfo 
                        subContent={subContent}
                    /> : content === "professional-experience" ?
                    <ProfessionalExperience 
                        subContent={subContent}
                        filters={workHistoryFilters} // pass the filter menu ref to the professional experience component
                    /> :
                    <></>
                }
            </div>
      </main>
    )
}

export default AboutMe;

//         setLineIndex(prev => prev + 1);
//         setCharIndex(0);
//         setCurrentLine('');
//         clearInterval(interval); // clear the interval after the line is typed
//       }
//     }, 50); // Adjust the 100ms to control typing speed (slower or faster)

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, [charIndex, lineIndex, lines]);