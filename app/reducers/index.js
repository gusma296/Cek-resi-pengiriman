import {combineReducers} from 'redux';
import user from './user';
import history from './history';

const rootReducers = combineReducers({
  user: user,
  history: history,
});

export default rootReducers;
