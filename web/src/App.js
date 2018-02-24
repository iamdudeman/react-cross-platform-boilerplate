import Counter from './components/Counter';
import CounterContainer from 'shared/containers/CounterContainer';
import React from 'react';

const WebCounter = CounterContainer(Counter);

const App = () => (
  <WebCounter />
);

export default App;
