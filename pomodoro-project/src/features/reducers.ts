import {
  EButtonsSoundStatus,
  ETestMode,
  ETimerStatus,
  IAction,
} from '../models/interface'

export const CounterReducer = (state = 25, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT__COUNTER':
      return state + 5
    case 'DECREMENT__COUNTER':
      return state - 5
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

export const ButtonsSoundReducer = (
  state = EButtonsSoundStatus.enable,
  action: IAction
) => {
  switch (action.type) {
    case 'ENABLE__BUTTONS-SOUND':
      return EButtonsSoundStatus.enable
    case 'DISABLE__BUTTONS-SOUND':
      return EButtonsSoundStatus.disable
    default:
      return state
  }
}

export const TestModeReducer = (state = ETestMode.disable, action: IAction) => {
  switch (action.type) {
    case 'ENABLE__TEST-MODE':
      return ETestMode.enable
    case 'DISABLE__TEST-MODE':
      return ETestMode.disable
    default:
      return state
  }
}

export const TimerStatusReducer = (
  state = ETimerStatus.inactive,
  action: IAction
) => {
  switch (action.type) {
    case 'INACTIVE__TIMER-STATUS':
      return ETimerStatus.inactive
    case 'ACTIVE__TIMER-STATUS':
      return ETimerStatus.active
    case 'PAUSE__TIMER-STATUS':
      return ETimerStatus.pause
    default:
      return state
  }
}
