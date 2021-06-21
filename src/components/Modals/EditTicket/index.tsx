import React from 'react'

import { Stage } from 'app/components/Layout'
import { EditTicketContainer } from './EditTicketContainer'
import { EditTicketContent } from './EditTicketContent'
import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { actions } from 'app/store/features/Metadata/slice'

export const EditTicket = () => {
  const shouldShowModal = useAppSelector(
    (state) => state.metadata.shouldShowEditTicketModal,
  )
  const editingTicket = useAppSelector((state) => state.metadata.editingTicket)

  const dispatch = useAppDispatch()

  const handleOnStageDismiss = () => {
    dispatch(actions.dismissEditTicketModal())
  }

  const handleSave = () => {
    handleOnStageDismiss()
  }

  return (
    <Stage shouldShowStage={shouldShowModal} onDismiss={handleOnStageDismiss}>
      <EditTicketContainer>
        <EditTicketContent
          key={editingTicket?.id}
          editingTicket={editingTicket}
          onSave={handleSave}
        />
      </EditTicketContainer>
    </Stage>
  )
}