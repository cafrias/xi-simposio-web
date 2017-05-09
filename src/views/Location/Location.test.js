import React from 'react'
import {shallow} from 'enzyme'

import Location from './index'

describe('Location view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<Location />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
