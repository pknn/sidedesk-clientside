import { createSlice } from '@reduxjs/toolkit'

import { getTickets } from 'app/helpers/mockTicket'
import { Board } from 'app/types/Board'
import { TicketStatus } from 'app/types/Ticket'

const initialState: Board = {
  pendingTickets: getTickets(5, TicketStatus.Pending),
  acceptedTickets: getTickets(5, TicketStatus.Accepted),
  resolvedTickets: getTickets(5, TicketStatus.Resolved),
  rejectedTickets: getTickets(5, TicketStatus.Rejected),
}

const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
})

export const { reducer, actions } = BoardSlice
