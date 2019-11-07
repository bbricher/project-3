import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import MonthlyCalendar from "./Components/MonthlyCalendar";
//import {Provider} from 'react-redux';
//import store from './redux/store';

function App() {
  return (


  //  <Provider store={store}>
    <>

    <NavBar/>
    <div className="App">
      <header className="App-header">
      {/* Beginning of Calendar */}
      </header>
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              Coach<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <MonthlyCalendar />
        </main>
      </div>

      {/* End Of Calendar */}
      
    </div>
    </>
  );
}

export default App;
