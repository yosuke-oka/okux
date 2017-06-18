import * as React from 'react';
import { App } from './container';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {counter} from '../reducers'
const store = createStore(counter)

export const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)