import { Link } from "../common";
import { useState } from "react";

import "./Header.css"
import { useEffect, useRef } from "react";

const Header = ({setMainView, view, pageMenuRef}) => {
    const [mobileNavShow, setMobileNavShow] = useState(false)
    const navLinkName = useRef(null)
    const handleChangeView = (view) => {
        setMainView(view)
    }

    const syncWidth = () => {
        // If the pageMenuRef and navLinkRef are available, set the width of navLink
        if (pageMenuRef?.current && navLinkName?.current) {
            const pageMenuWidth = pageMenuRef.current.offsetWidth;
            navLinkName.current.style.width = `${pageMenuWidth}px`; // Set navLink width to match page-menu
        }
    }

    const handleMobileNav = (e) => {
        e.preventDefault()
        setMobileNavShow(!mobileNavShow) // toggle the mobile nav show state
    }


    // useEffect to synchronize the width of navLink with pageMenuRef
    useEffect(() => {
        syncWidth(); // initial sync
        window.addEventListener("resize", syncWidth); // update on window resize
    
        // cleanup
        return () => window.removeEventListener("resize", syncWidth);
    }, [pageMenuRef]);
    return <header>
        <Link name={"name"} label="bernard_calma" ref={navLinkName}/>
        <nav className={`navBar ${mobileNavShow ? "mobile-nav_show" : ""}`}>
            <Link name={"home"} label="_home" active={view === "home" && true} onClick={() => handleChangeView("home")}/>
            <Link name={"about-me"} label="_about-me" active={view === "about-me" && true} onClick={() => handleChangeView("about-me")}/>
            <Link name={"projects"} label="_projects" active={view === "projects" && true} onClick={() => handleChangeView("projects")}/>
        </nav>
        <Link name={"contact-me"} label="_contact-me"/>
        {/* <span onClick={(e) => {
                e.preventDefault()
                props.setMainView("Contact")
            }}
        >
            <i className="fa-solid fa-envelope"/>
        </span> */}
        {
            !mobileNavShow ?
            <img className="mobile-nav" src="/images/icons/burger.svg" alt="menu" onClick={handleMobileNav}/>
            : <p className="mobile-nav" onClick={handleMobileNav}>X</p>
        }
        
    </header>
};

export default Header;