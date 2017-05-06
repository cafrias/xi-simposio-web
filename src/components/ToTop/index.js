import React, {Component} from 'react'

import './ToTop.sass'

const scrollThreshold = 1000

class ToTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const top = window.scrollY
      const {show} = this.state

      if(show && (top < scrollThreshold)) this.setState({show: false})
      if(!show && (top > scrollThreshold)) this.setState({show: true})
    })
  }

  render() {
    const {
      show
    } = this.state
    return (
      <div onClick={() => window.scrollTo(0, 0)}
        className={`to-top-btn ${show ? '' : 'to-top-btn--hidden'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="2" points="10 17.02 25.491 34 41 17" transform="rotate(-180 25.5 25.5)" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    )
  }
}

export default ToTop
