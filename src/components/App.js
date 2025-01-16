import React from "react";
import Article from './Article';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import './App.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home name="Dennis Kipsang" city="Tokyo" />
      <About />
    </div>
  );
}

export default App;