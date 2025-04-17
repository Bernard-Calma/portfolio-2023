import { useState } from 'react';
import './App.css';
import Footer from './/components/footer/footer';
import Header from './components/header/header';
import { Home } from './components/Views';

const App = () => {
  const [view, setView] = useState("Home")
  return <div id="App">
    <Header 
      setMainView = {setView}
      view = {setView}
    />
    {
      view === "Home" ? <Home />
      : <></>
    }
    <Footer setMainView = {setView} />
  </div>
}

export default App;
