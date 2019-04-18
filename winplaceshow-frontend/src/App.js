import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Dashboard from './components/dashboard';
import Race from './components/futureRace/race';
import Login from './components/loginSignup/login';
import Signup from './components/loginSignup/SignUp';
import SearchRace from './components/searchRace';
import PrivateRoute from './components/PrivateRoute';
import SignupSuccess from './components/loginSignup/signupSuccess';
import PastRaces from './components/pastRaces/pastRaces';
// import BarChart from './dataVisuals/barchart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signedup" component={SignupSuccess}/>
          <Route path="/protected/" component={Dashboard}/>
          {/* <PrivateRoute path="/protected/:id" component={Race}/> */}
          {/* <BarChart/> */}
        </div>
      </Router>
    );
  }
}

export default App;
