import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const [mainView, setMainView] = useState("Home")
  return (
    <div className="App">
      <Header 
        setMainView = {setMainView}
      />
      <Main 
        mainView = {mainView}
      />
      <Footer />
    </div>
  );
}

export default App;
