import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { reducer as metadataReducer } from 'app/store/features/Metadata/slice'
import { reducer as boardReducer } from 'app/store/features/Board/slice'

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
