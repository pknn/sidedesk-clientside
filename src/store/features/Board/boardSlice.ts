import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getTickets } from 'app/helpers/mockTicket'
import { getKeyFromString } from 'app/helpers/statusMappers'
import {
  BoardState,
  MoveCrossLaneActionPayload,
  MoveInLaneActionPayload,
} from 'app/store/features/Board/types'
import { Ticket, TicketStatus } from 'app/types/Ticket'

const initialState: BoardState = {
  pendingTickets: getTickets(10, TicketStatus.Pending),
  acceptedTickets: getTickets(10, TicketStatus.Accepted),
  resolvedTickets: getTickets(10, TicketStatus.Resolved),
  rejectedTickets: getTickets(10, TicketStatus.Rejected),
}

const getReorderedTicketList = (
  tickets: Ticket[],
  from: number,
  to: number,
) => {
  const result = [...tickets]
  const [movingTicket] = result.splice(from, 1)
  result.splice(to, 0, movingTicket)

  return result
}

const getMovedTicketLists = (
  source: Ticket[],
  sink: Ticket[],
  from: number,
  to: number,
): [Ticket[], Ticket[]] => [
  source.filter((_, index) => index !== from),
  sink.slice(0, to).concat(source[from]).concat(sink.slice(to)),
]

const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    moveInLane: (
      state: BoardState,
      { payload }: PayloadAction<MoveInLaneActionPayload>,
    ) => {
      const key = getKeyFromString(payload.laneId)
      state[key] = getReorderedTicketList(state[key], payload.from, payload.to)
    },
    moveCrossLane: (
      state: BoardState,
      { payload }: PayloadAction<MoveCrossLaneActionPayload>,
    ) => {
      const sourceKey = getKeyFromString(payload.from.laneId)
      const sinkKey = getKeyFromString(payload.to.laneId)

      const [updatedSource, updatedSink] = getMovedTicketLists(
        state[sourceKey],
        state[sinkKey],
        payload.from.index,
        payload.to.index,
      )

      state[sourceKey] = updatedSource
      state[sinkKey] = updatedSink
    },
  },
})

export const { reducer, actions } = BoardSlice
