import React from 'react'
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { Ticket, TicketStatus } from 'app/types/Ticket'
import { LaneContainer } from './LaneContainer'
import { LaneHeader } from './LaneHeader'
import { LaneContent } from './LaneContent'
import { Add } from '../Add'

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
  laneStatus,
  droppableProvided,
  droppableStateSnapshot,
}: ComponentProps): JSX.Element => (
  <LaneContainer
    droppableProvided={droppableProvided}
    droppableStateSnapshot={droppableStateSnapshot}
  >
    <LaneHeader
      laneStatus={laneStatus}
      isDraggingOver={droppableStateSnapshot.isDraggingOver}
      isDraggingFrom={!!droppableStateSnapshot.draggingFromThisWith}
    />
    <LaneContent tickets={tickets} droppableProvided={droppableProvided} />
    <Add />
  </LaneContainer>
)
