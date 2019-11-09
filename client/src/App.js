import React, { Component } from 'react';


//import logo from './logo.svg';
import './App.css';
//import NavBar from './Components/NavBar';
//import MonthlyCalendar from "./Components/MonthlyCalendar";
import Toolbar from './Components/CoachToolBar/CoachToolBar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import MonthlyCalendar from './Components/MonthlyCalendar';
//import {Provider} from 'react-redux';
//import store from './redux/store';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer />
    }
    return (
      <>
        <div style={{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <main style={{ marginTop: '64px' }}>

            <MonthlyCalendar />

          </main>
        </div>


      </>

    )
  }
}

export default App;
