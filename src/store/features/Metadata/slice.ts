import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getEmptyTicketForm, toTicketForm } from 'app/types/Ticket'
import { MetadataState, ToggleEditTicketModalPayload } from './types'

const initialState: MetadataState = {
  version: import.meta.env.VITE_CS_VERSION,
  shouldShowEditTicketModal: false,
  isEditing: false,
  ticketForm: undefined,
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
      state.isEditing = !!payload.withTicket
      state.ticketForm = payload.withTicket
        ? toTicketForm(payload.withTicket)
        : getEmptyTicketForm(payload.withStatus)
    },
    dismissEditTicketModal(state: MetadataState) {
      state.shouldShowEditTicketModal = false
      state.ticketForm = undefined
    },
  },
})

export const { reducer, actions } = MetadataSlice
