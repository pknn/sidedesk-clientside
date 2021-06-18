import { createSlice } from '@reduxjs/toolkit'

import { getMockTickets } from 'app/helpers/mockTicket'
import { Board } from 'app/types/Board'

const initialState: Board = {
  tickets: getMockTickets(50),
}

const BoardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
})

export const { reducer, actions } = BoardSlice
