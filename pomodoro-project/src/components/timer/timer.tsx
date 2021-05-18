import React, { FunctionComponent, useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { incrementSession } from '../../features/actions'
import './timer.css'
import { ETimerStatus } from '../../models/interface'

type TTimerProps = {
  count: number
}

export const Timer: FunctionComponent<TTimerProps> = (count) => {
  const { count: startTime } = count
  const [time, setTime] = useState({
    m: startTime,
    s: 0,
  })
  const [timerStatus, setTimerStatus] = useState(ETimerStatus.inactive)
  const timerIntervalRef = useRef<number | null>(null)
  let updatedM = time.m
  let updatedS = time.s
  const run = () => {
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
  const start = () => {
    run()
    setTimerStatus(ETimerStatus.active)
    timerIntervalRef.current = window.setInterval(run, 1000)
  }
  const stop = () => {
    window.clearInterval(timerIntervalRef.current || 0)
    setTimerStatus(ETimerStatus.pause)
  }
  const reset = () => {
    window.clearInterval(timerIntervalRef.current || 0)
    setTimerStatus(ETimerStatus.inactive)
    setTime({
      m: startTime,
      s: 0,
    })
  }
  const resume = () => {
    start()
  }
  // const dispatch = useDispatch()
  return (
    <>
      <div className="timer flex justify-center items-center rounded-full shadow-lg">
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
    </>
  )
}
