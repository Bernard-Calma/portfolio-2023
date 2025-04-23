import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { AboutMe, Home } from './components/Views';

import { useRef } from 'react';

const App = () => {
  const pageMenuRef  = useRef(null);
  const [view, setView] = useState("Home")
  return <div id="App">
    <Header 
      setMainView = {setView}
      view = {view}
      pageMenuRef = {pageMenuRef }
    />
    {
      view === "Home" ? <Home />
      : view === "AboutMe" ? <AboutMe pageMenuRef = {pageMenuRef }/>
      : <></>
    }
    <Footer setMainView = {setView} />
  </div>
}

export default App;
