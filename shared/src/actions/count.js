import { dispatch } from '../store';

export const decrement = () => {
  dispatch({ type: 'DECREMENT_COUNT' });
};

export const increment = () => {
  dispatch({ type: 'INCREMENT_COUNT' });
};

export const reset = () => {
  dispatch({ type: 'RESET_COUNT' });
};
