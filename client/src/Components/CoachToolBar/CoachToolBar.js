import React from 'react'

import './CoachToolbar.css'

const Coachtoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <drawerToggleButton click={props.drawerClickHandler} />
        
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Schedule</a>
            </li>
            <li>
              <a href="/">Your Profile</a>
            </li>
            <li>
              <a href="/">Messaging</a>
            </li>
            <li>
              <a href="/">Training</a>
            </li>
          </ul>

        </div>
      </div>
      


      <div className="spacer" />

    </nav>
  </header>
)

export default Coachtoolbar