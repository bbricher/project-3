import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import MonthlyCalendar from '../../Components/Scheduling/MonthlyCalendar';
import Coachtoolbar from '../../Components/Nav/CoachToolbar/CoachToolBar';


class Schedule extends Component {
  renderEvents = () => {
      let userId = JSON.parse(localStorage.getItem('userId'));
      axios({
          url:`/${userId}/events`,
          method: "GET",
      })
      .then(response => {
          
      })
  }

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