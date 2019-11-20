import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/CoachToolbar/CoachToolBar';
import Home from './Components/Home';
import Messaging from '././pages/coach-side/Messaging';
import Profile from '././pages/coach-side/Profile';
import Training from '././pages/coach-side/Training'
// import Toolbar from './Components/CoachToolBar/CoachToolBar';
import Schedule from '././pages/coach-side/Schedule'
//import {Provider} from 'react-redux';
//import store from './redux/store';


class App extends Component {

  render() {

    return (
      <>
        {/* <Router>
          <Switch>
            <Nav />
            <Schedule /> 
            <Route path="/" component = {Home} />         
            <Route path="/Schedule" component={Schedule} />
            <Route path="/Messaging" component={Messaging} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Training" component={Training} />
          </Switch>
        </Router> */}
      </>
    );
  }
}

export default App;
