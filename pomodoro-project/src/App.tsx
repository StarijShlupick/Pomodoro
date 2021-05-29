import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'
import { Timer } from './components/timer/timer'
import { Session } from './components/session/session'
import { Relax } from './components/relax/relax'
import { RootState } from './store'
import { ButtonsSound } from './components/ButtonsSound/buttons-sound'

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter)
  const relax = useSelector((state: RootState) => state.relax)
  const sound = useSelector((state: RootState) => state.buttonsSound)
  return (
    <Router>
      <header className="header">
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
          <Timer count={count} relax={relax} sound={sound} />
        </Route>
        <Route path="/settings">
          <h1>Settings</h1>
          <Session count={count} sound={sound} />
          <Relax relax={relax} sound={sound} />
          <ButtonsSound sound={sound} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
