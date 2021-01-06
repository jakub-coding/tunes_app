import React from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';
import { NavLink} from "react-router-dom";


function App() {
  return (
    <div className="App container mx-auto">
      <header className="App-header py-16">
        <nav className="flex justify-center items-center">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/tunes">Tunes</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
