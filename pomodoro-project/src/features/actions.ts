export const incrementSession = () => {
  return {
    type: 'INCREMENT__COUNTER',
  }
}

export const decrementSession = () => {
  return {
    type: 'DECREMENT__COUNTER',
  }
}

export const incrementRelax = () => {
  return {
    type: 'INCREMENT__RELAX-COUNTER',
  }
}

export const decrementRelax = () => {
  return {
    type: 'DECREMENT__RELAX-COUNTER',
  }
}

export const enableButtonsSound = () => {
  return {
    type: 'ENABLE__BUTTONS-SOUND',
  }
}

export const disableButtonsSound = () => {
  return {
    type: 'DISABLE__BUTTONS-SOUND',
  }
}

export const enableTestMode = () => {
  return {
    type: 'ENABLE__TEST-MODE',
  }
}

export const disableTestMode = () => {
  return {
    type: 'DISABLE__TEST-MODE',
  }
}

export const inactiveTimerStatus = () => {
  return {
    type: 'INACTIVE__TIMER-STATUS',
  }
}

export const activeTimerStatus = () => {
  return {
    type: 'ACTIVE__TIMER-STATUS',
  }
}

export const pauseTimerStatus = () => {
  return {
    type: 'PAUSE__TIMER-STATUS',
  }
}
