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

  const dispatch = useAppDispatch()

  const handleOnStageDismiss = () => {
    dispatch(actions.toggleEditTicketModal(false))
  }

  return (
    <Stage shouldShowStage={shouldShowModal} onDismiss={handleOnStageDismiss}>
      <EditTicketContainer>
        <EditTicketContent />
      </EditTicketContainer>
    </Stage>
  )
}
