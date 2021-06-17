import { createSlice } from '@reduxjs/toolkit'
import { Metadata } from 'app/types/Metadata'

const initialState: Metadata = {
  version: '1.0.0',
}

export const MetadataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {},
})

export const { reducer, actions } = MetadataSlice
