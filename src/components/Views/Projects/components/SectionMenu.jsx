import { MenuOption, IconText } from "../../../../components/common";
import { useState } from "react";

const SectionMenu = () => {
    const [projectsFilters, setProjectsFilters] = useState([])
    const [filterList, setFilterList] = useState([
        {label: "React", icon: "https://img.icons8.com/color/256/react-native.png"},
        {label: "NodeJS", icon: "https://img.icons8.com/color/256/nodejs.png"},
        {label: "Redux", icon: "https://img.icons8.com/color/256/redux.png"},
        {label: "Python", icon: "https://img.icons8.com/color/256/python.png"},
        {label: "Flask", icon: "images/skills/flask.png"},
        {label: "Django", icon: "images/skills/django.png"},
        {label: "MongoDB", icon: "https://img.icons8.com/color/256/mongodb.png"},
        {label: "PostgreSQL", icon: "https://img.icons8.com/color/256/postgreesql.png"},
        {label: "Javascript", icon: "https://img.icons8.com/color/256/javascript.png"},
    ]) 

    const handleProjectsFilters = (e, filter) => {
        e.preventDefault() // prevent the default behavior of the event
        // check if the filter is already in the array
        if (projectsFilters.includes(filter)) {
            // if it is, remove it from the array
            setProjectsFilters(projectsFilters.filter(item => item !== filter))
        } else {
            // if it is not, add it to the array
            setProjectsFilters([...projectsFilters, filter])
        }
    }
    return (
        <div className="section-menu">
            <MenuOption 
                className="menu-option"
                icon="/images/icons/arrow.svg"
                label= {"Projects"}
                open={true}
                filterMenu={filterList.map((filter, index) => ({
                    label: <IconText icon={filter.icon} text={filter.label} />, // use the IconText component to render the label
                    filters: projectsFilters,
                    addFilter: handleProjectsFilters
                }))} // pass the subMenu to the MenuOption component
            />
            <div className="section-sub-contents">
            </div>
        </div>
    );
}

export default SectionMenu;