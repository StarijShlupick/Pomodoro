import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { decrementRelax, incrementRelax } from '../../features/actions'
import { EButtonsSoundStatus, TRelaxProps } from '../../models/interface'
import './relax.css'
import increaseSound from '../../sounds/increase.mp3'
import decreaseSound from '../../sounds/decrease.mp3'
import errorSound from '../../sounds/error_text_message.mp3'
import incrementIcon from '../../icons/arrow_upward_white_24dp.svg'
import decrementIcon from '../../icons/arrow_downward_white_24dp.svg'

export const Relax: FunctionComponent<TRelaxProps> = (props: TRelaxProps) => {
  const { relax: relaxTime } = props
  const { sound: buttonSound } = props
  const dispatch = useDispatch()
  const [increase] = useSound(increaseSound)
  const [decrease] = useSound(decreaseSound)
  const [error] = useSound(errorSound)
  return (
    <section className="relax">
      <h3 className="relax__header">Relax length</h3>
      <div className="relax__wrapper flex justify-center items-center rounded-full shadow-lg">
        <div className="relax__display">
          <span>{relaxTime}</span>
          <span>min</span>
        </div>
      </div>
      <div className="relax__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg">
        <button
          className="increase-button w-2/4 focus:outline-none"
          type="button"
          onClick={() => {
            if (relaxTime < 30) {
              dispatch(incrementRelax())
              if (buttonSound === EButtonsSoundStatus.enable) {
                increase()
              }
            }
            if (
              buttonSound === EButtonsSoundStatus.enable &&
              relaxTime === 30
            ) {
              error()
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
            if (relaxTime > 1) {
              dispatch(decrementRelax())
              if (buttonSound === EButtonsSoundStatus.enable) {
                decrease()
              }
            }
            if (buttonSound === EButtonsSoundStatus.enable && relaxTime === 1) {
              error()
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
