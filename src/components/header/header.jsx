import { Link } from "../common";

import "./Header.css"

const Header = ({setMainView, view}) => {
    const handleChangeView = (view) => {
        setMainView(view)
    }
    return <header>
        <Link name={"name"} label="bernard_calma"/>
        <nav className="navBar">
            <Link name={"home"} label="_home" active={view === "Home" && true} onClick={() => handleChangeView("Home")}/>
            <Link name={"about-me"} label="_about-me" active={view === "AboutMe" && true} onClick={() => handleChangeView("AboutMe")}/>
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