import { MenuOption, IconText } from "../../../../components/common";
import { useState } from "react";

const SectionMenu = () => {
    const [projectsFilters, setProjectsFilters] = useState([])
    const [filterList, setFilterList] = useState([
        {label: "React", icon: "https://img.icons8.com/color/256/react-native.png"},
        {label: "NodeJS", icon: "https://img.icons8.com/color/256/nodejs.png"},
        {label: "Redux", icon: "https://img.icons8.com/color/256/redux.png"},
        {label: "MongoDB", icon: "https://img.icons8.com/color/256/mongodb.png"},
        {label: "PostgreSQL", icon: "https://img.icons8.com/color/256/postgreesql.png"},
        {label: "Arduino", icon: "https://img.icons8.com/color/256/arduino.png"},
        {label: "C#", icon: "https://img.icons8.com/color/256/c-sharp-logo.png"},
        {label: "Python", icon: "https://img.icons8.com/color/256/python.png"},
        {label: "Fusion360", icon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fdivlview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4"},
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