import React from 'react';
import { Button, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({ count, onClickIncrement, onClickDecrement, onClickReset}) => (
  <View>
    <StatusBar hidden={true} />
    <Text>Count: {count}</Text>
    <Button title="Increment" onPress={onClickIncrement} />
    <Button title="Decrement" onPress={onClickDecrement} />
    <Button title="Reset" onPress={onClickReset} />
  </View>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
};

export default Counter;
