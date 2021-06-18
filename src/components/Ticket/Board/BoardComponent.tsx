import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

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

export const BoardComponent = ({ tickets }: DataProps): JSX.Element => {
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    console.log(source, destination)
  }

  return (
    <div className="w-full flex justify-between">
      <DragDropContext onDragEnd={handleDragEnd}>
        {toLaneComponent(tickets)}
      </DragDropContext>
    </div>
  )
}
