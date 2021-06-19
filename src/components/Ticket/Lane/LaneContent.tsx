import React from 'react'

import { Card } from 'app/components/Ticket/Card'
import { Ticket } from 'app/types/Ticket'
import { DroppableProvided } from 'react-beautiful-dnd'

interface DataProps {
  tickets: Ticket[]
}

interface DroppableProps {
  droppableProvided: DroppableProvided
}

type ComponentProps = DataProps & DroppableProps

export const LaneContent = ({ tickets, droppableProvided }: ComponentProps) => (
  <div className="px-2">
    {tickets.map((ticket, index) => (
      <Card
        key={ticket.id}
        index={index}
        id={ticket.id}
        title={ticket.title}
        reporterName={ticket.reporterName}
      />
    ))}
    {droppableProvided.placeholder}
  </div>
)
