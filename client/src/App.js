import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/CoachToolbar/CoachToolBar';
import Home from './Components/Home';
import Messaging  from './Components/Messaging/ChatApp';
import Profile  from './Profile';
import Schedule from './Schedule';
import Training from './Training';


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
