import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import App from "../App";
import Messaging from '../pages/coach-side/Messaging';
import Profile from '../pages/coach-side/Profile';
import Training from '../pages/coach-side/Training'
// import Toolbar from './Components/CoachToolBar/CoachToolBar';
import Schedule from '../pages/coach-side/Schedule'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  };
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  };
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    let { path, url } = useRouteMatch();
    let { pageId } = useParams();
    console.log(this.props.auth);
    return (
      <div>
        {isAuthenticated() && (
          <div className="container-column">
            <h5>
              You are logged in!{" "}
              <a style={{ cursor: "pointer" }} onClick={this.logout}>
                Log Out
              </a>
              .
            </h5>
            <div>
              <Styles>
                <Navbar expand="lg">
                  <Navbar.Brand href="/">Play Wisely</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Nav.Item>
                        <Nav.Link>
                          <Link to={`${url}/`}>Home</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to={`${url}/Schedule`}>Schedule</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to={`${url}/Profile`}>Profile</Link>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link>
                          <Link to={`${url}/Training`}>Training</Link>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Styles>

              <hr />

              <Switch>
                <Route exact path={path}></Route>
                <Route path={`${path}/:pageId`} component={`${pageId}`} />
              </Switch>
            </div>
            <App />
          </div>
        )}
        {!isAuthenticated() && (
          <div className="container-column">
            <h5>Coach and Play </h5>
            <h5>
              You are not logged in! Please{" "}
              <a style={{ cursor: "pointer" }} onClick={this.login}>
                Log In
              </a>{" "}
              to continue.
            </h5>
            <h6>
              This is the default{" "}
              <b>
                <code>Home</code>
              </b>{" "}
              component. The{" "}
              <b>
                <code>App</code>
              </b>{" "}
              component will only be visible once you authenticate.
            </h6>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
