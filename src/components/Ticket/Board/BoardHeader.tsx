import React from 'react'

import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { TicketStatus } from 'app/types/Ticket'
import { LaneHeader } from 'app/components/Ticket/Lane/LaneHeader'

export const BoardHeader = () => (
  <div className="flex justify-between sticky top-4">
    {ticketStatusOptions.map((status: TicketStatus) => (
      <LaneHeader key={status} laneStatus={status} />
    ))}
  </div>
)
