import './styles.css'
import Home from './home/Home'
import Experience from './experience/Experience'

const Main = (props) => {
    return <main className="main">
        {
            props.mainView === "Home"
            ? <Home />
            : props.mainView === "Experience"
            ? <Experience />
            : <></>
        }
    </main>
}

export default Main