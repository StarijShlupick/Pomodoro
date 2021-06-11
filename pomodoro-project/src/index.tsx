import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import './index.css'

import App from './App'

const bodyDoc = window.document.body
bodyDoc.classList.add(
  'bg-white',
  'dark:bg-gray-700',
  'transition',
  'duration-500'
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
