import React from 'react'
import { shallow } from 'enzyme'
import { FlexContainer } from './FlexContainer'

it('renders without crashing', () => {
  shallow(<FlexContainer />)
})
