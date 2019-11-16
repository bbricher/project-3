import React from 'react'
import { Link } from 'react-router-dom'

import './CoachToolbar.css'

const Coachtoolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <drawerToggleButton click={props.drawerClickHandler} />
        
        <div className="toolbar_navigation-items">
          <ul>
            <Link to={"/Schedule"}>
              <li>
                <a>Schedule</a>
              </li>
            </Link>
            <li>
              <a href="/">Your Profile</a>
            </li>
            <li>
              <a href="/">Messaging</a>
            </li>
            <li>
              <a href="/">Training</a>
            </li>
            <li>
              {/* <img src="https://static.spacecrafted.com/bb2ee4f6f3ee44468dd524fd88bbeb00/i/fc4b5d5a03694c48978aa2ed0c0a20fa/1/5feFb8zhrk/PlayWisely_Horz_4C_small.png?dpr=2"/> */}
            </li>
          </ul>

        </div>
      </div>
      


      <div className="spacer" />

    </nav>
  </header>
)

export default Coachtoolbar