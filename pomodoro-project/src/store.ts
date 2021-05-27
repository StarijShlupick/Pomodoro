import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer, CounterRelaxReducer } from './features/reducers'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    relax: CounterRelaxReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
