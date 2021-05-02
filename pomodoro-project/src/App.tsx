import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const App: React.FC = () => {
  const count = useSelector( (state: RootState) => state.counter);
  return (
    <h1 className="counter">COUNTER: {count}</h1>
  )
}

export default App