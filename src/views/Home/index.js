// @flow

import React from 'react'

// ASSETS ______________________________________________________________________
import './assets/subtle_dots_@2X.png'
import './Home.sass'

import logo from './assets/logo.svg'
import time from './assets/time.svg'

import idei_x2 from './assets/idei@2x.png'
import untdf_x2 from './assets/untdf@2x.png'

// ICONS _______________________________________________________________________
import FacebookIcon from './FacebookIcon'
import GmailIcon from './GmailIcon'

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
            <a className="social__icon-link" target="_blank" href="https://es-la.facebook.com/people/Simposio-Ushuaia/100008262517328">
              <FacebookIcon />
            </a>
            <a className="social__icon-link social__mail" href="mailto:ponencias.simposio@gmail.com">
              <GmailIcon />
            </a>
          </div>
        </div>
      </div>
      <section className="organized-section">
        <h2 className="organized-by">
          <span className="organized-by__text">Organizado Por</span>
        </h2>
        <div className="organized">
            <img src={idei_x2} alt="Idei Logo" className="organized__logo"/>
            <img src={untdf_x2} alt="UNTDF Logo" className="organized__logo"/>
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
