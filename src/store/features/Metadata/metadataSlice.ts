import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MetadataState } from 'app/store/features/Metadata/types'

const initialState: MetadataState = {
  version: import.meta.env.VITE_CS_VERSION,
  shouldShowEditTicketModal: false,
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    toggleEditTicketModal(
      state: MetadataState,
      { payload }: PayloadAction<boolean>,
    ) {
      state.shouldShowEditTicketModal = payload
    },
  },
})

export const { reducer, actions } = MetadataSlice
