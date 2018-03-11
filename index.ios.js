import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './App/configureStore'
import App from './App/Containers/app'

const store = configureStore()

const GarezApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('rnredux', () => GarezApp)