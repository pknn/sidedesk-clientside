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
  const boardState = useAppSelector((state) => state.board)
  const dispatch = useAppDispatch()
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      dispatch(
        actions.moveInLane(getMoveInLaneActionPayload(source, destination)),
      )
    } else {
      dispatch(moveTicket(getMoveCrossLaneActionPayload(source, destination)))
    }
  }

  return (
    <BoardContainer onDragEnd={handleDragEnd}>
      <BoardHeader />
      <BoardContent {...boardState} />
    </BoardContainer>
  )
}
