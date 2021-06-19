import React from 'react'
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { Ticket, TicketStatus } from 'app/types/Ticket'
import { LaneContainer } from './LaneContainer'
import { LaneContent } from './LaneContent'

interface DataProps {
  tickets: Ticket[]
  laneStatus: TicketStatus
}

interface DroppableProps {
  droppableProvided: DroppableProvided
  droppableStateSnapshot: DroppableStateSnapshot
}

type ComponentProps = DataProps & DroppableProps

export const LaneComponent = ({
  tickets,
  droppableProvided,
  droppableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <LaneContainer
    droppableProvided={droppableProvided}
    droppableStateSnapshot={droppableStateSnapshot}
  >
    <LaneContent tickets={tickets} droppableProvided={droppableProvided} />
  </LaneContainer>
)
