import React from 'react';
import { containers, store } from '../../shared';
import Counter from './components/Counter';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const DesktopCounter = containers.CounterContainer(Counter);

render(
  <Provider store={store}>
    <DesktopCounter />
  </Provider>,
  document.getElementById('root')
);
