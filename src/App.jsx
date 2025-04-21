import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { AboutMe, Home } from './components/Views';

const App = () => {
  const [view, setView] = useState("Home")
  return <div id="App">
    <Header 
      setMainView = {setView}
      view = {setView}
    />
    {
      view === "Home" ? <Home />
      : view === "AboutMe" ? <AboutMe />
      : <></>
    }
    <Footer setMainView = {setView} />
  </div>
}

export default App;
