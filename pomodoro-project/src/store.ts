import { configureStore } from '@reduxjs/toolkit'
import {
  ButtonsSoundReducer,
  CounterReducer,
  CounterRelaxReducer,
  TimerStatusReducer,
} from './features/reducers'

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    relax: CounterRelaxReducer,
    buttonsSound: ButtonsSoundReducer,
    timerStatus: TimerStatusReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
