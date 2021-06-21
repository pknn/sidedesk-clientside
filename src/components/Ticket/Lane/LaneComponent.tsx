import React from 'react'
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
  const dispatch = useAppDispatch()

  const handleAddButtonClick = () => {
    dispatch(actions.showEditTicketModal({ withStatus: laneStatus }))
  }

  return (
    <LaneContainer
      droppableProvided={droppableProvided}
      droppableStateSnapshot={droppableStateSnapshot}
    >
      <LaneContent
        tickets={tickets}
        shouldShowAddButton={laneStatus === TicketStatus.Pending}
        onAddButtonClick={handleAddButtonClick}
        droppableProvided={droppableProvided}
      />
    </LaneContainer>
  )
}
