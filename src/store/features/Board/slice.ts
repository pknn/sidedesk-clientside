import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ticketStatusOptions } from 'app/helpers/mockTicket'
import { getKeyFromStatus, getKeyFromString } from 'app/helpers/statusMappers'
import {
  BoardState,
  EditTicketActionPayload,
  MoveCrossLaneActionPayload,
  MoveInLaneActionPayload,
  SortedBy,
} from 'app/store/features/Board/types'
import { Ticket, Tickets, TicketStatus } from 'app/types/Ticket'
import {
  getReorderedTicketList,
  getMovedTicketLists,
  getSortedTicket,
} from './helpers'

const initialState: BoardState = {
  tickets: {
    pendingTickets: [],
    acceptedTickets: [],
    resolvedTickets: [],
    rejectedTickets: [],
  },
  sortedBy: 'id',
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
      state.tickets[key] = getReorderedTicketList(
        state.tickets[key],
        payload.from,
        payload.to,
      )
    },
    moveCrossLane: (
      state: BoardState,
      { payload }: PayloadAction<MoveCrossLaneActionPayload>,
    ) => {
      const sourceKey = getKeyFromString(payload.from.laneId)
      const sinkKey = getKeyFromString(payload.to.laneId)

      const [updatedSource, updatedSink] = getMovedTicketLists(
        state.tickets[sourceKey],
        state.tickets[sinkKey],
        payload.from.index,
        payload.to,
      )

      state.tickets[sourceKey] = updatedSource
      state.tickets[sinkKey] = updatedSink
    },
    setTickets(state: BoardState, { payload }: PayloadAction<Ticket[]>) {
      ticketStatusOptions.map((status) => {
        const key = getKeyFromStatus(status)
        const tickets = payload
          .filter((ticket) => ticket.status === status)
          .sort((a, b) => a.id - b.id)
        state.tickets[key] = tickets
      })
    },
    editTicket(
      state: BoardState,
      { payload }: PayloadAction<EditTicketActionPayload>,
    ) {
      const { isStatusChanged, statusChangedFrom, updatedTicket } = payload
      if (!isStatusChanged) {
        const statusKey = getKeyFromStatus(updatedTicket.status as TicketStatus)
        state.tickets[statusKey] = state.tickets[statusKey].filter(
          (ticket) => ticket.id !== updatedTicket.id,
        )
        state.tickets[statusKey].push(updatedTicket)
      } else {
        const oldStatusKey = getKeyFromStatus(statusChangedFrom as TicketStatus)
        const newStatusKey = getKeyFromStatus(
          updatedTicket.status as TicketStatus,
        )

        state.tickets[oldStatusKey] = state.tickets[oldStatusKey].filter(
          (ticket) => ticket.id !== updatedTicket.id,
        )

        state.tickets[newStatusKey].push(payload.updatedTicket)
      }
    },
    createTicket(state: BoardState, { payload }: PayloadAction<Ticket>) {
      state.tickets[getKeyFromStatus(payload.status)].push(payload)
    },
    setSortOption(state: BoardState, { payload }: PayloadAction<SortedBy>) {
      state.sortedBy = payload
      Object.keys(state.tickets).forEach((key) => {
        const keyOfTicket = key as keyof Tickets
        state.tickets[keyOfTicket] = getSortedTicket(
          state.sortedBy,
          state.tickets[keyOfTicket],
        )
      })
    },
  },
})

export const { reducer, actions } = BoardSlice
