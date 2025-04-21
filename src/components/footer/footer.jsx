import { Link } from "../common";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <p>find me in: </p>
            <div className="social-media">
                <Link name={"linkedin"} 
                    label={<i className="fa-brands fa-linkedin"/>}
                    href={"https://www.linkedin.com/in/bernard-calma/"}    
                />
                <Link name={"twitter"} 
                    label={<i className="fa-brands fa-twitter"/>} 
                    href={"https://twitter.com/ryznrd"}   
                />
                <Link 
                    name={"github"}
                    label={<i className="fa-brands fa-github"/>}
                    href={"https://github.com/Bernard-Calma"}
                />
            </div>  
            <Link  name={"github"} 
                label= "@Bernard-Calma"
            />
        </footer>
    );
};

export default Footer;