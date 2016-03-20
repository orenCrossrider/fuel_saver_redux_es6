import { createStore } from 'redux';
import rootReducer from '../app/rootReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
