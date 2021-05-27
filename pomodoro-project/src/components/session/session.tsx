import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { decrementSession, incrementSession } from '../../features/actions'
import { TSessionProps } from '../../models/interface'

export const Session: FunctionComponent<TSessionProps> = (count) => {
  const { count: sessionTime } = count
  const dispatch = useDispatch()
  return (
    <section className="session">
      <h3 className="session__header">Session length</h3>
      <div className="session__display">
        <span>{sessionTime}</span>
        <span>min</span>
      </div>
      <div className="session__buttons">
        <button
          type="button"
          onClick={() => {
            dispatch(incrementSession())
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrementSession())
          }}
        >
          decrement
        </button>
      </div>
    </section>
  )
}
