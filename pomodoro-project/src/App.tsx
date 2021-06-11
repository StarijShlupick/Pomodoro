import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css'
import { Timer } from './components/timer/timer'
import { Session } from './components/session/session'
import { Relax } from './components/relax/relax'
import { RootState } from './store'
import { ButtonsSound } from './components/buttons-sound/buttons-sound'
import { TestMode } from './components/test-mode/test-mode'
import { ETimerStatus } from './models/interface'
import { ThemeMode } from './components/theme-mode/theme-mode'

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter)
  const relax = useSelector((state: RootState) => state.relax)
  const sound = useSelector((state: RootState) => state.buttonsSound)
  const timerStatus = useSelector((state: RootState) => state.timerStatus)
  const testMode = useSelector((state: RootState) => state.testMode)
  const themeMode = useSelector((state: RootState) => state.themeMode)
  return (
    <Router>
      <header
        className={`flex items-center bg-red-400 dark:bg-purple-900 transition duration-500 shadow-lg header ${
          timerStatus === ETimerStatus.active ||
          timerStatus === ETimerStatus.pause
            ? 'header--inactive'
            : ''
        }`}
      >
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li">
              <NavLink exact to="/" activeClassName="selected">
                Timer
              </NavLink>
            </li>
            <li className="header__li">
              <NavLink exact to="/settings" activeClassName="selected">
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeMode sound={sound} themeMode={themeMode} />
      </header>
      <Switch>
        <Route exact path="/">
          <section className="timer">
            <Timer
              count={count}
              relax={relax}
              timerStatus={timerStatus}
              sound={sound}
              testMode={testMode}
            />
          </section>
        </Route>
        <Route path="/settings">
          <section className="settings">
            <TestMode sound={sound} testMode={testMode} />
            <Session count={count} sound={sound} />
            <Relax relax={relax} sound={sound} />
            <ButtonsSound sound={sound} />
          </section>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
