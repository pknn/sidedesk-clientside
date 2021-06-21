import React from 'react'
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd'

import { Ticket } from 'app/types/Ticket'
import { CardComponent } from './CardComponent'
import { useAppDispatch } from 'app/types/Store'
import { actions } from 'app/store/features/Metadata/slice'

interface DataProps {
  ticket: Ticket
  index: number
}

export const Card = ({ ticket, index }: DataProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const handleTicketClick = () => {
    dispatch(actions.showEditTicketModal({ withTicket: ticket }))
  }

  return (
    <Draggable draggableId={ticket.id.toString()} key={ticket.id} index={index}>
      {(
        draggableProvided: DraggableProvided,
        draggableStateSnapshot: DraggableStateSnapshot,
      ) => (
        <CardComponent
          id={ticket.id}
          title={ticket.title}
          reporterName={ticket.reporterName}
          draggableProvided={draggableProvided}
          draggableStateSnapshot={draggableStateSnapshot}
          onClick={handleTicketClick}
        />
      )}
    </Draggable>
  )
}
