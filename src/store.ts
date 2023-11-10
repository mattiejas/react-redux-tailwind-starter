import { configureStore, type Middleware } from '@reduxjs/toolkit'
import todosReducer from './features/todosSlice'
import logger from 'redux-logger'

export const store = configureStore({
  devTools: true,
  reducer: {
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware: () => Middleware[]) =>
    getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
