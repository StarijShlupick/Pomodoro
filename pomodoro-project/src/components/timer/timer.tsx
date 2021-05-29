import React, { FunctionComponent, useRef, useState } from 'react'
import './timer.css'
import useSound from 'use-sound'
import { useDispatch } from 'react-redux'
import {
  EButtonsSoundStatus,
  ECounterStatus,
  ETimerStatus,
  TTimerProps,
} from '../../models/interface'
import sessionSound from '../../sounds/session.mp3'
import relaxSound from '../../sounds/relax.mp3'
import startSound from '../../sounds/start-button.mp3'
import playIcon from '../../icons/play_arrow_white_24dp.svg'
import stopIcon from '../../icons/stop_white_24dp.svg'
import resetIcon from '../../icons/restart_alt_white_24dp.svg'
import {
  activeTimerStatus,
  inactiveTimerStatus,
  pauseTimerStatus,
} from '../../features/actions'

export const Timer: FunctionComponent<TTimerProps> = (props: TTimerProps) => {
  const { count: startTime } = props
  const { relax: relaxTime } = props
  const { sound: buttonSound } = props
  const { timerStatus } = props
  const [time, setTime] = useState({
    m: startTime,
    s: 0,
  })
  const [counterStatus, setCounterStatus] = useState(ECounterStatus.session)
  const dispatch = useDispatch()
  const timerIntervalRef = useRef<number | null>(null)
  let updatedM = time.m
  let updatedS = time.s
  const [sessionPlay] = useSound(sessionSound)
  const [relaxPlay] = useSound(relaxSound)
  const [startPlay] = useSound(startSound)
  const reset = (): void => {
    window.clearInterval(timerIntervalRef.current || 0)
    dispatch(inactiveTimerStatus())
    setCounterStatus(ECounterStatus.session)
    setTime({
      m: startTime,
      s: 0,
    })
  }
  function switchMode(): void {
    if (counterStatus === ECounterStatus.session) {
      window.clearInterval(timerIntervalRef.current || 0)
      dispatch(inactiveTimerStatus())
      setCounterStatus(ECounterStatus.relax)
      setTime({
        m: relaxTime,
        s: 0,
      })
      updatedM = relaxTime
      sessionPlay()
    }
    if (counterStatus === ECounterStatus.relax) {
      reset()
      updatedM = startTime
      relaxPlay()
    }
  }
  const run = () => {
    if (updatedM === 0 && updatedS === 1) {
      switchMode()
    }
    if (updatedS === 0) {
      updatedM -= 1
      updatedS = 60
    }
    updatedS -= 1
    return setTime({
      m: updatedM,
      s: updatedS,
    })
  }
  const start = (): void => {
    run()
    dispatch(activeTimerStatus())
    timerIntervalRef.current = window.setInterval(run, 1000)
    if (buttonSound === EButtonsSoundStatus.enable) {
      startPlay()
    }
  }
  const stop = (): void => {
    window.clearInterval(timerIntervalRef.current || 0)
    dispatch(pauseTimerStatus())
  }
  const resume = (): void => {
    start()
  }
  return (
    <section className="timer">
      <div className="timer__wrapper flex justify-center items-center rounded-full shadow-lg">
        <div className="timer__screen">
          <span>{time.m >= 10 ? time.m : `0${time.m}`}</span>
          <span>:</span>
          <span>{time.s >= 10 ? time.s : `0${time.s}`}</span>
        </div>
      </div>
      <div className="timer__buttons flex justify-center items-center overflow-hidden rounded-full shadow-lg">
        {timerStatus === ETimerStatus.inactive ? (
          <button
            className="start-button w-full focus:outline-none"
            type="button"
            onClick={start}
          >
            <img src={playIcon} alt="play" />
          </button>
        ) : (
          ''
        )}
        {timerStatus === ETimerStatus.active ? (
          <>
            <button
              className="stop-button w-2/4 focus:outline-none"
              type="button"
              onClick={stop}
            >
              <img src={stopIcon} alt="play" />
            </button>
            <button
              className="reset-button w-2/4 focus:outline-none"
              type="button"
              onClick={reset}
            >
              <img src={resetIcon} alt="play" />
            </button>
          </>
        ) : (
          ''
        )}
        {timerStatus === ETimerStatus.pause ? (
          <>
            <button
              className="resume-button w-2/4 focus:outline-none"
              type="button"
              onClick={resume}
            >
              <img src={playIcon} alt="play" />
            </button>
            <button
              className="reset-button w-2/4 focus:outline-none"
              type="button"
              onClick={reset}
            >
              <img src={resetIcon} alt="play" />
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}
