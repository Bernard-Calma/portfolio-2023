import './styles.css'
import Home from './home/Home'
import Experience from './experience/Experience'
import Project from './projects/Projects'

const Main = (props) => {
    return <main className="main">
        {
            props.mainView === "Home"
            ? <Home />
            : props.mainView === "Experience"
            ? <Experience />
            : props.mainView === "Projects"
            ? <Project />
            : <></>
        }
    </main>
}

export default Main