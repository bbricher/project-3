import React from 'react'

import './ParentToolbar.css'

const Parenttoolbar = props => (
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
              <a href="/">Parent Profile</a>
            </li>
            <li>
              <a href="/">Messaging</a>
            </li>
            <li>
              <a href="/">Additional Learning</a>
            </li>
          </ul>

        </div>
      </div>
      <div className="toolbar__logo"><a href="/">THE LOGO</a>

      </div>


      <div className="spacer" />

    </nav>
  </header>
)

export default Parenttoolbar