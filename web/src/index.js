import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'shared/store';
import App from './App';
import React from 'react';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
