import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { decrementRelax, incrementRelax } from '../../features/actions'
import { TRelaxProps } from '../../models/interface'

export const Relax: FunctionComponent<TRelaxProps> = (relax) => {
  const { relax: relaxTime } = relax
  const dispatch = useDispatch()
  return (
    <section className="relax">
      <h3 className="relax__header">Relax length</h3>
      <div className="relax__display">
        <span>{relaxTime}</span>
        <span>min</span>
      </div>
      <div className="relax__buttons">
        <button
          type="button"
          onClick={() => {
            dispatch(incrementRelax())
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrementRelax())
          }}
        >
          decrement
        </button>
      </div>
    </section>
  )
}
