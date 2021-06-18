import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getTickets } from 'app/helpers/mockTicket'
import { getKeyFromStatus } from 'app/helpers/statusMappers'
import { BoardState, MoveActionPayload } from 'app/types/Board'
import { Ticket, TicketStatus } from 'app/types/Ticket'

const initialState: BoardState = {
  pendingTickets: getTickets(5, TicketStatus.Pending),
  acceptedTickets: getTickets(5, TicketStatus.Accepted),
  resolvedTickets: getTickets(5, TicketStatus.Resolved),
  rejectedTickets: getTickets(5, TicketStatus.Rejected),
}

const getReorderedTicket = (tickets: Ticket[], from: number, to: number) => {
  const result = [...tickets]
  const [movingTicket] = result.splice(from, 1)
  result.splice(to, 0, movingTicket)

  return result
}

const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    move: (state: BoardState, action: PayloadAction<MoveActionPayload>) => {
      const { payload } = action
      if (payload.from.statusLane === payload.to.statusLane) {
        const key = getKeyFromStatus(payload.from.statusLane)
        state[key] = getReorderedTicket(
          state[key],
          payload.from.index,
          payload.to.index,
        )
      } else {
      }
    },
  },
})

export const { reducer, actions } = BoardSlice
