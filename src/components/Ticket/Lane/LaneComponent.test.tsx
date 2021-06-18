import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { getMockTickets } from 'app/helpers/mockTicket'
import { LaneComponent } from './LaneComponent'
import { TicketStatus } from 'app/types/Ticket'
import { CardComponent } from 'app/components/Ticket/Card/CardComponent'

describe('<LaneComponent />', () => {
  it('should get lane with specified status correctly', () => {
    const mockTickets = getMockTickets(50).filter(
      (ticket) => ticket.status === TicketStatus.Accepted,
    )
    const shallowMountedComponent = shallow(
      <LaneComponent
        tickets={mockTickets}
        laneStatus={TicketStatus.Accepted}
      />,
    )

    expect(shallowMountedComponent.exists(CardComponent)).toBe(true)
    expect(shallowMountedComponent.find(CardComponent)).toHaveLength(
      mockTickets.length,
    )
  })
  it('should render correctly', () => {
    const mockTickets = getMockTickets(50, TicketStatus.Rejected)
    const shallowMountedComponent = shallow(
      <LaneComponent
        tickets={mockTickets}
        laneStatus={TicketStatus.Rejected}
      />,
    )

    expect(toJson(shallowMountedComponent)).toMatchSnapshot()
  })
})
