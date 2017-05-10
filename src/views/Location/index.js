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
      <article className="tile tile--hotel">
        <h2 className="tile__title">ALOJAMIENTO</h2>
        <p className="text-container hotel__text">El Hotel Ushuaia ofrece una tarifa diferencial a los asistentes al Simposio, la cual podrá utilizarse informando al momento de realizar la reserva la participación en el evento:
        </p>
        <ul className="text-container">
          <li>Habitación single por noche $900</li>
          <li>Habitación doble por noche $1.150</li>
          <li>Habitación triple por noche $1.300</li>
        </ul>
        <ul className="tile__social hotel__links">
          <li>
            <a target="_blank" href="http://www.hotelushuaia.com.ar">www.hotelushuaia.com.ar</a>
          </li>
          <li>
            <a href="tel:+54 2901 430671">+54 2901 430671</a>
          </li>
          <li>
            <a href="mailto:reservas@hotelushuaia.com.ar">reservas@hotelushuaia.com.ar</a>
          </li>
        </ul>
      </article>
    </Section>
  )
}

export default Location
