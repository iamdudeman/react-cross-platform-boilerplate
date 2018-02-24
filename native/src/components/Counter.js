import { Button, StatusBar, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Counter presentational component.
 *
 * @param {Object} props
 * @param {number} props.count
 * @param {function} props.onClickIncrement
 * @param {function} props.onClickDecrement
 * @param {function} props.onClickReset
 */
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
  onClickReset: PropTypes.func.isRequired
};

export default Counter;
