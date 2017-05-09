import React from 'react'
import {shallow} from 'enzyme'

import Registration from './index'

describe('Registration view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<Registration />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
