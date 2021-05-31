import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { disableButtonsSound, enableButtonsSound } from '../../features/actions'
import { EButtonsSoundStatus, TButtonsSoundProps } from '../../models/interface'
import './buttons-sound.css'
import volumeOnIcon from '../../icons/volume_up_white_24dp.svg'
import volumeOffIcon from '../../icons/volume_off_white_24dp.svg'
import buttonsSound from '../../sounds/sounds-on.mp3'

export const ButtonsSound: FunctionComponent<TButtonsSoundProps> = (sound) => {
  const { sound: buttonsSoundStatus } = sound
  const dispatch = useDispatch()
  const [soundOn] = useSound(buttonsSound)
  return (
    <section className="buttons-sound">
      <h3 className="buttons-sound__header">Buttons sound</h3>
      <div className="buttons-sound__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg">
        {buttonsSoundStatus === EButtonsSoundStatus.enable ? (
          <button
            className="volume-button focus:outline-none"
            type="button"
            onClick={() => {
              dispatch(disableButtonsSound())
            }}
          >
            <img src={volumeOnIcon} alt="volume" />
          </button>
        ) : (
          <button
            className="volume-button focus:outline-none"
            type="button"
            onClick={() => {
              dispatch(enableButtonsSound())
              soundOn()
            }}
          >
            <img src={volumeOffIcon} alt="volume" />
          </button>
        )}
      </div>
    </section>
  )
}
