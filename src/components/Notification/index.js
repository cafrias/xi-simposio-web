import React from 'react'

import './Notification.sass'

class Notification extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {open} = this.state
    return (
      <div className={`notify ${open ? 'notify--open' : ''}`}>
        <p className="notify__text">
          Descargue libro con trabajos presentados. {' '}
          <a target="_blank" href="https://drive.google.com/open?id=0B7VKVU2ob_G2bUZCZ3V3TXdiTkk">Aquí</a>
        </p>
        <div className="notify__icon" role="button" onClick={this.toggleOpen.bind(this)}>
          <svg className="notify__icon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polyline fill="none" stroke="#FFFFFF" strokeWidth="2" points="10 17.02 25.491 34 41 17" transform="rotate(-180 25.5 25.5)" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default Notification
