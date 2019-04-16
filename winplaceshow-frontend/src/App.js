import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Dashboard from './components/dashboard';
import Race from './components/race';
import Login from './components/login';
import Signup from './components/loginSignup/SignUp';
import SearchRace from './components/searchRace';
import PrivateRoute from './components/PrivateRoute';
import SignupSuccess from './components/loginSignup/signupSuccess';
// import BarChart from './dataVisuals/barchart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signedup" component={SignupSuccess}/>
          <PrivateRoute exact path="/protected/" component={Dashboard}/>
          <PrivateRoute path="/protected/:id" component={Race}/>
          {/* <BarChart/> */}
        </div>
      </Router>
    );
  }
}

export default App;
