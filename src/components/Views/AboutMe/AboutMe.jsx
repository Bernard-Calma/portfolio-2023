import { useState } from "react";
import "./AboutMe.css"
import { Markdown, MenuOption, ProfessionalInfo } from "./components";

const AboutMe = ({pageMenuRef}) => {
    const [content, setContent] = useState("professional-info")
    const [subContent, setSubContent] = useState("bio")
    
    return(
        <main className="about-me">
            <div className="page-menu" ref={pageMenuRef}>
                <div className="sections">
                    <img className="icon" src="/images/icons/info-professional.svg" alt="icon" onClick={() => setContent("professional-info")}/>
                    <img className="icon" src="/images/icons/info-personal.svg" alt="icon" onClick={() => setContent("experience-info")}/>
                    <img className="icon" src="/images/icons/info-hobbies.svg" alt="icon"/>
                </div>
                <div className="section-content">
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="professional-info"
                    />
                    <div className="section-sub-contents">
                    <div className="sub-content">
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="bio" />}
                            open={subContent === "bio"}
                            onClick={() => setSubContent("bio")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="technicial-skills" />}
                            open={subContent === "technicial-skills"}
                            onClick={() => setSubContent("hard-skills")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="soft-skills" />}
                            open={subContent === "soft-skills"}
                            onClick={() => setSubContent("soft-skills")}
                        />
                    </div>
                    </div>
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="contacts"
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
                    /> : <></>
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