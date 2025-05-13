const IconText = ({ icon, label }) => {
    return (
        <div className="icon-text">
            <img className="icon" src={icon} alt="icon" />
            <p className="text">{label}</p>
        </div>
    );
}

export default IconText;