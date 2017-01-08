import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      helloworld
    </div>
  </Provider>,
  document.getElementById('root')
)
