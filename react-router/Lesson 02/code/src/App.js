import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="left">
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li className="second">
              <Link to="/?state=Delhi">Single Query Paramter</Link>
            </li>
            <li className="third">
              <Link to="/?state=Delhi&country=India">Multiple Query Paramter</Link>
            </li>
            <li className="forth">
              <Link to="/?state=Delhi&country=India&planet=Earth">More Query Paramter</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
