import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CardComponent } from './CardComponent'
import { getMockTicket } from 'app/helpers/mockTicket'

describe('<CardComponent />', () => {
  it('should render correctly', () => {
    const mockTicket = getMockTicket()
    const shallowMountedComponent = shallow(<CardComponent {...mockTicket} />)

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
