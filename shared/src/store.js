import { createStore , combineReducers } from 'redux';
import count from './reducers/count';

const reducers = combineReducers({
  count
});

export const store = createStore(reducers);
export const dispatch = store.dispatch;
