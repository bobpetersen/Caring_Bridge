import { combineReducers } from 'redux';
import login from './loginReducer';
import profileReducer from './profileReducer';
import scanReducer from './scanReducer';
import siteReducer from './siteReducer'
import user from './userReducer';

const store = combineReducers({
  login,
  profileReducer,
  scanReducer,
  siteReducer,
  user,
});

export default store;
