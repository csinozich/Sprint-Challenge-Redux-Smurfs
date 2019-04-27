import { combineReducers } from 'redux';
import { smurfReducer } from './smurfReducer';
import { singleReducer } from './singleReducer';

export default combineReducers({
  smurfReducer,
  singleReducer
})
