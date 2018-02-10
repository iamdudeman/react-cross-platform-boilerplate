import { Provider } from 'react-redux';
import { render } from 'react-dom';
import CounterContainer from '../../shared/src/containers/CounterContainer';
import Counter from './components/Counter';
import React from 'react';
import store from '../../shared/src/store';

const DesktopCounter = CounterContainer(Counter);

render(
  <Provider store={store}>
    <DesktopCounter />
  </Provider>,
  document.getElementById('root')
);
