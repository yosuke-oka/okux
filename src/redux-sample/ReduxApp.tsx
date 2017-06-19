import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {counter} from '../reducers'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps, CounterContainer} from '../CounterContainer' 

const store = createStore(counter)
const App = connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
export const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)