import React from 'react'
import {shallow} from 'enzyme'

import Schedule from './index'

describe('Schedule view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<Schedule />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
