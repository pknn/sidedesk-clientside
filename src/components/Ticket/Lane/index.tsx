import React from 'react'

import { getMockTickets, ticketStatusOptions } from 'app/helpers/mockTicket'
import { LaneComponent } from './LaneComponent'

export const Lane = (): JSX.Element => {
  const tickets = getMockTickets(50)
  return (
    <div className="w-full flex justify-between">
      {ticketStatusOptions.map((ticketStatus) => (
        <LaneComponent
          key={ticketStatus}
          tickets={tickets.filter((ticket) => ticket.status === ticketStatus)}
          laneStatus={ticketStatus}
        />
      ))}
    </div>
  )
}
