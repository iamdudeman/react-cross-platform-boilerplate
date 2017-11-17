import React from 'react';
import PropTypes from 'prop-types';

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
    onClickReset: PropTypes.func.isRequired,
};

export default Counter;
