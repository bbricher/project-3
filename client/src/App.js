import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//import logo from './logo.svg';
import './App.css';
//import NavBar from './Components/NavBar';
//import MonthlyCalendar from "./Components/MonthlyCalendar";
import Toolbar from './Components/CoachToolBar/CoachToolBar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import MonthlyCalendar from './Components/MonthlyCalendar';
import Schedule from '././pages/coach-side/Schedule'
//import {Provider} from 'react-redux';
//import store from './redux/store';


class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Nav />
            <Schedule />
            <Route path="/" component = {Home} />         
            <Route path="/Schedule" component={Schedule} />
            <Route path="/Messaging" component={Messaging} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Training" component={Training} />
          </Switch>
        </Router>


      </React.Fragment>
    );
  }
}

export default App;
