import { combineReducers } from 'redux';
import { SITE_ACTIONS } from '../actions/siteActions';


// list of sites for in the table
const allSites = (state = [], action) => {
  switch (action.type) {
    case 'SET_SITE':
      return action.payload;
  }
  return state;
}
// list of last 3 deactivated sites 
const recentThreeSites = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_RECENT_THREE_SITE':
      let index = -1;
      for (let i = 0; i < state.length; i++) {
        if (state[i]._id === action.payload._id) {
          index = i;
        }
      }
      if (index !== -1) { // found a match
        state.splice(index, 1);
        return [action.payload, ...state];
      } else if (state.length < 3) {
        return [action.payload, ...state];
      }
      else {
        return [action.payload, state[0], state[1]];
      }
  }
  return state;
}

export default combineReducers({
  allSites,
  recentThreeSites,
});


