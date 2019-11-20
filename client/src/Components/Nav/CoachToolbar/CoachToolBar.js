import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

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

export const CoachToolBar = () => (
  <Styles>
    <Navbar expand="lg">
     <Navbar.Brand href="/">Play Wisely</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Schedule">
              Schedule
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="Training">
              Training
            </Nav.Link>
          </Nav.Item>
                  </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default CoachToolBar