import "./AboutMe.css"
import { MenuOption } from "./components";

const AboutMe = ({pageMenuRef}) => {
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
                            label="experience"
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label="hard-skills"
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label="soft-skills"
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
            <p className="page-title"> professional-info</p>
            <div className="section-view">
                <p>1 /** </p>
                <p>2 *</p>         
                <p>3 *</p>
                <p>4 *</p>
                <p>5 *</p>
                <p>6 *</p>
                <p>7 *</p>
                <p>8 *</p>
                <p>9 *</p>
            </div>
            </div>
            <div className="page-subview">

            </div>
      </main>
    )
}

export default AboutMe;