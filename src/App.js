// @flow

import React, {Component} from 'react'
import './App.sass'

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'
import ToTop from './components/ToTop'

// VIEWS _______________________________________________________________________
import Home from './views/Home'
import Speakers from './views/Speakers'
import About from './views/About'
import Schedule from './views/Schedule'
import Registration from './views/Registration'

class App extends Component {
  state: {
    menuOpen: boolean
  }

  constructor(props: any) {
    super(props)

    this.state = {
      menuOpen: false,
    }

    ;(this:any).toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    const {
      menuOpen
    } = this.state

    return (
      <div className="app">
        <Navbar menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
        <main className={`content-container ${menuOpen ? 'no-scroll' : ''}`}>
          <Home/>
          <About/>
          <Speakers/>
          <Schedule/>
          <Registration/>
        </main>
        <ToTop/>
      </div>
    )
  }
}

export default App
