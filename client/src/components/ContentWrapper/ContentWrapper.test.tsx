import React from 'react'
import { shallow } from 'enzyme'
import { ContentWrapper } from './ContentWrapper'

it('renders without crashing', () => {
  shallow(<ContentWrapper />)
})
