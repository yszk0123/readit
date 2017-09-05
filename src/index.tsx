import './hmr';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './factories/createStore';
import App from './components/App';
import { setStatefulModules } from './hmr';

setStatefulModules('hmr', 'store/', 'actions/', 'factories/');

const mountNode = document.getElementById('app');

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode,
);
