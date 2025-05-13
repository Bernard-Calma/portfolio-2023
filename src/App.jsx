import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { AboutMe, Home, Projects } from './components/Views';

import { useRef } from 'react';

const App = () => {
  const pageMenuRef  = useRef(null);
  const [view, setView] = useState("home")
  return <div id="App">
    <Header 
      setMainView = {setView}
      view = {view}
      pageMenuRef = {pageMenuRef }
    />
    {
      view === "home" ? <Home />
      : view === "about-me" ? <AboutMe pageMenuRef = {pageMenuRef }/>
      : view === "projects" ? <Projects pageMenuRef = {pageMenuRef }/>
      : <></>
    }
    <Footer setMainView = {setView} />
  </div>
}

export default App;
