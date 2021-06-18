import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { getMockTickets } from 'app/helpers/mockTicket'

import { BoardComponent } from './BoardComponent'
import { LaneComponent } from '../Lane/LaneComponent'

describe('<BoardComponent />', () => {
  it('should render 4 lanes with correct status', () => {
    const mockTickets = getMockTickets(50)
    const shallowMountedComponent = shallow(
      <BoardComponent tickets={mockTickets} />,
    )

    expect(shallowMountedComponent.find(LaneComponent)).toHaveLength(4)
  })

  it('should render correctly', () => {
    const mockTickets = getMockTickets(50)
    const shallowMountedComponent = shallow(
      <BoardComponent tickets={mockTickets} />,
    )

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
