import React from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

import { Lane } from 'app/components/Ticket/Lane'
import { TicketStatus } from 'app/types/Ticket'
import { ticketStatusOptions } from 'app/helpers/mockTicket'
import {
  getKeyFromStatus,
  getStatusFromString,
  TicketStatusKeys,
} from 'app/helpers/statusMappers'
import { useAppDispatch, useAppSelector } from 'app/types/Store'
import { BoardState, MoveActionPayload } from 'app/types/Board'
import { actions } from 'app/store/features/boardSlice'

const toLaneComponent = (state: BoardState) =>
  ticketStatusOptions.map((ticketStatus: TicketStatus) => (
    <Lane
      key={ticketStatus}
      tickets={state[getKeyFromStatus(ticketStatus)]}
      laneStatus={ticketStatus}
    />
  ))

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
    <div className="w-full flex justify-between">
      <DragDropContext onDragEnd={handleDragEnd}>
        {toLaneComponent(boardState)}
      </DragDropContext>
    </div>
  )
}
