import React from 'react'
import {shallow} from 'enzyme'

import About from './index'

describe('About view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<About />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
