import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

const store = combineReducers({
  login,
  profileReducer,
  scanReducer,
  siteReducer
  user,
});

export default store;
