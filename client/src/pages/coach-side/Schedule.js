import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MonthlyCalendar from './Components/MonthlyCalendar';
import Coachtoolbar from '../../Components/Nav/CoachToolbar/CoachToolBar';


class Schedule extends Component {

  render() {

    return (
      <Router>
        <>
          <Coachtoolbar />
          <MonthlyCalendar />
        </>
      </Router>

    )
  }
}

export default Schedule;