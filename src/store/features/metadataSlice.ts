import { createSlice } from '@reduxjs/toolkit'
import { Metadata } from 'app/types/Metadata'

const initialState: Metadata = {
  version:
    process.env.NODE_ENV === 'test' ? 'test' : import.meta.env.VITE_CS_VERSION,
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {},
})

export const { reducer, actions } = MetadataSlice
