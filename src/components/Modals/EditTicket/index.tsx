import React from 'react'

import { Stage } from 'app/components/Layout'
import { EditTicketContainer } from './EditTicketContainer'
import { EditTicketContent } from './EditTicketContent'
import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { actions as metadataActions } from 'app/store/features/Metadata/slice'
import { TicketForm, toTicket, toTicketCreationForm } from 'app/types/Ticket'
import { actions as boardActions } from 'app/store/features/Board/slice'

export const EditTicket = () => {
  const shouldShowModal = useAppSelector(
    (state) => state.metadata.shouldShowEditTicketModal,
  )
  const ticketForm = useAppSelector((state) => state.metadata.ticketForm)
  const isEditing = useAppSelector((state) => state.metadata.isEditing)

  const dispatch = useAppDispatch()

  const handleOnStageDismiss = () => {
    dispatch(metadataActions.dismissEditTicketModal())
  }

  const handleSave = (ticketForm: TicketForm) => {
    try {
      if (isEditing) {
        const ticket = toTicket(ticketForm)
        dispatch(boardActions.editTicket(ticket))
      } else {
        const ticket = toTicketCreationForm(ticketForm)
        dispatch(boardActions.createTicket(ticket))
      }
    } catch (error) {
      alert(error)
      return
    }
    handleOnStageDismiss()
  }

  return (
    <Stage shouldShowStage={shouldShowModal} onDismiss={handleOnStageDismiss}>
      <EditTicketContainer>
        <EditTicketContent
          key={ticketForm?.id}
          ticketForm={ticketForm}
          onSave={handleSave}
        />
      </EditTicketContainer>
    </Stage>
  )
}
