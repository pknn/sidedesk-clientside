import { createAsyncThunk } from '@reduxjs/toolkit'
import { ticketClient } from 'app/clients/TicketClient'
import { Ticket } from 'app/types/Ticket'
import { actions } from './slice'

export const fetchTickets = createAsyncThunk(
  'board/fetch-ticket',
  async (_, thunkApi) => {
    const result = await ticketClient.getTickets()
    thunkApi.dispatch(actions.setTickets(result))
    return result
  },
)

export const createTickets = createAsyncThunk(
  'board/create-ticket',
  async (ticket: Ticket) => {
    ticketClient.createTicket(ticket)
  },
)
