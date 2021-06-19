import React from 'react'

import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { TicketStatus } from 'app/types/Ticket'
import { LaneHeader } from 'app/components/Ticket/Lane/LaneHeader'

export const BoardHeader = () => (
  <div className="grid grid-cols-4 gap-1 top-4 z-30">
    {ticketStatusOptions.map((status: TicketStatus) => (
      <LaneHeader key={status} laneStatus={status} />
    ))}
  </div>
)
