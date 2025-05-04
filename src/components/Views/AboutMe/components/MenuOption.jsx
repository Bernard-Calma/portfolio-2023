const MenuOption = ({icon, label, open = false, className = "menu-option", onClick, filterMenu}) => {
    return (
        <div className={className} onClick={onClick}>
            <p className={`${className}_text${open ? " open" : ""}`}> <img className="icon" src={icon} alt="menu icon" /> {label}</p>
            <div className={`menu-option_filters${open ? " open" : ""}`}>
                { filterMenu?.map((filterMenuItem, index) => (
                    <label className="filter-item" key={index}>
                        <input type="checkbox"/> {filterMenuItem.label}
                    </label>
                ))}
            </div>

        </div>
    );
}

export default MenuOption;