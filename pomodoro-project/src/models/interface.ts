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
export type TTimerProps = {
  count: number
  relax: number
}
export type TSessionProps = {
  count: number
}
export type TRelaxProps = {
  relax: number
}
