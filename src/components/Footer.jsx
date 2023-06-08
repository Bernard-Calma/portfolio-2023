const Footer = (props) => {
    return (
        <footer>
            <p className="emailAddress">nard.calma@gmail.com</p>
            <div className="socialMedia">
                <span onClick={(e) => {
                        e.preventDefault()
                        props.setMainView("Contact")
                    }}
                >
                    <i className="fa-solid fa-envelope"/>
                </span>

                <a 
                    href="https://github.com/Bernard-Calma"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"/>
                </a>

                <a 
                    href="https://www.linkedin.com/in/bernard-calma/"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-linkedin"/>
                </a>

                <a 
                    className="twitter"
                    href="https://twitter.com/ryznrd"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-twitter"/>
                </a>

                    
                <a 
                    className="portfolioCode"
                    href="https://github.com/Bernard-Calma/portfolio-2023"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-solid fa-code"/>
                </a>
                
            </div>    
        </footer>
    );
};

export default Footer;