import React, { FunctionComponent, useRef, useState } from 'react'
import './timer.css'
import useSound from 'use-sound'
import {
  ECounterStatus,
  ETimerStatus,
  TTimerProps,
} from '../../models/interface'
import sessionSound from '../../sounds/session.mp3'
import relaxSound from '../../sounds/relax.mp3'

export const Timer: FunctionComponent<TTimerProps> = (props: TTimerProps) => {
  const { count: startTime } = props
  const { relax: relaxTime } = props
  const [time, setTime] = useState({
    m: startTime,
    s: 0,
  })
  const [timerStatus, setTimerStatus] = useState(ETimerStatus.inactive)
  const [counterStatus, setCounterStatus] = useState(ECounterStatus.session)
  const timerIntervalRef = useRef<number | null>(null)
  let updatedM = time.m
  let updatedS = time.s
  const [sessionPlay] = useSound(sessionSound)
  const [relaxPlay] = useSound(relaxSound)
  const reset = (): void => {
    window.clearInterval(timerIntervalRef.current || 0)
    setTimerStatus(ETimerStatus.inactive)
    setCounterStatus(ECounterStatus.session)
    setTime({
      m: startTime,
      s: 0,
    })
  }
  function switchMode(): void {
    if (counterStatus === ECounterStatus.session) {
      window.clearInterval(timerIntervalRef.current || 0)
      setTimerStatus(ETimerStatus.inactive)
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
    setTimerStatus(ETimerStatus.active)
    timerIntervalRef.current = window.setInterval(run, 100)
  }
  const stop = (): void => {
    window.clearInterval(timerIntervalRef.current || 0)
    setTimerStatus(ETimerStatus.pause)
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
      <div className="timer__buttons flex justify-center items-center rounded-full">
        {timerStatus === ETimerStatus.inactive ? (
          <button type="button" onClick={start}>
            start
          </button>
        ) : (
          ''
        )}
        {timerStatus === ETimerStatus.active ? (
          <>
            <button type="button" onClick={stop}>
              stop
            </button>
            <button type="button" onClick={reset}>
              reset
            </button>
          </>
        ) : (
          ''
        )}
        {timerStatus === ETimerStatus.pause ? (
          <>
            <button type="button" onClick={resume}>
              resume
            </button>
            <button type="button" onClick={reset}>
              reset
            </button>
          </>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}
