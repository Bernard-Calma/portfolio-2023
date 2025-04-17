import "./styles.css"

const Link = ({name, label, active = false}) => {
    return(
        <a className={`navLink ${name} ${active ? "active" : ""}`}>{label}</a>
    )
}

export default Link;