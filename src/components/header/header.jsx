import { Link } from "../common";

import "./Header.css"

const Header = (props) => {
    const handleChangeView = (view) => {
        props.setMainView(view)
    }
    return <header>
        <Link name={"name"} label="bernard_calma"/>
        <nav className="navBar">
            <Link name={"home"} label="_home" active={true}/>
            <Link name={"about-me"} label="_about-me"/>
            <Link name={"projects"} label="_projects"/>
        </nav>
        <Link name={"contact-me"} label="_contact-me"/>
        {/* <span onClick={(e) => {
                e.preventDefault()
                props.setMainView("Contact")
            }}
        >
            <i className="fa-solid fa-envelope"/>
        </span> */}
    </header>
};

export default Header;