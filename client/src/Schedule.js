import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MonthlyCalendar from './Components/Scheduling/MonthlyCalendar'
import Weekly from './Components/Scheduling/Weekly';

class Schedule extends Component {

  render() {

    return (
      <Router>
        <>
                  
         <MonthlyCalendar />
         <Weekly/>
        </>
      </Router>

    )
  }
}

export default Schedule;