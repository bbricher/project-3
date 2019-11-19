import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Components/Home';
import Callback from './authentication/Callback';
import Auth from './authentication/auth';
import history from './authentication/history';
import Schedule from './Schedule';
import Messaging from './Messaging';
import Profile from './Profile';
import Training from './Training';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
      <Route path="/Schedule" component={Schedule} />
      <Route path="/Messaging" component={Messaging} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Training" component={Training} />
    </div>
  </Router>
);

export default Routes;