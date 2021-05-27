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
