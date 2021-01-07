//
// Import Base Components
//
import React from 'react';
import { Route, Switch } from "react-router-dom";

//
// Import Assets
//
import './assets/App.css';

//
// Import Component
//
import TheNavigation from "./components/TheNavigation";
import TheFooter from "./components/TheFooter";

//
// Import Views
//
import Home from "./views/Home";
import Tunes from "./views/Tunes";
import About from "./views/About";

//
// Render App Component
//
const App: React.FC = () => {
  return (
    <div className="App container mx-auto">
      <header className="App-header py-16">
          <TheNavigation/>
      </header>

      <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/tunes" component={Tunes} />
              <Route path="/About" component={About} />
          </Switch>
      </main>

        <footer>
            <TheFooter />
        </footer>
    </div>
  );
}

export default App;
