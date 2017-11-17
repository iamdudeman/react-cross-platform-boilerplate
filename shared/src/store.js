import { createStore } from 'redux';
import { reducers } from './reducers';

export const store = createStore(reducers);
export const dispatch = store.dispatch;
