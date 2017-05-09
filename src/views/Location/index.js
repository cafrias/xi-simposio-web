import React from 'react'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'

function Location() {
  return (
    <Section id="location" name="Ubicación" className="background_orange location">
      <article className="tile">
        <h2>DIRECCIÓN</h2>
        <p>Edificio tal de la Universidad de cual Calle tanto 12345, Ushuaia, Tierra del Fuego, Argentina.
          <br/>
          <a href="maps.google.com">Ver en Google Maps</a>
        </p>
        <div className="tile__social">
          some links
        </div>
        <img src="" alt=""/>
      </article>
    </Section>
  )
}

export default Location
