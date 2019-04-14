import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
