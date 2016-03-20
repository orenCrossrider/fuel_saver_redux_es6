import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSaver/fuelSavingsReducer';

const rootReducer = combineReducers({
  fuelSavingsAppState
});

export default rootReducer;
