import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useSound from 'use-sound'
import { lightThemeMode, darkThemeMode } from '../../features/actions'
import {
  EButtonsSoundStatus,
  EThemeMode,
  TThemeModeProps,
} from '../../models/interface'
import './theme-mode.css'
import lightModeSound from '../../sounds/increase.mp3'
import darkModeSound from '../../sounds/decrease.mp3'
import lightModeIcon from '../../icons/light_mode_white_24dp.svg'
import darkModeIcon from '../../icons/dark_mode_white_24dp.svg'

export const ThemeMode: FunctionComponent<TThemeModeProps> = (
  props: TThemeModeProps
) => {
  const { sound: buttonsSoundStatus } = props
  const { themeMode: themeModeStatus } = props
  const dispatch = useDispatch()
  const [lightSound] = useSound(lightModeSound)
  const [darkSound] = useSound(darkModeSound)
  useEffect(() => {
    const root = window.document.documentElement
    root.removeAttribute('class')
    root.classList.add(themeModeStatus)
  }, [themeModeStatus])
  return (
    <section className="theme-mode">
      <div className="theme-mode__buttons flex justify-center items-center overflow-hidden rounded-full transition-colors duration-500 transform scale-100 active:scale-95">
        {themeModeStatus === EThemeMode.light ? (
          <button
            className="theme-button focus:outline-none focus:bg-transparent dark:focus:bg-transparent"
            type="button"
            onClick={() => {
              dispatch(darkThemeMode())
              if (buttonsSoundStatus === EButtonsSoundStatus.enable) {
                lightSound()
              }
            }}
          >
            <img src={lightModeIcon} alt="volume" />
          </button>
        ) : (
          <button
            className="theme-button focus:outline-none focus:bg-transparent dark:focus:bg-transparent"
            type="button"
            onClick={() => {
              dispatch(lightThemeMode())
              if (buttonsSoundStatus === EButtonsSoundStatus.enable) {
                darkSound()
              }
            }}
          >
            <img src={darkModeIcon} alt="volume" />
          </button>
        )}
      </div>
    </section>
  )
}
