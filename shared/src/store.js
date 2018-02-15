import { createStore , combineReducers } from 'redux';
import countReducer from './reducers/countReducer';

const reducers = combineReducers({
  count: countReducer
});

export const store = createStore(reducers);
export const dispatch = store.dispatch;
