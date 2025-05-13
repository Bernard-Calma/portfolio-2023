import { MenuOption, IconText } from "../../../../components/common";

const SectionMenu = ({filterList, projectsFilters, handleProjectsFilters}) => {
    return (
        <div className="section-menu">
            <MenuOption 
                className="menu-option"
                icon="/images/icons/arrow.svg"
                label= {"Projects"}
                open={true}
                filterMenu={filterList.map((filter, index) => ({
                    icon: filter.icon,
                    label: filter.label, // use the IconText component to render the label
                    filters: projectsFilters,
                    addFilter: handleProjectsFilters
                }))} // pass the subMenu to the MenuOption component
            />
        </div>
    );
}

export default SectionMenu;