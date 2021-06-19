import React from 'react'

import { Lane } from 'app/components/Ticket/Lane'
import { Ticket, TicketStatus } from 'app/types/Ticket'
import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { getKeyFromStatus } from 'app/helpers/statusMappers'
import styled from 'styled-components'

interface DataProps {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

const MaxH = styled.div`
  max-height: 85vh;
`

export const BoardContent = (props: DataProps) => (
  <MaxH className="grid grid-cols-4 gap-1 overflow-auto">
    {ticketStatusOptions.map((status: TicketStatus) => (
      <Lane
        key={status}
        tickets={props[getKeyFromStatus(status)]}
        laneStatus={status}
      />
    ))}
  </MaxH>
)
