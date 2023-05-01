import { useState } from 'react'
import './style.css'
import Home from './home/Home'

const Main = () => {
    const [view, setView] = useState("Home")
    return <main className="main">
        {
            view === "Home"
            ?<Home />
            : <></>
        }
    </main>
}

export default Main