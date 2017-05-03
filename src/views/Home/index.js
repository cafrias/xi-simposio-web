import React from 'react'

// ASSETS ______________________________________________________________________
import './subtle_dots_@2X.png'
import './Home.sass'

import logo from './logo.svg'
import time from './time.svg'

import idei from './idei.png'
import idei_x2 from './idei@2x.png'
import untdf from './untdf.png'
import untdf_x2 from './untdf@2x.png'

import fbLogo from './fb.svg'
import mailLogo from './mail.svg'

function Home() {
  return (
    <section className="home-container">
      <div className="hero-logo-container">
        <img className="hero-logo" src={logo} alt="Simposio Ushuaia logo con lema"/>
      </div>
      <div className="time-container">
        <img src={time} alt="17/05 - 19/05" className="time"/>
      </div>
      <div className="hero-pics">
        <div className="social">
          <div className="social-container">
            <img src={fbLogo} alt="Facebook Icon" className="social__icon"/>
            <img src={mailLogo} alt="Mail Icon" className="social__icon social__mail"/>
          </div>
        </div>
      </div>
      <section className="organized-section">
        <h2 className="organized-by">
          Organizado Por
        </h2>
        <div className="organized">
          <img srcSet={`${idei_x2} 2x`} src={idei} alt="Idei Logo" className="organized__logo"/>
          <img srcSet={`${untdf_x2} 2x`} src={untdf} alt="UNTDF Logo" className="organized__logo"/>
        </div>
      </section>
      <section className="sponsors">
        <header className="sponsors__header">
          <h2 className="sponsors__title">Auspiciantes</h2>
        </header>
      </section>
    </section>
  )
}

export default Home
