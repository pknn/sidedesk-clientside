import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { getMockTickets } from 'app/helpers/mockTicket'
import { TicketStatus } from 'app/types/Ticket'

import { Lane } from '.'

const setupLaneComponent = () => {
  const mockTickets = getMockTickets(50).filter(
    (ticket) => ticket.status === TicketStatus.Accepted,
  )
  return shallow(
    <Lane tickets={mockTickets} laneStatus={TicketStatus.Accepted} />,
  )
}

describe('<LaneComponent />', () => {
  it('should render correctly', () => {
    const shallowMountedComponent = setupLaneComponent()

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
