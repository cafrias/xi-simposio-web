// @flow

import React, {Component} from 'react'
import './App.sass'

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'
import Header from './components/Header'

// VIEWS _______________________________________________________________________
import Home from './views/Home'
import Speakers from './views/Speakers'

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
          <Speakers/>
        </main>
      </div>
    )
  }
}

export default App
