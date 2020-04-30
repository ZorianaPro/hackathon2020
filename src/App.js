import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Books from "./components/Books";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Books} />
      </Router>
    );
  }
}

export default App;