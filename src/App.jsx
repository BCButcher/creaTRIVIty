import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTrivia from "./components/CreateTrivia";
import EditTrivia from "./components/EditTrivia";
import TriviasList from "./components/TriviasList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar  navbar-expand-lg navbarilight bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank"></a>
            <Link to="/" className="navbar-brand">CreaTRIVITY</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Trivia</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Trivia</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TriviasList} />
          <Route path="/edit/:id" component={EditTrivia} />
          <Route path="/create" component={CreateTrivia} />
        </div>
      </Router>
    );
  }
}

export default App;
