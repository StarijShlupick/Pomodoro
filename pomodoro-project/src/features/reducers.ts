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
