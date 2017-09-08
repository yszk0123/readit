import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { enableAutoReload } from './autoReload';
import createStore from './factories/createStore';
import App from './components/App';

enableAutoReload();

const mountNode = document.getElementById('app');

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode,
);
