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
const Counter = ({ onClickIncrement, onClickDecrement, onClickReset, count }) => (
  <div>
    <span>Count: {count}</span> <br />
    <button id="increment" onClick={onClickIncrement}>Increment</button>
    <button id="decrement" onClick={onClickDecrement}>Decrement</button>  <br/>
    <button id="reset" onClick={onClickReset}>Reset</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClickDecrement: PropTypes.func.isRequired,
  onClickIncrement: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired
};

export default Counter;
