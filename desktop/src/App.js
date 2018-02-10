import React from 'react';
import store from '../../shared/src/store';
import CounterContainer from '../../shared/src/containers/CounterContainer';
import Counter from './components/Counter';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const DesktopCounter = CounterContainer(Counter);

render(
  <Provider store={store}>
    <DesktopCounter />
  </Provider>,
  document.getElementById('root')
);
