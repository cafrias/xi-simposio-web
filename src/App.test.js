import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

describe('App view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<App />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
