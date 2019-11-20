import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import Nav from './';
// import MonthlyCalendar from './Components/MonthlyCalendar';
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

         
        </>
      </Router>

    )
  }
}

export default App;