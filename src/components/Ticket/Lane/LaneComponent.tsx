import React from 'react'
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { Ticket, TicketStatus } from 'app/types/Ticket'
import { Card } from 'app/components/Ticket/Card'
import { Basis } from './LaneComponent.styled'

interface DataProps {
  tickets: Ticket[]
  laneStatus: TicketStatus
}

interface DroppableProps {
  droppableProvided: DroppableProvided
  droppableStateSnapshot: DroppableStateSnapshot
}

type ComponentProps = DataProps & DroppableProps

const getStatusLaneDotColor = (laneStatus: TicketStatus) => {
  switch (laneStatus) {
    case TicketStatus.Pending:
      return 'bg-gray-300'
    case TicketStatus.Accepted:
      return 'bg-yellow-400'
    case TicketStatus.Resolved:
      return 'bg-green-400'
    case TicketStatus.Rejected:
      return 'bg-red-400'
  }
}

const getStatusLaneDot = (laneStatus: TicketStatus) => {
  const className = [
    'w-2 h-2 rounded-full mr-2',
    getStatusLaneDotColor(laneStatus),
  ].join(' ')
  return <div className={className} />
}

const getLaneColor = (isDraggingOver: boolean, isDraggingFrom: boolean) => {
  let color = 'bg-gray-50'
  if (isDraggingOver) {
    if (isDraggingFrom) {
      color = 'bg-blue-100'
    } else {
      color = 'bg-green-100'
    }
  } else if (isDraggingFrom) {
    color = 'bg-red-100'
  }
  return color
}

const getLaneHeaderClassNames = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean,
) =>
  [
    'flex items-center sticky top-10 px-2 py-4 transition-colors duration-150',
    getLaneColor(isDraggingOver, isDraggingFrom),
  ].join(' ')

const getLaneClassNames = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean,
) => {
  return [
    'rounded shadow-sm h-full relative transition-colors duration-150',
    getLaneColor(isDraggingOver, isDraggingFrom),
  ].join(' ')
}

export const LaneComponent = ({
  tickets,
  laneStatus,
  droppableProvided,
  droppableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <Basis>
    <div
      ref={droppableProvided.innerRef}
      className={getLaneClassNames(
        droppableStateSnapshot.isDraggingOver,
        !!droppableStateSnapshot.draggingFromThisWith,
      )}
    >
      <div
        className={getLaneHeaderClassNames(
          droppableStateSnapshot.isDraggingOver,
          !!droppableStateSnapshot.draggingFromThisWith,
        )}
      >
        {getStatusLaneDot(laneStatus)}
        <span className="font-semibold text-gray-500 text-sm italic">
          {TicketStatus[laneStatus].toUpperCase()}
        </span>
      </div>
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
      </div>
    </div>
  </Basis>
)
