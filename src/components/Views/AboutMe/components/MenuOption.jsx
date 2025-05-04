const MenuOption = ({icon, label, open = false, className = "menu-option", onClick, filterMenu}) => {
    return (
        <div className={className} onClick={onClick}>
            <p className={`${className}_text${open ? " open" : ""}`}> <img className="icon" src={icon} alt="menu icon" /> {label}</p>
            {
                filterMenu?.map((filterMenuItem, index) => (
                    <div key={index} className="sub-menu-item" onClick={filterMenuItem.onClick}>
                        <label className="sub-menu-item-label" htmlFor={filterMenuItem.label}>
                        <input type="checkbox" name={filterMenuItem.label}/> {filterMenuItem.label}
                        </label>
                        
                    </div>
                ))
            }
        </div>
    );
}

export default MenuOption;