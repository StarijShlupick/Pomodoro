import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { disableButtonsSound, enableButtonsSound } from '../../features/actions'
import { EButtonsSoundStatus, TButtonsSoundProps } from '../../models/interface'
import buttonsSound from '../../sounds/sounds-on.mp3'

export const ButtonsSound: FunctionComponent<TButtonsSoundProps> = (sound) => {
  const { sound: buttonsSoundStatus } = sound
  const dispatch = useDispatch()
  const [soundOn] = useSound(buttonsSound)
  return (
    <section className="buttons-sound">
      <h3 className="buttons-sound__header">Buttons sound</h3>
      <div className="buttons-sound__buttons">
        {buttonsSoundStatus === EButtonsSoundStatus.enable ? (
          <button
            type="button"
            onClick={() => {
              dispatch(disableButtonsSound())
            }}
          >
            volumeOn
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              dispatch(enableButtonsSound())
              soundOn()
            }}
          >
            volumeOFF
          </button>
        )}
      </div>
    </section>
  )
}
