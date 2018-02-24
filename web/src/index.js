import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { store } from 'shared/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
