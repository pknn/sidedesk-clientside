import { configureStore } from '@reduxjs/toolkit'

import { reducer as metadataReducer } from 'app/store/features/metadataSlice'
import { reducer as boardReducer } from 'app/store/features/boardSlice'

export const store = configureStore({
  reducer: {
    metadata: metadataReducer,
    board: boardReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
