import './styles.css'
import Home from './home/Home'
import Experience from './experience/Experience'
import Project from './projects/Projects'
import Contact from './contact/Contact'

const Main = (props) => {
    return <main className="main">
        {
            props.mainView === "Home"
            ? <Home />
            : props.mainView === "Experience"
            ? <Experience />
            : props.mainView === "Projects"
            ? <Project />
            : props.mainView === "Contact"
            ? <Contact 
                setMainView = {props.setMainView}
                />
            : <></>
        }
    </main>
}

export default Main