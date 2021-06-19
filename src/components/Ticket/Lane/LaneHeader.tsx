import React from 'react'

import { TicketStatus } from 'app/types/Ticket'

interface DataProps {
  laneStatus: TicketStatus
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

export const LaneHeader = ({ laneStatus }: DataProps): JSX.Element => (
  <div className="flex items-center top-10 p-2 pt-4 w-full bg-gray-50">
    {getStatusLaneDot(laneStatus)}
    <span className="font-semibold text-gray-500 text-sm italic">
      {TicketStatus[laneStatus].toUpperCase()}
    </span>
  </div>
)
