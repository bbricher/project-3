import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
//import {Provider} from 'react-redux';
//import store from './redux/store';

function App() {
  return (
  //  <Provider store={store}>
    <>

    <NavBar/>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    </>
  );
}

export default App;
