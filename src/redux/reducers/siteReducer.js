import { combineReducers } from 'redux';

// list of sites for in the table
const allSites = (state = [], action) => {
  switch (action.type) {
    case 'SET_SITES':
      return action.payload;
  }
  return state;
}

export default combineReducers({
  allSites,
});