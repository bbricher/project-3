import React, { Component } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//import logo from './logo.svg';
import './App.css';
// import Nav from './Components/Nav/CoachToolbar/CoachToolBar';
// import Home from './Components/Home';
import CoachHome from './pages/coach-side/CoachHome'
import Messaging from '././pages/coach-side/Messaging';
import Profile from '././pages/coach-side/Profile';
import Training from '././pages/coach-side/Training'
// import Toolbar from './Components/CoachToolBar/CoachToolBar';
import Schedule from '././pages/coach-side/Schedule'
// import Weekly from './Components/Scheduling/Weekly';
//import {Provider} from 'react-redux';
//import store from './redux/store';


class App extends Component {

  render() {

    return (
      <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Schedule">Schedule</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Training">Training</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Messaging">Messaging</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>  
        <Row>  
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <CoachHome />
              </Tab.Pane>
              <Tab.Pane eventKey="Schedule">
                <Schedule />
              </Tab.Pane>
              <Tab.Pane eventKey="Profile">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="Training">
                <Training />
              </Tab.Pane>
              <Tab.Pane eventKey="Messaing">
                <Messaging />
              </Tab.Pane>
            </Tab.Content>
        </Row>          
      </Tab.Container>
      
      </>
    );
  }
}

export default App;
