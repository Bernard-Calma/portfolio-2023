const Markdown = ({ label }) => {
    return (
        <div className="markdown" style={styles.markdown}>
            <img className="markdown-icon" src="/images/icons/markdown.svg" alt="markdown icon" />
            <div className="markdown-content">
                {label}
            </div>
        </div>
    );
};

const styles = {
    markdown: {
        display: "flex",
        gap: "0.5rem",
        padding: "0 0.5rem",
    },
}

export default Markdown;