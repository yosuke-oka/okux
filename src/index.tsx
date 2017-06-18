import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './redux-sample/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {counter} from './redux-sample/reducers'
import { Component } from './okux/component'


const store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('redux')
);

ReactDOM.render(
  <Component />,
  document.getElementById('okux')
);