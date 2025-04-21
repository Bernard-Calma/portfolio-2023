import "./AboutMe.css"

const AboutMe = () => {
    return(
        <main className="about-me">
            <div className="page-menu">
            <div className="sections">
                <img className="icon" src="/images/icons/info-professional.svg" alt="icon"/>
                <img className="icon" src="/images/icons/info-personal.svg" alt="icon"/>
                <img className="icon" src="/images/icons/info-hobbies.svg" alt="icon"/>
            </div>
            <div className="section-content">
                <p className="section-title"> <img className="icon" src="/images/icons/arrow.svg" alt="icon"/> professional-info</p>
                <div className="section-sub-contents">
                <div className="sub-content">
                    <p> <img className="icon" src="/images/icons/caret.svg" alt="icon"/> experience</p>
                    <p> <img className="icon" src="/images/icons/caret.svg" alt="icon"/> hard-skills</p>
                    <p> <img className="icon" src="/images/icons/caret.svg" alt="icon"/> soft-skills</p>
                </div>
                </div>
                <p className="section-title"> <img className="icon" src="/images/icons/arrow.svg" alt="icon"/> contacts</p>
                <div className="contacts">
                <p><img src="/images/icons/email.svg" alt="icon"/> nard.calma@gmail.com</p>
                <p><img src="/images/icons/phone.svg" alt="icon"/> +1(123)-456-789</p>
                </div>
            </div>
            </div>
            <div className="page-view">
            <p className="section-title"> professional-info</p>
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
      </main>
    )
}

export default AboutMe;