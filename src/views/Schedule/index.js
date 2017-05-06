// @flow

import React from 'react'

import './Schedule.sass'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import MobileTable from './MobileTable'

// DATA ________________________________________________________________________
import days from './data'

function Schedule() {
    return(
      <Section id="schedule" name="Cronograma" className="schedule">
        <div className="mobile-content text-container">
          {
            days.map((day, i) => (
              <MobileTable key={i} {...day}/>
            ))
          }
        </div>
      </Section>
    )
}

export default Schedule
