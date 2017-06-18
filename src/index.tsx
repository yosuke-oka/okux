import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './redux-sample/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {counter} from './redux-sample/reducers'


const store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('redux')
);

ReactDOM.render(
  <div>建設中</div>,
  document.getElementById('okux')
);