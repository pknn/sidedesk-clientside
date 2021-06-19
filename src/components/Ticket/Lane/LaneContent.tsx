import React from 'react'

import { Card } from 'app/components/Ticket/Card'
import { Ticket } from 'app/types/Ticket'
import { DroppableProvided } from 'react-beautiful-dnd'
import { AddItemButton } from 'app/components/AddItemButton/index'

interface DataProps {
  tickets: Ticket[]
  shouldShowAddButton: boolean
}

interface ActionProps {
  onAddButtonClick: VoidFunction
}

interface DroppableProps {
  droppableProvided: DroppableProvided
}

type ComponentProps = DataProps & ActionProps & DroppableProps

export const LaneContent = ({
  tickets,
  shouldShowAddButton,
  onAddButtonClick,
  droppableProvided,
}: ComponentProps) => (
  <div className="p-2 pt-0">
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
    <AddItemButton
      shouldShowAddButton={shouldShowAddButton}
      onClick={onAddButtonClick}
    />
  </div>
)
