import "./styles.css"

const Link = ({name, label, href, onClick, active = false}) => {
    return(
        <a 
            className={`navLink ${name} ${active ? "active" : ""}`}
            href={href} 
            target="_blank"
            rel="noreferrer"
            onClick={onClick}
        >{label}</a>
    )
}

export default Link;