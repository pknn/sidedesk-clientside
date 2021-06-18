import { createSlice } from '@reduxjs/toolkit'
import { Metadata } from 'app/types/Metadata'

const initialState: Metadata = {
  version: import.meta.env.VITE_CS_VERSION,
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {},
})

export const { reducer, actions } = MetadataSlice
