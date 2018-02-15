import { dispatch } from '../store';

/**
 * Actions file for changing the count.
 * @module CountActions
 */

/**
 * Decrements the count by one.
 * @exports
 * @memberof CountActions
 */
export const decrement = () => {
  dispatch({ type: 'DECREMENT_COUNT' });
};

/**
 * Increments the count by one.
 * @exports
 * @memberof CountActions
 */
export const increment = () => {
  dispatch({ type: 'INCREMENT_COUNT' });
};

/**
 * Resets the count to 0.
 * @exports
 * @memberof CountActions
 */
export const reset = () => {
  dispatch({ type: 'RESET_COUNT' });
};
