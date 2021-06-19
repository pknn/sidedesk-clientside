import React from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { actions } from 'app/store/features/boardSlice'
import { BoardContainer } from './BoardContainer'
import { BoardContent } from './BoardContent'

export const Board = (): JSX.Element => {
  const boardState = useAppSelector((state) => state.board)
  const dispatch = useAppDispatch()
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    if (source.droppableId === destination.droppableId) {
      dispatch(
        actions.moveInLane({
          laneId: source.droppableId,
          from: source.index,
          to: destination.index,
        }),
      )
    } else {
      dispatch(
        actions.moveCrossLane({
          from: {
            laneId: source.droppableId,
            index: source.index,
          },
          to: {
            laneId: destination.droppableId,
            index: destination.index,
          },
        }),
      )
    }
  }

  return (
    <BoardContainer onDragEnd={handleDragEnd}>
      <BoardContent {...boardState} />
    </BoardContainer>
  )
}
