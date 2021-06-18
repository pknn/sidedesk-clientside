import { store } from 'app/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type ApplicationState = ReturnType<typeof store.getState>
export type ApplicationDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector
export const useAppDispatch = () => useDispatch<ApplicationDispatch>()
