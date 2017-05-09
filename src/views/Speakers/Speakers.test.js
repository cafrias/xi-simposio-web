import React from 'react'
import {shallow} from 'enzyme'

import Speakers from './index'

describe('Speakers view', () => {
  var wrapper

  beforeEach(() => wrapper = shallow(<Speakers />))

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
