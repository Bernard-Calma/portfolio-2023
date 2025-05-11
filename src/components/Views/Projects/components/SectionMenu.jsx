import { MenuOption } from "../../../../components/common";
import { useState } from "react";

const SectionMenu = () => {
    const [projectsFilters, setProjectsFilters] = useState([])
    const [filterList, setFilterList] = useState([
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Python",
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
                className="section-title"
                icon="/images/icons/arrow.svg"
                label= {"Projects"}
                open={true}
                filterMenu={filterList.map((filter, index) => ({
                    label: filter,
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