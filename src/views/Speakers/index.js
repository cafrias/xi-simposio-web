// @flow

import React, {Component} from 'react'

import './Speakers.sass'

// COMPONENTS __________________________________________________________________
import Section from '../../components/Section'
import Speaker from './Speaker'

// DATA ________________________________________________________________________
import speakers from './data'

class Speakers extends Component {
  state: {
    shouldAppear: boolean
  }

  constructor(props: any) {
    super(props)

    this.state = {
      shouldAppear: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      const should = this.refs._grid.getBoundingClientRect().top < 250

      if(should && !this.state.shouldAppear) {
        console.log('triggered')
        this.setState({
          shouldAppear: true
        })
      }
    })
  }

  render() {
    const {
      shouldAppear
    } = this.state
    return (
      <Section id="speakers" name="Disertantes" className="background_orange speakers">
        <div ref="_grid"
          className={`speakers__grid ${shouldAppear ? 'speakers__grid--mount' : ''}`}>
          {
            speakers.map((speaker, i) => (
              <Speaker key={i} {...speaker}/>
            ))
          }
        </div>
      </Section>
    )
  }
}

export default Speakers
