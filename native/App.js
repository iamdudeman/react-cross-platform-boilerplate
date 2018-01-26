import React from 'react';
import Counter from './src/components/Counter';
import { Provider } from 'react-redux';
import { containers, store } from '../shared';

const AppCounter = containers.CounterContainer(Counter);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppCounter />
      </Provider>
    );
  }
}
