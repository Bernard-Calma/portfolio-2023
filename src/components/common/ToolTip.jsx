import "./styles.css"

const ToolTip = ({description}) => {
    return(
        <div className="toolTipContainer">
            <p>{description}</p>
        </div>
    )
}

export default ToolTip;