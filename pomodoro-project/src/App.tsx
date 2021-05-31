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
import { ButtonsSound } from './components/ButtonsSound/buttons-sound'
import { ETimerStatus } from './models/interface'

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter)
  const relax = useSelector((state: RootState) => state.relax)
  const sound = useSelector((state: RootState) => state.buttonsSound)
  const timerStatus = useSelector((state: RootState) => state.timerStatus)
  return (
    <Router>
      <header
        className={`header ${
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
      </header>
      <Switch>
        <Route exact path="/">
          <section className="timer">
            <Timer
              count={count}
              relax={relax}
              timerStatus={timerStatus}
              sound={sound}
            />
          </section>
        </Route>
        <Route path="/settings">
          <section className="settings">
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
