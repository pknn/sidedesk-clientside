import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MetadataState, ToggleEditTicketModalPayload } from './types'

const initialState: MetadataState = {
  version: import.meta.env.VITE_CS_VERSION,
  shouldShowEditTicketModal: false,
  editingTicket: undefined,
}

const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    showEditTicketModal(
      state: MetadataState,
      { payload }: PayloadAction<ToggleEditTicketModalPayload>,
    ) {
      state.shouldShowEditTicketModal = true
      state.editingTicket = payload.withTicket
    },
    dismissEditTicketModal(state: MetadataState) {
      state.shouldShowEditTicketModal = false
    },
  },
})

export const { reducer, actions } = MetadataSlice
