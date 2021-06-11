import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { disableTestMode, enableTestMode } from '../../features/actions'
import {
  EButtonsSoundStatus,
  ETestMode,
  TTestModeProps,
} from '../../models/interface'
import './test-mode.css'
import testerOnIcon from '../../icons/code_white_24dp.svg'
import testerOffIcon from '../../icons/code_off_white_24dp.svg'
import buttonsSound from '../../sounds/sounds-on.mp3'

export const TestMode: FunctionComponent<TTestModeProps> = (
  props: TTestModeProps
) => {
  const { testMode: testModeStatus } = props
  const { sound: buttonsSoundStatus } = props
  const dispatch = useDispatch()
  const [soundOn] = useSound(buttonsSound)
  return (
    <section className="test-mode">
      <h3 className="test-mode__header text-black dark:text-gray-200 transition duration-500">
        Test mode
      </h3>
      <div className="test-mode__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg transition-colors duration-500 transform scale-100 active:scale-95">
        {testModeStatus === ETestMode.enable ? (
          <button
            className="volume-button focus:outline-none bg-green-500 dark:bg-red-400 focus:bg-green-500 dark:focus:bg-red-400"
            type="button"
            onClick={() => {
              dispatch(disableTestMode())
            }}
          >
            <img src={testerOnIcon} alt="test" />
          </button>
        ) : (
          <button
            className="volume-button focus:outline-none bg-green-500 dark:bg-red-400 focus:bg-green-500 dark:focus:bg-red-400"
            type="button"
            onClick={() => {
              dispatch(enableTestMode())
              if (buttonsSoundStatus === EButtonsSoundStatus.enable) {
                soundOn()
              }
            }}
          >
            <img src={testerOffIcon} alt="test" />
          </button>
        )}
      </div>
    </section>
  )
}
