import React, { useState } from 'react'
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'

import { Ticket, TicketStatus } from 'app/types/Ticket'
import { LaneContainer } from './LaneContainer'
import { LaneContent } from './LaneContent'
import { useAppDispatch } from 'app/types/Store'
import { actions } from 'app/store/features/Metadata/slice'

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
}: ComponentProps): JSX.Element => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const dispatch = useAppDispatch()

  const handleAddButtonClick = () => {
    dispatch(actions.showEditTicketModal({}))
  }

  return (
    <LaneContainer
      droppableProvided={droppableProvided}
      droppableStateSnapshot={droppableStateSnapshot}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <LaneContent
        tickets={tickets}
        shouldShowAddButton={laneStatus === TicketStatus.Pending || isMouseOver}
        onAddButtonClick={handleAddButtonClick}
        droppableProvided={droppableProvided}
      />
    </LaneContainer>
  )
}
