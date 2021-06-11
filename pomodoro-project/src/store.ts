import { configureStore } from '@reduxjs/toolkit'
import {
  ButtonsSoundReducer,
  CounterReducer,
  CounterRelaxReducer,
  TestModeReducer,
  ThemeModeReducer,
  TimerStatusReducer,
} from './features/reducers'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
export const saveState = (state: object) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    throw new Error("Can't save changes in local storage")
  }
}

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    relax: CounterRelaxReducer,
    buttonsSound: ButtonsSoundReducer,
    timerStatus: TimerStatusReducer,
    testMode: TestModeReducer,
    themeMode: ThemeModeReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() =>
  saveState({
    counter: store.getState().counter,
    relax: store.getState().relax,
    buttonsSound: store.getState().buttonsSound,
    testMode: store.getState().testMode,
    themeMode: store.getState().themeMode,
  })
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
