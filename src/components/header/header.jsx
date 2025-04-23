import { Link } from "../common";

import "./Header.css"
import { useEffect, useRef } from "react";

const Header = ({setMainView, view, pageMenuRef}) => {
    const navLinkName = useRef(null)
    const handleChangeView = (view) => {
        setMainView(view)
    }

    useEffect(() => {
        // If the pageMenuRef and navLinkRef are available, set the width of navLink
        if (pageMenuRef?.current && navLinkName?.current) {
          const pageMenuWidth = pageMenuRef.current.offsetWidth;
          navLinkName.current.style.width = `${pageMenuWidth}px`; // Set navLink width to match page-menu
        }
      }, [pageMenuRef]); // This effect runs whenever the pageMenuRef changes
    return <header>
        <Link name={"name"} label="bernard_calma" ref={navLinkName}/>
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