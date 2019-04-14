import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/protected" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
