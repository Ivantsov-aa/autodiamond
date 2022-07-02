import { createStore } from 'redux';
import stateReducer from './stateReducer';

let store = createStore(stateReducer);

export default store;