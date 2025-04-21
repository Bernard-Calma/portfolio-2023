import { Link } from "../common";
import "./footer.css"

const Footer = (props) => {
    return (
        <footer>
            <p>find me in: </p>
            <div className="social-media">
                <Link name={"linkedin"} 
                    label={<i className="fa-brands fa-linkedin"/>}    
                />
                <Link name={"twitter"} 
                    label={<i className="fa-brands fa-twitter"/>}    
                />
                {/* <a 
                    href="https://www.linkedin.com/in/bernard-calma/"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-linkedin"/>
                </a> */}

                {/* <a 
                    className="twitter"
                    href="https://twitter.com/ryznrd"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-twitter"/>
                </a> */}

                    
                <a 
                    className="portfolioCode"
                    href="https://github.com/Bernard-Calma/portfolio-2023"
                    target="_black"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"/>
                </a>
            </div>  
            {/* <a 
                    href="https://github.com/Bernard-Calma"
                    target="_black"
                    rel="noreferrer"
                >
                @Bernard-Calma
                <i className="fa-brands fa-github"/>
            </a>   */}
            <Link  name={"github"} 
                label= "@Bernard-Calma"
            />
        </footer>
    );
};

export default Footer;