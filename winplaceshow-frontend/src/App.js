import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Dashboard from './components/dashboard';
import Race from './components/race';
import Login from './components/login';
import SearchRace from './components/searchRace';
import PrivateRoute from './components/PrivateRoute';
// import BarChart from './dataVisuals/barchart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <PrivateRoute exact path="/protected/" component={Dashboard}/>
          <PrivateRoute path="/protected/:id" component={Race}/>
          {/* <BarChart/> */}
        </div>
      </Router>
    );
  }
}

export default App;
