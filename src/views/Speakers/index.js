import React from 'react'

import './Speakers.sass'

// COMPONENTS __________________________________________________________________
import Header from '../../components/Header'
import Speaker from './Speaker'

// DATA ________________________________________________________________________
import speakers from './data'

function Speakers() {
  return (
    <section className="background_orange section speakers">
      <Header title="Disertantes"/>
      <div className="speakers__grid">
        {
          speakers.map((speaker, i) => (
            <Speaker key={i} {...speaker}/>
          ))
        }
      </div>
    </section>
  )
}

export default Speakers
