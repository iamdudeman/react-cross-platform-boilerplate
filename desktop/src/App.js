import Counter from './components/Counter';
import CounterContainer from 'shared/containers/CounterContainer';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { store } from 'shared/store';

const DesktopCounter = CounterContainer(Counter);

render(
  <Provider store={store}>
    <DesktopCounter />
  </Provider>,
  document.getElementById('root')
);
