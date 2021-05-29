import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { decrementSession, incrementSession } from '../../features/actions'
import { EButtonsSoundStatus, TSessionProps } from '../../models/interface'
import increaseSound from '../../sounds/increase.mp3'
import decreaseSound from '../../sounds/decrease.mp3'

export const Session: FunctionComponent<TSessionProps> = (
  props: TSessionProps
) => {
  const { count: sessionTime } = props
  const { sound: buttonSound } = props
  const dispatch = useDispatch()
  const [increase] = useSound(increaseSound)
  const [decrease] = useSound(decreaseSound)
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
            if (buttonSound === EButtonsSoundStatus.enable) {
              increase()
            }
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrementSession())
            if (buttonSound === EButtonsSoundStatus.enable) {
              decrease()
            }
          }}
        >
          decrement
        </button>
      </div>
    </section>
  )
}
