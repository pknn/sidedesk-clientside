import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Lane } from 'app/components/Ticket/Lane'
import { Ticket, TicketStatus } from 'app/types/Ticket'
import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { getKeyFromStatus } from 'app/helpers/statusMappers'

export interface DataProps {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

const toLaneComponent = (props: DataProps) =>
  ticketStatusOptions.map((ticketStatus: TicketStatus) => (
    <Lane
      key={ticketStatus}
      tickets={props[getKeyFromStatus(ticketStatus)]}
      laneStatus={ticketStatus}
    />
  ))

export const BoardComponent = (props: DataProps): JSX.Element => {
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    console.log(source, destination)
  }

  return (
    <div className="w-full flex justify-between">
      <DragDropContext onDragEnd={handleDragEnd}>
        {toLaneComponent(props)}
      </DragDropContext>
    </div>
  )
}
