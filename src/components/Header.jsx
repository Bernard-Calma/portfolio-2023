
const Header = (props) => {
    const handleChangeView = (view) => {
        props.setMainView(view)
    }
    return <header>
        <ul className="navBar">
            <li onClick={() => handleChangeView('Home')}>Home</li>
            <li onClick={() => handleChangeView('Experience')}>Experience</li>
            <li onClick={() => handleChangeView('Projects')}>Projects</li>
            <li>Let's Connect</li>
        </ul>
    </header>
}

export default Header