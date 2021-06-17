import { configureStore } from '@reduxjs/toolkit'

import { reducer as metadataReducer } from 'app/store/features/metadataSlice'

export const store = configureStore({
  reducer: {
    metadata: metadataReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
