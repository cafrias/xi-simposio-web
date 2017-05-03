// @flow

import React from 'react'
import {Motion, spring, presets} from 'react-motion'

// IMPORT ASSETS _______________________________________________________________
import './Navbar.sass'
import logo from './logo.svg'
import Hamburger from './Hamburger'
import Cross from './Cross'

// ANIMATIONS __________________________________________________________________
import FadeIn from '../../animations/FadeIn'

// IMPORT COMPONENTS ___________________________________________________________
import List from './List'

// TYPE DEFINITION _____________________________________________________________
type NavbarProps = {
  menuOpen: boolean,
  toggleMenu: () => any
}

// NAVBAR COMPONENT ____________________________________________________________
function Navbar(props: NavbarProps) {
  const {
    menuOpen,
    toggleMenu
  } = props

  return (
    <FadeIn
      onRest={f => f}
    >
      <header role="banner"
        className={`top-nav ${menuOpen ? 'top-nav--open' : ''}`}
        >
        <div className="top-nav__on-top">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {
              menuOpen
              ? addMotionToComponent(Cross, 1)
              : addMotionToComponent(Hamburger, 2)
            }
          </div>
          <List topNav={true} />
        </div>
        {
          menuOpen
          ? <List topNav={false} />
          : null
        }
      </header>
    </FadeIn>
  )
}

// HELPER FUNCTIONS ____________________________________________________________
function addMotionToComponent(component, key) {
  return (
    <Motion key={key} defaultStyle={{x: 0}}
      style={{x: spring(1, presets.gentle)}}
      >
      {interpolatingStyle => component({style: interpolatingStyle})}
    </Motion>
  )
}

export default Navbar
