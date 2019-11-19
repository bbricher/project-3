import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/CoachToolbar/CoachToolBar';
import MonthlyCalendar from './Components/MonthlyCalendar';
import Messaging from './pages/coach-side/Messaging';

class App extends Component {

  render() {

    return (
      <Router>
        <>

          <Nav />
          

          <Switch>
          
           <Route exact path="/Messaging" component= {Messaging}/>
            </Switch>

         

          <MonthlyCalendar />
        </>
      </Router>

    )
  }
}

export default App;