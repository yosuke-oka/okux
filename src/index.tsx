import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OkuxApp } from './okux/OkuxApp'
import { ReduxApp } from './redux-sample/ReduxApp'

ReactDOM.render(
  <ReduxApp />,
  document.getElementById('redux')
);

ReactDOM.render(
  <OkuxApp />,
  document.getElementById('okux')
);