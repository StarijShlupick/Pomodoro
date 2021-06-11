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
  session = 'Session mode',
  relax = 'Relax mode',
}
export enum EButtonsSoundStatus {
  enable,
  disable,
}
export enum ETestMode {
  enable = 10,
  disable = 1000,
}
export enum EThemeMode {
  light = 'light-theme',
  dark = 'dark',
}
export type TTimerProps = {
  count: number
  relax: number
  timerStatus: ETimerStatus
  sound: EButtonsSoundStatus
  testMode: ETestMode
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

export type TTestModeProps = {
  sound: EButtonsSoundStatus
  testMode: ETestMode
}

export type TThemeModeProps = {
  sound: EButtonsSoundStatus
  themeMode: EThemeMode
}
