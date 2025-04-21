const MenuOption = ({icon, label, open = false, className = "menu-option"}) => {
    return (
        <div className={className}>
            <p className={`${className}_text`}> <img className="icon" src={icon} alt="menu icon" /> {label}</p>
        </div>
    );
}

export default MenuOption;