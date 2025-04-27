import { useState } from "react";
import "./AboutMe.css"
import { Bio, Markdown, MenuOption } from "./components";

const AboutMe = ({pageMenuRef}) => {
    const [subContent, setSubContent] = useState("bio")
    
    return(
        <main className="about-me">
            <div className="page-menu" ref={pageMenuRef}>
                <div className="sections">
                    <img className="icon" src="/images/icons/info-professional.svg" alt="icon"/>
                    <img className="icon" src="/images/icons/info-personal.svg" alt="icon"/>
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
                            label={<Markdown label="experience" />}
                            open={subContent === "experience"}
                            onClick={() => setSubContent("experience")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="hard-skills" />}
                            open={subContent === "hard-skills"}
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
            <div className="page-view" >
            <p className="page-title"> professional-info <span>X</span></p>
            <div className="section-view">
                <Bio />
            </div>
            </div>
            <div className="page-subview">

            </div>
      </main>
    )
}

export default AboutMe;