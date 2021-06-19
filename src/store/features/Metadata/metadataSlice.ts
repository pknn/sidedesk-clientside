import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MetadataState } from 'app/store/features/Metadata/types'

const initialState: MetadataState = {
  version: import.meta.env.VITE_CS_VERSION,
  shouldShowStageComponent: false,
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {
    toggleStageShow(state: MetadataState, { payload }: PayloadAction<boolean>) {
      state.shouldShowStageComponent = payload
    },
  },
})

export const { reducer, actions } = MetadataSlice
