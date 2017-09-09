import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './main.css';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './factories/createStore';
import App from './components/App';
import { ThemeProvider } from './styles/StyledComponents';
import Theme from './styles/Theme';
import { enableAutoReload } from './autoReload';

enableAutoReload();

const mountNode = document.getElementById('app');

const store = createStore();

render(
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  mountNode,
);
