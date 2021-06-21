import React from 'react'

import { useAppDispatch, useAppSelector } from 'app/types/Store'

import { HeaderComponent } from './HeaderComponent'
import { actions as metadataAction } from 'app/store/features/Metadata/slice'
import { TicketStatus } from 'app/types/Ticket'
import { SortedBy } from 'app/store/features/Board/types'
import { actions as boardAction } from 'app/store/features/Board/slice'

export const Header = () => {
  const version = useAppSelector((state) => state.metadata.version)
  const sortedBy = useAppSelector((state) => state.board.sortedBy)
  const dispatch = useAppDispatch()

  const handleAddButtonClick = () => {
    dispatch(
      metadataAction.showEditTicketModal({ withStatus: TicketStatus.Pending }),
    )
  }

  const handleSelectSortOption = (sortBy: SortedBy) => {
    dispatch(boardAction.setSortOption(sortBy))
  }

  return (
    <HeaderComponent
      version={version}
      onAddButtonClick={handleAddButtonClick}
      sortedBy={sortedBy}
      onSelectSortOption={handleSelectSortOption}
    />
  )
}
