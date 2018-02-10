import React from 'react';
import Counter from './native/src/components/Counter';
import { Provider } from 'react-redux';
import store from './shared/src/store';
import CounterContainer from './shared/src/containers/CounterContainer';

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
