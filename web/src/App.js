import React from 'react';
import { containers } from 'shared';
import Counter from './components/Counter';

const WebCounter = containers.CounterContainer(Counter);

const App = () => (
    <WebCounter />
);

export default App;
