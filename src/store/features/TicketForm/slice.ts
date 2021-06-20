import { createSlice } from '@reduxjs/toolkit'
import { TicketFormState } from './types'

const initialState: TicketFormState = {
  ticketForm: undefined,
}

const TicketFormSlice = createSlice({
  name: 'ticketForm',
  initialState,
  reducers: {},
})

export const { reducer, actions } = TicketFormSlice
