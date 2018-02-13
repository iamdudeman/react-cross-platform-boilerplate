import CounterContainer from 'shared/containers/CounterContainer';
import Counter from './components/Counter';
import React from 'react';

const WebCounter = CounterContainer(Counter);

const App = () => (
  <WebCounter />
);

export default App;
