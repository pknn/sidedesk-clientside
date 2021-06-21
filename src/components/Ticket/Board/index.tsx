import React from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { actions } from 'app/store/features/Board/slice'
import { BoardContainer } from './BoardContainer'
import { BoardContent } from './BoardContent'
import {
  getMoveCrossLaneActionPayload,
  getMoveInLaneActionPayload,
} from 'app/store/features/Board/helpers'
import { BoardHeader } from './BoardHeader'
import { moveTicket } from 'app/store/features/Board/thunk'

export const Board = (): JSX.Element => {
  const tickets = useAppSelector((state) => state.board.tickets)
  const dispatch = useAppDispatch()
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      dispatch(
        actions.moveInLane(getMoveInLaneActionPayload(source, destination)),
      )
    } else {
      const payload = getMoveCrossLaneActionPayload(source, destination)
      dispatch(moveTicket(payload))
    }
  }

  return (
    <BoardContainer onDragEnd={handleDragEnd}>
      <BoardHeader />
      <BoardContent {...tickets} />
    </BoardContainer>
  )
}
