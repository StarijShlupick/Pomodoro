import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { decrementRelax, incrementRelax } from '../../features/actions'
import { EButtonsSoundStatus, TRelaxProps } from '../../models/interface'
import increaseSound from '../../sounds/increase.mp3'
import decreaseSound from '../../sounds/decrease.mp3'

export const Relax: FunctionComponent<TRelaxProps> = (props: TRelaxProps) => {
  const { relax: relaxTime } = props
  const { sound: buttonSound } = props
  const dispatch = useDispatch()
  const [increase] = useSound(increaseSound)
  const [decrease] = useSound(decreaseSound)
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
            dispatch(decrementRelax())
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
