import { IAction } from '../models/interface'

export const CounterReducer = (state = 25, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT__COUNTER':
      return state + 1
    case 'DECREMENT__COUNTER':
      return state - 1
    default:
      return state
  }
}

export const CounterRelaxReducer = (state = 5, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT__RELAX-COUNTER':
      return state + 1
    case 'DECREMENT__RELAX-COUNTER':
      return state - 1
    default:
      return state
  }
}
