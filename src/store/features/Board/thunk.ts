import { createAsyncThunk } from '@reduxjs/toolkit'
import { ticketClient } from 'app/clients/TicketClient'
import {
  getKeyFromString,
  getStatusFromString,
  TicketStatusKeys,
} from 'app/helpers/statusMappers'
import { ApplicationState } from 'app/types/Store'
import { Ticket, TicketCreationForm, TicketStatus } from 'app/types/Ticket'
import { actions } from './slice'
import { MoveCrossLaneActionPayload } from './types'

export const fetchTickets = createAsyncThunk(
  'board/fetch-ticket',
  async (_, thunkApi) => {
    const result = await ticketClient.getTickets()
    thunkApi.dispatch(actions.setTickets(result))
    return result
  },
)

export const createTicket = createAsyncThunk(
  'board/create-ticket',
  async (ticket: TicketCreationForm, thunkApi) => {
    ticketClient.createTicket(ticket)
    thunkApi.dispatch(actions.createTicket(ticket))
  },
)

export const updateTicket = createAsyncThunk(
  'board/update-ticket',
  async (ticket: Ticket, thunkApi) => {
    const state = thunkApi.getState() as ApplicationState
    const referenceTicketStatus = state.metadata.ticketForm
      ?.status as TicketStatus
    const updatedTicket = await ticketClient.updateTicket(ticket)
    thunkApi.dispatch(
      actions.editTicket({
        isStatusChanged: referenceTicketStatus !== updatedTicket.status,
        statusChangedFrom: referenceTicketStatus,
        updatedTicket: updatedTicket,
      }),
    )
    return updatedTicket
  },
)

export const moveTicket = createAsyncThunk(
  'board/move-ticket',
  async (payload: MoveCrossLaneActionPayload, thunkApi) => {
    const state = thunkApi.getState() as ApplicationState
    const ticketToUpdate =
      state.board.tickets[getKeyFromString(payload.from.laneId)][
        payload.from.index
      ]
    const ticketWithUpdatedStatus: Ticket = {
      ...ticketToUpdate,
      status: getStatusFromString(payload.to.laneId as TicketStatusKeys),
    }
    thunkApi.dispatch(actions.moveCrossLane(payload))
    await ticketClient.updateTicket(ticketWithUpdatedStatus)
  },
)
