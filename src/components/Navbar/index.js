// @flow

import React, {Component} from 'react'
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

// TYPES _______________________________________________________________________
type NavBarProps = {
  menuOpen: boolean,
  toggleMenu: () => void,
  closeAndNavigate: () => void
}

// NAVBAR COMPONENT ____________________________________________________________
class Navbar extends Component {
  state: {
    shrink: boolean
  }

  constructor(props: NavBarProps) {
    super(props)

    this.state = {
      shrink: false
    }
  }

  checkIfOnTop() {
    return window.scrollY <= 0
  }

  componentDidMount() {
    const {
      checkIfOnTop
    } = this

    if(!checkIfOnTop()) this.setState({shrink: true})

    window.addEventListener('scroll', () => {
      this.setState({
        shrink: !checkIfOnTop()
      })
    })
  }

  render() {
    const {
      menuOpen,
      toggleMenu,
      closeAndNavigate
    } = this.props

    const {
      shrink
    } = this.state

    return (
      <FadeIn
        onRest={f => f}
      >
        <header role="banner"
          className={`top-nav
            ${shrink ? 'top-nav--shrunk' : ''}
            ${menuOpen ? 'top-nav--open' : ''}`}
          >
          <div className="top-nav__on-top">
            <div className={`logo-container ${shrink ? 'logo-container--shrunk' : ''}`}>
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
            ? <List closeAndNavigate={closeAndNavigate} topNav={false} />
            : null
          }
        </header>
      </FadeIn>
    )
  }
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
