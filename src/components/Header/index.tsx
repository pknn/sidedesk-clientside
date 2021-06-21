import React from 'react'

import { useAppDispatch, useAppSelector } from 'app/types/Store'

import { HeaderComponent } from './HeaderComponent'
import { actions } from 'app/store/features/Metadata/slice'
import { TicketStatus } from 'app/types/Ticket'

export const Header = () => {
  const version = useAppSelector((state) => state.metadata.version)
  const dispatch = useAppDispatch()

  const handleAddButtonClick = () => {
    dispatch(actions.showEditTicketModal({ withStatus: TicketStatus.Pending }))
  }

  return (
    <HeaderComponent
      version={version}
      onAddButtonClick={handleAddButtonClick}
    />
  )
}
