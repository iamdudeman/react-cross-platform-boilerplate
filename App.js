import Counter from './native/src/components/Counter';
import CounterContainer from 'shared/containers/CounterContainer';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from 'shared/store';

const AppCounter = CounterContainer(Counter);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppCounter />
      </Provider>
    );
  }
}
