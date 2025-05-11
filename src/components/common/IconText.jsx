const IconText = ({ icon, text }) => {
    return (
        <div className="icon-text">
            <img className="icon" src={icon} alt="icon" />
            <p className="text">{text}</p>
        </div>
    );
}

export default IconText;