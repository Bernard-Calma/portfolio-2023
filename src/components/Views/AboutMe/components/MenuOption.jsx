const MenuOption = ({icon, label, open = false, className = "menu-option", onClick}) => {
    return (
        <div className={className} onClick={onClick}>
            <p className={`${className}_text${open ? " open" : ""}`}> <img className="icon" src={icon} alt="menu icon" /> {label}</p>
        </div>
    );
}

export default MenuOption;