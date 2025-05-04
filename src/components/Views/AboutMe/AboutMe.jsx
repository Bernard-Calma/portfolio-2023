import { useState } from "react";
import "./AboutMe.css"
import { Markdown, MenuOption, ProfessionalInfo } from "./components";

const AboutMe = ({pageMenuRef}) => {
    const [content, setContent] = useState("professional-info")
    const [subContent, setSubContent] = useState("bio")
    
    return(
        <main className="about-me">
            <div className="page-menu" ref={pageMenuRef}>
                <div className="section-content">
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="professional-info"
                        open={content === "professional-info"}
                        onClick={() => setContent("professional-info")}
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
                            label={<Markdown label="technical-skills" />}
                            open={subContent === "technical-skills"}
                            onClick={() => setSubContent("technical-skills")}
                        />
                    </div>
                    </div>
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