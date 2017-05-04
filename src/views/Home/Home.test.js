import React from 'react'
import {shallow} from 'enzyme'

import Home from './index'

describe('Home view', () => {
  var homeWrapper

  beforeEach(() => homeWrapper = shallow(<Home />))

  it('should render without errors', () => {
    expect(homeWrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(homeWrapper).toMatchSnapshot()
  })
})
