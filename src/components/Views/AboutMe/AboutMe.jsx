import { useState } from "react";
import "./AboutMe.css"
import { MenuOption, ProfessionalExperience, ProfessionalInfo, SectionMenu } from "./components";

const AboutMe = ({pageMenuRef}) => {
    const [content, setContent] = useState("professional-info")
    const [subContent, setSubContent] = useState("bio")
    
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
                                            label: "developer"
                                        },
                                        {
                                            label: "information-technology"
                                        }
                                    ]
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
                {
                    content === "professional-info" ?
                    <ProfessionalInfo 
                        subContent={subContent}
                    /> : content === "professional-experience" ?
                    <ProfessionalExperience 
                        subContent={subContent}
                    /> :
                    <></>
                }

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