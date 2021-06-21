import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getMockTicket, ticketStatusOptions } from 'app/helpers/mockTicket'
import { getKeyFromStatus, getKeyFromString } from 'app/helpers/statusMappers'
import {
  BoardState,
  MoveCrossLaneActionPayload,
  MoveInLaneActionPayload,
} from 'app/store/features/Board/types'
import { Ticket, TicketCreationForm } from 'app/types/Ticket'
import { getReorderedTicketList, getMovedTicketLists } from './helpers'

const initialState: BoardState = {
  pendingTickets: [],
  acceptedTickets: [],
  resolvedTickets: [],
  rejectedTickets: [],
}

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
        payload.to,
      )

      state[sourceKey] = updatedSource
      state[sinkKey] = updatedSink
    },
    setTickets(state: BoardState, { payload }: PayloadAction<Ticket[]>) {
      ticketStatusOptions.map((status) => {
        const key = getKeyFromStatus(status)
        const tickets = payload
          .filter((ticket) => ticket.status === status)
          .sort((a, b) => a.id - b.id)
        state[key] = tickets
      })
    },
    editTicket(state: BoardState, { payload }: PayloadAction<Ticket>) {
      const tickets = state[getKeyFromStatus(payload.status)].filter(
        (ticket) => ticket.id !== payload.id,
      )
      tickets.push(payload)
      state[getKeyFromStatus(payload.status)] = tickets
    },
    createTicket(
      state: BoardState,
      { payload }: PayloadAction<TicketCreationForm>,
    ) {
      const ticket = {
        ...getMockTicket(payload.status),
        ...payload,
      }
      state[getKeyFromStatus(payload.status)].push(ticket)
    },
  },
})

export const { reducer, actions } = BoardSlice
