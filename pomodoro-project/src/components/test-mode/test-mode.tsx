import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { disableTestMode, enableTestMode } from '../../features/actions'
import { ETestMode, TTestModeProps } from '../../models/interface'
import './test-mode.css'
import testerOnIcon from '../../icons/code_white_24dp.svg'
import testerOffIcon from '../../icons/code_off_white_24dp.svg'
import buttonsSound from '../../sounds/sounds-on.mp3'

export const TestMode: FunctionComponent<TTestModeProps> = (testMode) => {
  const { testMode: testModeStatus } = testMode
  const dispatch = useDispatch()
  const [soundOn] = useSound(buttonsSound)
  return (
    <section className="test-mode">
      <h3 className="test-mode__header">Test mode</h3>
      <div className="test-mode__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg">
        {testModeStatus === ETestMode.enable ? (
          <button
            className="volume-button focus:outline-none"
            type="button"
            onClick={() => {
              dispatch(disableTestMode())
            }}
          >
            <img src={testerOnIcon} alt="test" />
          </button>
        ) : (
          <button
            className="volume-button focus:outline-none"
            type="button"
            onClick={() => {
              dispatch(enableTestMode())
              soundOn()
            }}
          >
            <img src={testerOffIcon} alt="test" />
          </button>
        )}
      </div>
    </section>
  )
}
