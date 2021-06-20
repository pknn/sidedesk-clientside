import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SetTicketFormPayload, TicketFormState } from './types'

const initialState: TicketFormState = {
  ticketForm: undefined,
}

const TicketFormSlice = createSlice({
  name: 'ticketForm',
  initialState,
  reducers: {
    set(state, { payload }: PayloadAction<SetTicketFormPayload>) {
      state.ticketForm = payload.ticketForm
    },
    clear(state) {
      state.ticketForm = undefined
    },
  },
})

export const { reducer, actions } = TicketFormSlice
