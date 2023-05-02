
const Header = (props) => {
    const handleChangeView = (view) => {
        props.setMainView(view)
    }
    return <header>
        <ul className="navBar">
            <li className={props.view === 'Home' ? 'selected' : ''}
                onClick={() => handleChangeView('Home')}>Home</li>
            <li className={props.view === 'Experience' ? 'selected' : ''}
                onClick={() => handleChangeView('Experience')}>Experience</li>
            <li className={props.view === 'Projects' ? 'selected' : ''}
                onClick={() => handleChangeView('Projects')}>Projects</li>
            <li>Let's Connect</li>
        </ul>
    </header>
}

export default Header