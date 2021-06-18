import React from 'react'

import { Lane } from 'app/components/Ticket/Lane'
import { Ticket, TicketStatus } from 'app/types/Ticket'
import { ticketStatusOptions } from 'app/helpers/mockTicket'

interface DataProps {
  tickets: Ticket[]
}

const toLaneComponent = (tickets: Ticket[]) =>
  ticketStatusOptions.map((ticketStatus: TicketStatus) => (
    <Lane
      key={ticketStatus}
      tickets={tickets.filter((ticket) => ticket.status === ticketStatus)}
      laneStatus={ticketStatus}
    />
  ))

export const BoardComponent = ({ tickets }: DataProps): JSX.Element => (
  <div className="w-full flex justify-between">{toLaneComponent(tickets)}</div>
)
