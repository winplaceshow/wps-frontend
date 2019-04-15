import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
// import BarChart from './dataVisuals/barchart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <PrivateRoute path="/protected" component={Dashboard}/>
          {/* <BarChart/> */}
        </div>
      </Router>
    );
  }
}

export default App;
