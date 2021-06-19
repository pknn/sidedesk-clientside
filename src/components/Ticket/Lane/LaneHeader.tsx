import { TicketStatus } from 'app/types/Ticket'
import React from 'react'

interface DataProps {
  laneStatus: TicketStatus
  isDraggingOver: boolean
  isDraggingFrom: boolean
}

const getLaneHeaderClassNames = (
  isDraggingOver: boolean,
  isDraggingFrom: boolean,
) => {
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

  return [
    'flex items-center sticky top-10 p-2 pt-4 transition-colors duration-150',
    color,
  ].join(' ')
}

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

export const LaneHeader = ({
  laneStatus,
  isDraggingOver,
  isDraggingFrom,
}: DataProps): JSX.Element => (
  <div className={getLaneHeaderClassNames(isDraggingOver, isDraggingFrom)}>
    {getStatusLaneDot(laneStatus)}
    <span className="font-semibold text-gray-500 text-sm italic">
      {TicketStatus[laneStatus].toUpperCase()}
    </span>
  </div>
)
