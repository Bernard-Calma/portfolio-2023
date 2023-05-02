const Footer = (props) => {
    return <footer>
        <p className="emailAddress">nard.calma@gmail.com</p>
        <div className="socialMedia">
            <a 
                href=""
                target="_black"
                rel="noreferrer"
                onClick={(e) => {
                    e.preventDefault()
                    props.setMainView("Contact")
                }}
            >
                <i className="fa-solid fa-envelope"></i></a>
            <a 
                href="https://github.com/Bernard-Calma"
                target="_black"
                rel="noreferrer"
            >
                <i className="fa-brands fa-github"></i></a>
            <a 
                href="https://www.linkedin.com/in/bernard-calma/"
                target="_black"
                rel="noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i></a>
            <a 
                href="https://twitter.com/ryznrd"
                target="_black"
                rel="noreferrer"
            >
                <i className="fa-brands fa-twitter"></i></a>
            
        </div>    
    </footer>
}

export default Footer