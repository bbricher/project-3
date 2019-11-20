import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Home from './Components/Home';
import Callback from './authentication/Callback';
import Auth from './authentication/auth';
import history from './authentication/history';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <Switch>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }} />
    </Switch>
  </Router>
);

export default Routes;