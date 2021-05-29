export interface IAction {
  type: string
  payload?: any
}
export enum ETimerStatus {
  inactive,
  active,
  pause,
}
export enum ECounterStatus {
  session,
  relax,
}
export enum EButtonsSoundStatus {
  enable,
  disable,
}
export type TTimerProps = {
  count: number
  relax: number
  sound: EButtonsSoundStatus
}
export type TSessionProps = {
  count: number
  sound: EButtonsSoundStatus
}
export type TRelaxProps = {
  relax: number
  sound: EButtonsSoundStatus
}

export type TButtonsSoundProps = {
  sound: EButtonsSoundStatus
}
