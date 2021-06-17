import { store } from 'app/store'

export type ApplicationState = ReturnType<typeof store.getState>
export type ApplicationDispatch = typeof store.dispatch
