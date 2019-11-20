import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
// import './App.css';
// import Nav from './';
// import MonthlyCalendar from './Components/MonthlyCalendar';
// import Messaging from './pages/coach-side/Messaging';

class App extends Component {

  render() {

    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h1>PlayCoach</h1>
            <p>
              First developmental play system designed to optimize each child's natural learning and movement ability during the brains early critical wiring period, from birth to age 5.
              {/* "Preparig young mind to thrive in a changing world" "where kids play to learn and parents learn to play"
              "Transforming the way people (parents teachers and proffessor)" */}
            </p>
          </Container>
        </Jumbotron>
      </>

    )
  }
}

export default App;