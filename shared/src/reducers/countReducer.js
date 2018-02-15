/**
 * The count reducer
 * @param {number} [state=0] - The current state
 * @param {Object} action - The action to process
 * @param {string} action.type - The type of the action
 */
export default (state = 0, action) => {
  switch (action.type) {

  case 'INCREMENT_COUNT':
    return state + 1;
  case 'DECREMENT_COUNT':
    return state - 1;
  case 'RESET_COUNT':
    return 0;
  default:
    return state;
  }
};
