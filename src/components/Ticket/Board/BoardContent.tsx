import React from 'react'

import { Lane } from 'app/components/Ticket/Lane'
import { Ticket, TicketStatus } from 'app/types/Ticket'
import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { getKeyFromStatus } from 'app/helpers/statusMappers'

interface DataProps {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

const getLanes = (props: DataProps): JSX.Element[] =>
  ticketStatusOptions.map((status: TicketStatus) => (
    <Lane
      key={status}
      tickets={props[getKeyFromStatus(status)]}
      laneStatus={status}
    />
  ))

export const BoardContent = (props: DataProps) => <>{getLanes(props)}</>
