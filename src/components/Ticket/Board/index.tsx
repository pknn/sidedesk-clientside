import React from 'react'
import { DropResult } from 'react-beautiful-dnd'

import {
  getStatusFromString,
  TicketStatusKeys,
} from 'app/helpers/statusMappers'
import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { MoveActionPayload } from 'app/types/Board'
import { actions } from 'app/store/features/boardSlice'
import { BoardContainer } from './BoardContainer'
import { BoardContent } from './BoardContent'

export const Board = (): JSX.Element => {
  const boardState = useAppSelector((state) => state.board)
  const dispatch = useAppDispatch()
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return
    const payload: MoveActionPayload = {
      from: {
        index: source.index,
        statusLane: getStatusFromString(source.droppableId as TicketStatusKeys),
      },
      to: {
        index: destination.index,
        statusLane: getStatusFromString(
          destination.droppableId as TicketStatusKeys,
        ),
      },
    }
    dispatch(actions.move(payload))
  }

  return (
    <BoardContainer onDragEnd={handleDragEnd}>
      <BoardContent {...boardState} />
    </BoardContainer>
  )
}
