import "./styles.css"

const Link = ({name, label, href, active = false}) => {
    return(
        <a 
            className={`navLink ${name} ${active ? "active" : ""}`}
            href={href} 
            target="_blank"
            rel="noreferrer"
        >{label}</a>
    )
}

export default Link;