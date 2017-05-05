// @flow

import React from 'react'

import './Speakers.sass'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import Speaker from './Speaker'

// DATA ________________________________________________________________________
import speakers from './data'

function Speakers() {
  return (
    <Section name="Disertantes" className="background_orange speakers">
      <div className="speakers__grid">
        {
          speakers.map((speaker, i) => (
            <Speaker key={i} {...speaker}/>
          ))
        }
      </div>
    </Section>
  )
}

export default Speakers
