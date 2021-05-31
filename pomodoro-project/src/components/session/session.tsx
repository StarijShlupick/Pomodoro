import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { decrementSession, incrementSession } from '../../features/actions'
import { EButtonsSoundStatus, TSessionProps } from '../../models/interface'
import './session.css'
import increaseSound from '../../sounds/increase.mp3'
import decreaseSound from '../../sounds/decrease.mp3'
import incrementIcon from '../../icons/arrow_upward_white_24dp.svg'
import decrementIcon from '../../icons/arrow_downward_white_24dp.svg'

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
      <div className="session__wrapper flex justify-center items-center rounded-full shadow-lg">
        <div className="session__display">
          <span>{sessionTime}</span>
          <span>min</span>
        </div>
      </div>
      <div className="session__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg">
        <button
          className="increase-button w-2/4 focus:outline-none"
          type="button"
          onClick={() => {
            if (sessionTime < 120) {
              dispatch(incrementSession())
              if (buttonSound === EButtonsSoundStatus.enable) {
                increase()
              }
            }
            return null
          }}
        >
          <img src={incrementIcon} alt="play" />
        </button>
        <button
          className="decrease-button w-2/4 focus:outline-none"
          type="button"
          onClick={() => {
            if (sessionTime > 5) {
              dispatch(decrementSession())
              if (buttonSound === EButtonsSoundStatus.enable) {
                decrease()
              }
            }
            return null
          }}
        >
          <img src={decrementIcon} alt="play" />
        </button>
      </div>
    </section>
  )
}
