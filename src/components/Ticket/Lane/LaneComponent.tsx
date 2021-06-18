import React from 'react'

import { Ticket, TicketStatus } from 'app/types/Ticket'
import { Card } from 'app/components/Ticket/Card'
import { Basis } from './LaneComponent.styled'

interface DataProps {
  tickets: Ticket[]
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

export const LaneComponent = ({
  tickets,
  laneStatus,
}: DataProps): JSX.Element => (
  <Basis>
    <div className="bg-gray-50 rounded shadow-sm h-full relative">
      <div className="flex items-center sticky top-0 bg-gray-50 px-2 py-4">
        {getStatusLaneDot(laneStatus)}
        <span className="font-semibold text-gray-500 text-sm italic">
          {TicketStatus[laneStatus].toUpperCase()}
        </span>
      </div>
      <div className="p-2 pt-0">
        {tickets.map((ticket) => (
          <Card key={ticket.id} {...ticket} />
        ))}
      </div>
    </div>
  </Basis>
)
