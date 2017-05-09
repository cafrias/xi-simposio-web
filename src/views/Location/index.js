import React from 'react'

import './Location.sass'

import map from './maps-2.jpg'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import SocialLinks from '../../components/SocialLinks'

function Location() {
  return (
    <Section id="location" name="Ubicación" className="background_orange location">
      <article className="tile">
        <div className="tile__left">
          <h2 className="tile__title">DIRECCIÓN</h2>
          <p className="text-container tile__text">Edificio tal de la Universidad de cual<br/>Calle tanto 12345, Ushuaia, Tierra del Fuego, Argentina.
          </p>
          <p className="tile__text"><a href="maps.google.com">Ver en Google Maps</a></p>
          <div className="tile__social">
            <SocialLinks/>
          </div>
        </div>
        <div className="tile__right">
          <img className="tile__map" src={map} alt="Mapa de la ubicacion"/>
        </div>
      </article>
    </Section>
  )
}

export default Location
