import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
