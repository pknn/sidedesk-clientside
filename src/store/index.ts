import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { reducer as metadataReducer } from 'app/store/features/Metadata/metadataSlice'
import { reducer as boardReducer } from 'app/store/features/Board/boardSlice'

export const store = configureStore({
  reducer: {
    metadata: metadataReducer,
    board: boardReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: process.env.NODE_ENV !== 'production',
})
