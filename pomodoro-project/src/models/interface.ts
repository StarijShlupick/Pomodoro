export interface IAction {
  type: string
  payload?: any
}
export enum ETimerStatus {
  inactive,
  active,
  pause,
}
