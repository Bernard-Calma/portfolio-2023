import MenuOption from "./MenuOption";

import {Markdown} from "../../../../components/common"

const SectionMenu = ({
    label,
    openContent,
    openSubContent,
    onClick,
    subContents
}) => <div className={`section-menu${openContent === label ? " open" : ""}`}>                                                                                              
    <MenuOption 
        className="section-title"
        icon="/images/icons/arrow.svg"
        label= {label}
        open={openContent === label}
        onClick={onClick}
    />
    <div className="section-sub-contents">
        <div className="sub-content">
            {
                subContents?.map((subContent, index) => (
                    <MenuOption 
                        key={index}
                        icon="/images/icons/caret.svg"
                        label={<Markdown label={subContent.label} />} // use the Markdown component to render the label
                        open={openSubContent === subContent.label}
                        onClick={subContent.onClick}
                        filterMenu={subContent.filterMenu} // pass the subMenu to the MenuOption component
                    />
                ))
            }
        </div>
    </div>
</div>

export default SectionMenu;