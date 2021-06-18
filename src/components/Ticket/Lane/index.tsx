import React from 'react'
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd'

import { LaneComponent } from './LaneComponent'
import { Ticket, TicketStatus } from 'app/types/Ticket'

interface DataProps {
  tickets: Ticket[]
  laneStatus: TicketStatus
}

export const Lane = ({ tickets, laneStatus }: DataProps): JSX.Element => (
  <Droppable droppableId={TicketStatus[laneStatus]}>
    {(
      droppableProvided: DroppableProvided,
      droppableStateSnapshot: DroppableStateSnapshot,
    ) => (
      <LaneComponent
        tickets={tickets}
        laneStatus={laneStatus}
        droppableProvided={droppableProvided}
        droppableStateSnapshot={droppableStateSnapshot}
      />
    )}
  </Droppable>
)
